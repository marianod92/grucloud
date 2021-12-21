const assert = require("assert");
const {
  pipe,
  tap,
  filter,
  map,
  tryCatch,
  eq,
  or,
  get,
  flatMap,
  not,
  assign,
  and,
  fork,
  switchCase,
  pick,
  reduce,
  gte,
} = require("rubico");
const {
  prepend,
  groupBy,
  pluck,
  when,
  callProp,
  find,
  unless,
  isEmpty,
  first,
  last,
  flatten,
  includes,
  keys,
  values,
  size,
  defaultsDeep,
  findIndex,
  identity,
} = require("rubico/x");
const path = require("path");
const fs = require("fs").promises;
const pluralize = require("pluralize");
const { snakeCase } = require("change-case");
const SwaggerParser = require("@apidevtools/swagger-parser");

const { omitIfEmpty } = require("@grucloud/core/Common");

const { isSubstituable } = require("./AzureCommon");

const ResourcesExcludes = [
  "Compute::VirtualMachineScaleSetVMExtension",
  "Compute::VirtualMachineScaleSetVMRunCommand",
  "Storage::BlobInventoryPolicy", //TODO 404 on list
  "Network::ExpressRouteCrossConnection",
  "Network::ExpressRouteCrossConnectionPeering", //TODO 404 on list
  "Network::ExpressRoutePort",
  "Network::InterfaceEndpoint",
  "Web::CertificateCsr",
  "Web::ClassicMobileService",
  "Web::Domain",
  "Web::ManagedHostingEnvironment",
];
const OpertionIdReplaceMap = {
  //Storage
  StorageAccounts_GetProperties: "StorageAccounts_Get",
  TableServices_GetServiceProperties: "TableServices_Get",
  QueueServices_GetServiceProperties: "QueueServices_Get",
  FileServices_GetServiceProperties: "FileServices_Get",
  BlobServices_GetServiceProperties: "BlobServices_Get",
};

const formatGroup = callProp("replace", "Microsoft.", "");

//TODO do we still need this ?
const selectMethod = (methods) =>
  pipe([
    () => methods,
    get("put"),
    when(isEmpty, () => methods.delete),
    tap.if(isEmpty, () => {
      assert("method should have put or delete");
    }),
    tap((params) => {
      assert(true);
    }),
  ])();

const resourceNameFromOperationId = ({ operationId }) =>
  pipe([
    tap((params) => {
      assert(operationId);
    }),
    () => OpertionIdReplaceMap[operationId],
    when(isEmpty, () => operationId),
    callProp("split", "_"),
    fork({
      parentName: pipe([first, pluralize.singular]),
      subName: pipe([last, callProp("replace", "Get", "")]),
    }),
    tap(({ parentName, subName }) => {
      assert(parentName);
    }),
    assign({
      shortName: switchCase([
        get("subName"),
        get("subName"),
        get("parentName"),
      ]),
      type: switchCase([
        ({ parentName, subName }) =>
          subName && includes(pluralize.singular(parentName))(subName),
        ({ subName }) => subName,
        ({ parentName, subName }) => `${parentName}${subName}`,
      ]),
    }),
    tap(({ type }) => {
      assert(type);
    }),
  ])();

const assignSwaggerPaths = pipe([
  get("paths"),
  map.entries(([path, methods]) => [
    path,
    pipe([() => methods, map(assign({ path: () => path }))])(),
  ]),
]);

const findGetAllByOutputSchema =
  ({ paths }) =>
  (methods) =>
    pipe([
      tap((params) => {
        assert(methods);
        //console.log(`findGetAllByOutputSchema ${methods.get.operationId}`);
      }),
      () => methods,
      get("get.responses.200.schema"),
      tap((schema) => {
        if (!schema.description) {
          assert(true);
        }
      }),
      (schema) =>
        pipe([
          () => paths,
          filter(
            get("get.responses.200.schema.properties.value.items.description")
          ),
          tap((params) => {
            // console.log("description:", size(schema.description));
            // console.log(schema.description);
            // console.log("descriptions:");
          }),
          // tap(
          //   forEach(
          //     pipe([
          //       get(
          //         "get.responses.200.schema.properties.value.items.description"
          //       ),
          //       tap(console.log),
          //       tap(pipe([size, console.log])),
          //     ])
          //   )
          // ),
          filter(
            eq(
              get(
                "get.responses.200.schema.properties.value.items.description"
              ),
              schema.description
            )
          ),
          tap.if(gte(size, 1), (results) => {
            assert(true);
            // console.log(
            //   `findGetAllByOutputSchema: multiple ${methods.get.operationId}`
            // );
          }),
          keys,
          first,
          get("get"),
          tap.if(isEmpty, () => {
            assert(true);
            // console.error(
            //   `findGetAllByOutputSchema cannot find getAll: ${methods.get.operationId}, description:`
            // );
            // console.error(schema.description);
            // forEach(
            //   pipe([
            //     tap((params) => {
            //       assert(true);
            //     }),
            //     get(
            //       "get.responses.200.schema.properties.value.items.description"
            //     ),
            //     tap(console.log),
            //     tap(pipe([size, console.log])),
            //   ])
            // )(paths);
            //console.log(`done`);
          }),
          tap((params) => {
            assert(true);
          }),
          ,
        ])(),
    ])();

const findGetAllOnSubscription =
  ({ paths, names }) =>
  (methods) =>
    pipe([
      tap((params) => {
        assert(methods);
        assert(paths);
        assert(names);
      }),
      () => methods.get.path,
      callProp("split", "/"),
      (pathArray) =>
        pipe([
          () => pathArray,
          findIndex(eq(identity, "providers")),
          (index) =>
            pipe([
              () => pathArray,
              callProp("slice", index, index + 3),
              tap((params) => {
                assert(true);
              }),
              callProp("join", "/"),
              tap((params) => {
                assert(true);
              }),
              prepend("/subscriptions/{subscriptionId}/"),
              (path) =>
                when(
                  () => path.match(new RegExp(`${names.type}s`, "ig")),
                  pipe([
                    () => paths,
                    filter(
                      pipe([
                        get("get.path", ""),
                        callProp("match", new RegExp(`^${path}$`, "ig")),
                      ])
                    ),
                    values,
                    first,
                    get("get"),
                    tap((params) => {
                      assert(true);
                    }),
                  ])
                )(),
            ])(),
        ])(),
    ])();

const findGetAllByOperationId =
  ({ paths }) =>
  (methods) =>
    pipe([
      tap((params) => {
        assert(methods);
        assert(paths);
      }),
      () => methods.get.operationId,
      callProp("replace", "Get", "List"),
      (operationId) =>
        pipe([
          () => paths,
          filter(
            pipe([
              get("get.operationId", ""),
              callProp("match", new RegExp(`^${operationId}$`, "ig")),
            ])
          ),
          tap.if(gte(size, 2), (results) => {
            assert(true);
            console.log(
              `findGetAllByOperationId: multiple ${operationId}: ${pipe([
                () => results,
                values,
                map(get("get.operationId")),
                tap((params) => {
                  assert(true);
                }),
                callProp("join", ", "),
              ])()}`
            );
          }),
          values,
          first,
          get("get"),
          // tap.if(isEmpty, () => {
          //   assert(true);
          //   console.log(
          //     `findGetAllByOperationId cannot find getAll: ${methods.get.operationId}`
          //   );
          // }),
        ])(),
    ])();

const findGetAllByParentPath =
  ({ paths }) =>
  (methods) =>
    pipe([
      tap((params) => {
        assert(methods);
        assert(paths);
      }),
      () => methods.get.path,
      callProp("split", "/"),
      switchCase([
        pipe([last, isSubstituable]),
        pipe([
          callProp("slice", 0, -1), // Remove the last one
          callProp("join", "/"),
          (getAllPath) =>
            pipe([
              () => paths,
              find(eq(get("get.path"), getAllPath)),
              // tap.if(isEmpty, () => {
              //   console.log(
              //     `findGetAllByParentPath cannot find getAll: ${methods.get.path}, ${methods.get.operationId}`
              //   );
              // }),
              get("get"),
            ])(),
        ]),
        () => undefined,
      ]),
    ])();

const findResources = ({ paths, group, groupDir, apiVersion }) =>
  pipe([
    () => paths,
    filter(
      or([and([get("get"), get("put")]), and([get("get"), get("delete")])])
    ),
    tap((params) => {
      assert(true);
    }),
    map((methods) =>
      pipe([
        () => resourceNameFromOperationId(methods.get),
        (names) => ({
          ...names,
          group: formatGroup(group),
          groupDir,
          apiVersion,
          methods: pipe([
            () => methods,
            assign({
              getAll: (methods) =>
                pipe([
                  () => methods,
                  findGetAllOnSubscription({ paths, names }),
                  when(isEmpty, () =>
                    findGetAllByOperationId({ paths })(methods)
                  ),
                  when(isEmpty, () =>
                    findGetAllByOutputSchema({ paths })(methods)
                  ),
                  when(isEmpty, () =>
                    findGetAllByParentPath({ paths })(methods)
                  ),
                  tap.if(isEmpty, (params) => {
                    // console.log(
                    //   "no getAll for ",
                    //   methods.get.operationId,
                    //   methods.get.path
                    // );
                  }),
                ])(),
            }),
          ])(),
        }),
      ])()
    ),
    values,
    tap((params) => {
      assert(true);
    }),
  ])();

const processSwagger =
  ({ dir, group, groupDir, apiVersion }) =>
  ({ name }) =>
    pipe([
      tap(() => {
        assert(dir);
        assert(group);
        assert(groupDir);
        assert(name);
      }),
      () => path.resolve(dir, name),
      tap((filename) => {
        console.log(`parsing ${filename}`);
      }),
      (filename) => SwaggerParser.dereference(filename, {}),
      (swagger) =>
        pipe([
          () => swagger,
          assignSwaggerPaths,
          (paths) =>
            findResources({ paths, swagger, group, groupDir, apiVersion }),
          (resources) => ({
            name,
            group,
            groupDir,
            apiVersion,
            resources,
          }),
        ])(),
    ])();

exports.processSwagger = processSwagger;

const listPerVerion = ({ dir, group, groupDir }) =>
  pipe([
    tap(({ name }) => {
      assert(name);
      assert(dir);
      assert(group);
    }),
    ({ name }) => path.resolve(dir, group, name),
    (dir) =>
      pipe([
        () => fs.readdir(dir, { withFileTypes: true }),
        filter(callProp("isDirectory")),

        flatMap(({ name: apiVersion }) =>
          pipe([
            () => path.resolve(dir, apiVersion),
            (dir) =>
              pipe([
                () => fs.readdir(dir, { withFileTypes: true }),
                filter(callProp("isFile")),
                tap((params) => {
                  assert(true);
                }),
                filter(pipe([get("name"), callProp("endsWith", ".json")])),
                map(
                  processSwagger({
                    dir,
                    group,
                    groupDir,
                    apiVersion,
                  })
                ),
                tap((params) => {
                  assert(true);
                }),
              ])(),
          ])()
        ),
        tap((params) => {
          assert(true);
        }),
        pluck("resources"),
        tap((params) => {
          assert(true);
        }),
        flatten,
        groupBy("type"),
        tap((params) => {
          assert(true);
        }),
        map(
          pipe([
            callProp("sort", (a, b) =>
              a.apiVersion.localeCompare(b.apiVersion)
            ),
            last,
          ])
        ),
        values,
        tap((params) => {
          assert(true);
        }),
        callProp("sort", (a, b) => a.type.localeCompare(b.type)),
      ])(),
  ]);

const listPerGroup =
  ({ baseDir }) =>
  (groupDir) =>
    pipe([
      tap(() => {
        assert(baseDir);
        assert(groupDir);
      }),
      () => path.resolve(baseDir, groupDir, "resource-manager"),
      (dir) =>
        tryCatch(
          pipe([
            () => fs.readdir(dir, { withFileTypes: true }),
            filter(callProp("isDirectory")),
            filter(pipe([get("name"), callProp("startsWith", "Microsoft.")])),
            flatMap(({ name: group }) =>
              pipe([
                () => path.resolve(dir, group),
                (specDir) => fs.readdir(specDir, { withFileTypes: true }),
                find(eq(get("name"), "stable")),
                unless(isEmpty, listPerVerion({ dir, group, groupDir })),
              ])()
            ),
            filter(not(isEmpty)),
          ]),
          (error) => {
            console.error(error);
            console.error(error.stack);
            //throw error;
          }
        )(),
    ])();

const addResourceGroupDependency = pipe([
  tap((params) => {
    assert(true);
  }),
  get("get.parameters"),
  filter(get("required")),
  switchCase([
    find(eq(get("name"), "resourceGroupName")),
    () => ({
      resourceGroup: {
        type: "ResourceGroup",
        group: "Resources",
        name: "resourceGroupName",
      },
    }),
    () => undefined,
  ]),
]);
const findIndexOfParams = ({ name }) =>
  pipe([
    tap((path) => {
      assert(path);
      assert(name);
    }),
    callProp("split", "/"),
    findIndex(includes(`{${name}}`)),
  ]);

const findResourcesByParentPath = ({ path, resources, index }) =>
  pipe([
    () => path,
    callProp("split", "/"),
    callProp("slice", 0, index + 1),
    callProp("join", "/"),
    tap((params) => {
      assert(true);
    }),
    (pathParent) =>
      pipe([() => resources, find(eq(get("methods.get.path"), pathParent))])(),
  ])();

const findResourcesByParameterType = ({ path, resources, index }) =>
  pipe([
    tap(() => {
      assert(index > 0);
      //console.log(`findResourcesByParameterType ${path}`);
    }),
    () => path,
    callProp("split", "/"),
    (arr) => arr[index - 1],
    tap((paramType) => {
      assert(paramType, `not paramType in ${path}, index: ${index}`);
    }),
    pluralize.singular,
    (paramType) =>
      pipe([
        () => resources,
        filter(
          pipe([
            get("parentName", ""),
            callProp("match", new RegExp(paramType, "gi")),
          ])
        ),
        tap((params) => {
          assert(true);
        }),
        first,
      ])(),
  ])();

const findParameterTypeFromPath =
  ({ resources, method: { path, operationId } }) =>
  ({ name }) =>
    pipe([
      tap(() => {
        assert(resources);
        assert(operationId);
      }),
      () => path,
      findIndexOfParams({ name }),
      (index) =>
        pipe([
          () => findResourcesByParentPath({ path, resources, index }),
          tap((params) => {
            assert(true);
          }),
          when(isEmpty, () =>
            findResourcesByParameterType({ path, resources, index })
          ),
          tap.if(isEmpty, (params) => {
            assert(true);
          }),
        ])(),
    ])();

const isParamLastOfUrl =
  ({ path }) =>
  (name) =>
    pipe([
      tap((params) => {
        assert(true);
      }),
      () => path,
      callProp("split", "/"),
      last,
      includes(name),
    ])();

const addDependencyFromPath = ({
  resources,
  methods,
  method: { parameters, path },
}) =>
  pipe([
    tap((params) => {
      assert(resources);
      assert(path);
    }),
    () => parameters,
    filter(get("required")),
    filter(eq(get("in"), "path")),
    filter(not(eq(get("name"), "resourceGroupName"))),
    filter(not(eq(get("name"), "subscriptionId"))),
    filter(not(pipe([get("name"), isParamLastOfUrl({ path })]))),
    tap((params) => {
      assert(true);
    }),
    switchCase([
      eq(size, 0),
      () => {
        // assert(false, "should have size >= 1");
      },
      // eq(size, 1),
      // () => undefined,
      pipe([
        tap((params) => {
          assert(true);
        }),
        //callProp("slice", 0, -1),
        map(
          assign({
            parameterType: findParameterTypeFromPath({
              resources,
              method: selectMethod(methods),
            }),
          })
        ),
        filter(get("parameterType")),
        reduce(
          (acc, { name, parameterType }) =>
            pipe([
              tap((params) => {
                assert(parameterType, `no parameterType ${name}`);
              }),
              () => name,
              callProp("replace", "Name", ""),
              (varName) => ({
                ...acc,
                [varName]: {
                  type: parameterType.type,
                  group: parameterType.group,
                  name,
                },
              }),
            ])(),
          {}
        ),
        tap((params) => {
          assert(true);
        }),
      ]),
    ]),
  ])();

const addDependencies = ({ resources }) =>
  assign({
    dependencies: ({ methods }) =>
      pipe([
        tap(() => {
          assert(resources);
        }),
        () => ({}),
        defaultsDeep(addResourceGroupDependency(methods)),
        defaultsDeep(
          addDependencyFromPath({ resources, methods, method: methods.get })
        ),
        tap((params) => {
          assert(true);
        }),
      ])(),
  });

const isOmit = (key) =>
  or([
    get("readOnly"),
    () => key.match(new RegExp("Id$", "gi")),
    () => key.match(new RegExp("status", "gi")),
    () => key.match(new RegExp("state", "gi")),
    get("x-ms-secret"),
    get("x-ms-mutability"),
  ]);

const isPreviousProperties = ({ parentPath, key }) =>
  and([not(eq(key, "properties")), pipe([() => parentPath, includes(key)])]);

const buildOmitReadOnly =
  ({ parentPath = [], accumulator = [] }) =>
  (properties = {}) =>
    pipe([
      () => properties,
      map.entries(([key, obj]) => [
        key,
        pipe([
          () => obj,
          switchCase([
            isPreviousProperties({ parentPath, key }),
            pipe([() => undefined]),
            isOmit(key),
            pipe([() => [[...parentPath, key]]]),
            pipe([
              get("properties"),
              buildOmitReadOnly({
                parentPath: [...parentPath, key],
                accumulator,
              }),
            ]),
          ]),
        ])(),
      ]),
      values,
      filter(not(isEmpty)),
      flatten,
      (results) => [...accumulator, ...results],
    ])();

const buildPickProperties =
  ({ parentPath = [], accumulator = [] }) =>
  (properties = {}) =>
    pipe([
      () => properties,
      map.entries(([key, obj]) => [
        key,
        pipe([
          () => obj,
          switchCase([
            isPreviousProperties({ parentPath, key }),
            pipe([() => undefined]),
            isOmit(key),
            () => undefined,
            and([not(isOmit(key)), not(get("properties"))]),
            pipe([() => [[...parentPath, key]]]),
            pipe([
              get("properties"),
              buildPickProperties({
                parentPath: [...parentPath, key],
                accumulator,
              }),
            ]),
          ]),
        ])(),
      ]),
      values,
      filter(not(isEmpty)),
      flatten,
      (results) => [...accumulator, ...results],
    ])();

const buildEnvironmentVariables =
  ({ parentPath = [], accumulator = [] }) =>
  (properties = {}) =>
    pipe([
      () => properties,
      map.entries(([key, obj]) => [
        key,
        pipe([
          () => obj,
          switchCase([
            or([get("x-ms-secret")]),
            pipe([() => [[...parentPath, key]]]),
            isPreviousProperties({ parentPath, key }),
            pipe([() => undefined]),
            pipe([
              get("properties"),
              buildEnvironmentVariables({
                parentPath: [...parentPath, key],
                accumulator,
              }),
            ]),
          ]),
        ])(),
      ]),
      values,
      filter(not(isEmpty)),
      flatten,
      (results) => [...accumulator, ...results],
    ])();

//TODO remove readOnly props
const buildPropertiesDefault =
  ({ parentPath = [], accumulator = {} }) =>
  (properties = {}) =>
    pipe([
      () => properties,
      map.entries(([key, obj]) => [
        key,
        pipe([
          tap((params) => {
            assert(obj);
            assert(key);
          }),
          () => obj,
          switchCase([
            isPreviousProperties({ parentPath, key }),
            pipe([() => undefined]),
            callProp("hasOwnProperty", "default"),
            pipe([
              get("default"),
              tap((params) => {
                assert(true);
              }),
            ]),
            pipe([
              get("properties"),
              buildPropertiesDefault({
                parentPath: [...parentPath, key],
                accumulator,
              }),
            ]),
          ]),
        ])(),
      ]),
      filter(not(isEmpty)),
      when(isEmpty, () => undefined),
    ])();

const getSchemaFromMethods = ({ method }) =>
  pipe([
    get("methods"),
    tap((methods) => {
      assert(methods);
    }),
    get(method),
    tap((method) => {
      assert(method);
    }),
    get("responses.200.schema"),
    tap((schema) => {
      assert(schema);
    }),
    (schema) =>
      pipe([
        () => schema,
        switchCase([
          eq(get("properties"), undefined),
          get("allOf[1].properties"),
          get("properties"),
        ]),
        //TODO
        // tap.if(
        //   (properties) => !properties,
        //   (properties) => {
        //     assert(
        //       properties,
        //       `no properties: schema: ${JSON.stringify(schema, null, 4)}`
        //     );
        //   }
        // ),
        tap((params) => {
          assert(true);
        }),
      ])(),
  ]);

const pickPropertiesGet = pipe([
  getSchemaFromMethods({ method: "get" }),
  buildPickProperties({}),
  map(callProp("join", ".")),
  tap((params) => {
    assert(true);
  }),
]);

const pickResourceInfo = pipe([
  tap((params) => {
    assert(true);
  }),
  pick(["type", "group", "apiVersion", "dependencies", "methods"]),
  assign({
    omitProperties: pipe([
      getSchemaFromMethods({ method: "get" }),
      buildOmitReadOnly({}),
      map(callProp("join", ".")),
    ]),
    pickProperties: pickPropertiesGet,
    pickPropertiesCreate: (resource) =>
      pipe([
        () => resource,
        get("methods.put"),
        get("parameters"),
        find(eq(get("in"), "body")),
        switchCase([
          isEmpty,
          () => pickPropertiesGet(resource),
          pipe([
            get("schema"),
            tap((schema) => {
              assert(schema);
            }),
            (schema) =>
              pipe([
                () => schema,
                get("properties"),
                when(isEmpty, () => get("allOf[1].properties")(schema)),
                tap.if(isEmpty, (properties) => {
                  assert(
                    properties,
                    `no properties in ${resource.methods.put.operationId}`
                  );
                }),
                buildPickProperties({}),
                map(callProp("join", ".")),
              ])(),
          ]),
        ]),
      ])(),
    environmentVariables: pipe([
      getSchemaFromMethods({ method: "get" }),
      buildEnvironmentVariables({}),
      map(
        fork({
          path: pipe([callProp("join", ".")]),
          suffix: pipe([last, snakeCase, callProp("toUpperCase")]),
        })
      ),
    ]),
    propertiesDefault: pipe([
      getSchemaFromMethods({ method: "get" }),
      buildPropertiesDefault({}),
    ]),
    methods: pipe([
      get("methods"),
      map.entries(([key, value]) => [
        key,
        pipe([
          () => value,
          tap((params) => {
            assert(true);
          }),
          pick(["path", "operationId"]),
        ])(),
      ]),
      tap((params) => {
        assert(true);
      }),
    ]),
  }),
  omitIfEmpty(["environmentVariables", "omitProperties", "propertiesDefault"]),
  tap((params) => {
    assert(true);
  }),
]);

const filterGetAll = ({ name, dependencies, methods }) =>
  pipe([
    fork({
      dependenciesCountComputed: pipe([() => dependencies, size]),
      dependenciesCountInPath: pipe([
        () => methods,
        get("getAll.parameters"),
        when(isEmpty, () => get("get.parameters")(methods)),
        tap.if(isEmpty, () => {
          assert(false, "no get or getAll parameter");
        }),
        filter(
          and([
            eq(get("in"), "path"),
            get("required"),
            not(eq(get("name"), "subscriptionId")),
          ])
        ),
        size,
      ]),
    }),
    ({ dependenciesCountComputed, dependenciesCountInPath }) =>
      dependenciesCountComputed >= dependenciesCountInPath,
    tap.if(eq(identity, false), () => {
      console.log(
        `filterGetAll mismatch deps ${methods.get.operationId}, ${methods.get.path} `
      );
    }),
  ])();

const filterNoDependency = pipe([get("dependencies"), not(isEmpty)]);

const filterExclusion = ({ group, type }) =>
  pipe([
    tap(() => {
      assert(group);
      assert(type);
    }),
    () => ResourcesExcludes,
    not(includes(`${group}::${type}`)),
  ])();

//TODO
const filterNoSubscription = ({ methods }) =>
  pipe([
    tap(() => {
      assert(methods);
    }),
    get("get.path", ""),
    callProp("startsWith", "/subscription/"),
  ])();

const listSwaggerFiles = ({
  directory,
  specPath = "azure-rest-api-specs/specification",
  filterDirs = [],
}) =>
  pipe([
    tap((params) => {
      assert(directory);
    }),
    () => path.resolve(directory, specPath),
    (baseDir) =>
      pipe([
        () => fs.readdir(baseDir, { withFileTypes: true }),
        filter(callProp("isDirectory")),
        filter(
          or([
            () => isEmpty(filterDirs),
            ({ name }) => pipe([() => filterDirs, includes(name)])(),
          ])
        ),
        flatMap(pipe([get("name"), listPerGroup({ baseDir })])),
        tap((params) => {
          assert(true);
        }),
        filter(not(isEmpty)),
        tap((params) => {
          assert(true);
        }),
        //filter(filterNoSubscription),
        (resources) =>
          pipe([() => resources, map(addDependencies({ resources }))])(),
        tap((params) => {
          assert(true);
        }),
        filter(filterExclusion),

        filter(filterNoDependency),
        filter(filterGetAll),

        tap((params) => {
          assert(true);
        }),
        map(pickResourceInfo),
        tap((params) => {
          assert(true);
        }),
        (json) => JSON.stringify(json, null, 4),
        (content) =>
          fs.writeFile(path.resolve(directory, "AzureSchema.json"), content),
      ])(),
  ])();

exports.listSwaggerFiles = listSwaggerFiles;