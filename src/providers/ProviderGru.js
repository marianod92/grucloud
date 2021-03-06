const assert = require("assert");
const {
  pipe,
  tap,
  map,
  flatMap,
  filter,
  tryCatch,
  switchCase,
  get,
  assign,
  any,
  reduce,
  fork,
  eq,
  not,
  and,
  or,
  transform,
  omit,
} = require("rubico");

const {
  first,
  isEmpty,
  isString,
  flatten,
  pluck,
  forEach,
  find,
  defaultsDeep,
  isDeepEqual,
  includes,
  groupBy,
  values,
} = require("rubico/x");
const { Lister } = require("./Lister");

const logger = require("../logger")({ prefix: "ProviderGru" });
const { tos } = require("../tos");
const {
  mapPoolSize,
  convertError,
  HookType,
  TitleListing,
  TitleQuery,
  TitleDeploying,
  TitleDestroying,
  typeFromResources,
  planToResourcesPerType,
} = require("./Common");

const {
  nextStateOnError,
  hasResultError,
  PlanDirection,
  isTypesMatch,
  isTypeMatch,
  isValidPlan,
  filterReadClient,
  filterReadWriteClient,
  contextFromClient,
  contextFromProvider,
  contextFromProviderInit,
  contextFromResourceType,
  contextFromPlanner,
  contextFromResource,
  contextFromHook,
  contextFromHookAction,
  clientByType,
  liveToUri,
} = require("./ProviderCommon");

const { displayLive } = require("../cli/displayUtils");

const noop = ({}) => {};
const identity = (x) => x;

exports.ProviderGru = ({ stacks }) => {
  assert(Array.isArray(stacks));

  const getProviders = () => pipe([map(get("provider"))])(stacks);

  forEach(({ provider, resources, hooks }) =>
    provider.register({ resources, hooks })
  )(stacks);

  const getProvider = ({ providerName }) =>
    pipe([
      find(eq(get("name"), providerName)),
      tap.if(isEmpty, () => {
        assert(`no provider with name: '${providerName}'`);
      }),
    ])(getProviders());

  const start = ({ onStateChange }) =>
    pipe([
      tap(() => {
        logger.info(`start`);
      }),
      () => getProviders(),
      map(
        tryCatch(
          (provider) => provider.start({ onStateChange }),
          (error) => {
            logger.error(`start ${tos(error)}`);
            return { error };
          }
        )
      ),
      assign({ error: any(get("error")) }),
      tap((result) => {
        logger.info(`started`);
      }),
    ])();

  const listLives = async ({ onStateChange, options }) =>
    pipe([
      tap(() => {
        logger.info(`listLives`);
      }),
      () => stacks,
      map(({ provider, isProviderUp }) => ({
        key: provider.name,
        meta: { providerName: provider.name },
        dependsOn: reduce(
          (acc, deps) => [...acc, deps.name],
          []
        )(provider.dependencies),
        isUp: isProviderUp,
        executor: ({ lives }) =>
          pipe([
            tap((result) => {
              logger.info(`listLives`);
            }),
            () => provider.listLives({ lives }),
            tap((result) => {
              logger.info(`listLives done`);
            }),
          ])(),
      })),
      (inputs) =>
        Lister({
          inputs,
          onStateChange: ({ key, result, nextState }) =>
            pipe([
              () => {
                assert(key);
                assert(nextState);
              },
              tap.if(
                () => includes(nextState)(["DONE", "ERROR"]),
                pipe([
                  () => getProvider({ providerName: key }),
                  (provider) =>
                    provider.spinnersStopListLives({
                      onStateChange,
                      error: result.error,
                    }),
                ])
              ),
            ])(),
        }),
      tap((result) => {
        logger.info(`listLives result: ${tos(result)}`);
      }),
    ])();

  const displayLives = ({ results }) =>
    pipe([
      tap(() => {
        assert(Array.isArray(results));
        logger.info(`displayLive ${results.length}`);
      }),
      () => results,
      forEach(({ results, providerName }) => {
        displayLive({ providerName, resources: results });
      }),
    ])();

  const planQuery = (params) =>
    pipe([
      tap(() => {
        logger.info(`planQuery `);
      }),
      () => getProviders(),
      map(
        tryCatch(
          (provider) => provider.planQuery(params),
          (error, provider) => {
            logger.error(`planQuery ${tos(error)}`);
            return {
              error: convertError({ error, name: "Query" }),
              providerName: provider.name,
            };
          }
        )
      ),
      (results) => ({ error: any(get("error"))(results), results }),
      tap((result) => {
        logger.info(`planQuery result: ${tos(result)}`);
      }),
    ])();

  const planApply = ({ plan, onStateChange }) =>
    pipe([
      tap(() => {
        logger.info(`planApply`);
        assert(Array.isArray(plan.results));
      }),
      () => plan.results,
      map(
        tryCatch(
          (planPerProvider) =>
            getProvider({
              providerName: planPerProvider.providerName,
            }).planApply({ plan: planPerProvider, onStateChange }),
          (error, planPerProvider) => {
            logger.error(`planApply ${tos(error)}`);
            return {
              error: convertError({ error, name: "Apply" }),
              providerName: planPerProvider.providerName,
            };
          }
        )
      ),
      (results) => ({ error: any(get("error"))(results), results }),
      tap((result) => {
        logger.info(`planApply done`);
      }),
    ])();

  const planQueryDestroy = async (params) =>
    pipe([
      tap(() => {
        logger.info(`planQueryDestroy`);
      }),
      () => getProviders(),
      map(
        tryCatch(
          (provider) => provider.planQueryDestroy(params),
          (error, provider) => {
            logger.error(`planQueryDestroy ${tos(error)}`);
            return {
              error: convertError({ error, name: "planQueryDestroy" }),
              providerName: provider.name,
            };
          }
        )
      ),
      (results) => ({ error: any(get("error"))(results), results }),
      tap((result) => {
        logger.info(`planQueryDestroy result: ${tos(result)}`);
      }),
    ])();

  const planDestroy = async ({ plan, onStateChange = identity }) =>
    pipe([
      tap(() => {
        logger.info(`planDestroy`);
        assert(plan);
      }),
      () => plan.results,
      map(
        tryCatch(
          ({ destroyPlans, lives, providerName }) =>
            getProvider({
              providerName,
            }).planDestroy({ plans: destroyPlans, lives, onStateChange }),
          (error, planPerProvider) => {
            logger.error(`planDestroy ${tos(error)}`);
            assert(planPerProvider.providerName);
            return {
              error: convertError({ error, name: "planDestroy" }),
              providerName: planPerProvider.providerName,
            };
          }
        )
      ),
      (results) => ({ error: any(get("error"))(results), results }),
      tap((result) => {
        logger.debug(`planDestroy result: ${tos(result)}`);
      }),
    ])();

  const destroyAll = () =>
    pipe([
      tap(() => {
        logger.info(`planQuery `);
        assert(false);
      }),
    ])();

  const planQueryAndApply = async ({ onStateChange = identity } = {}) => {
    const plan = await planQuery({ onStateChange });
    if (plan.error) return { error: true, plan };
    return await planApply({ plan, onStateChange });
  };

  return {
    start,
    listLives,
    planQuery,
    planApply,
    planQueryDestroy,
    planDestroy,
    destroyAll,
    planQueryAndApply,
    displayLives,
    getProvider,
    getProviders,
  };
};