(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{198:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),A=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=A(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=A(t),p=r,d=g["".concat(a,".").concat(p)]||g[p]||u[p]||c;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return A}));var r=t(3),o=t(8),c=(t(0),t(198)),a={id:"SslCertificate",title:"SSL Certificate"},i={unversionedId:"google/resources/Compute/SslCertificate",id:"google/resources/Compute/SslCertificate",isDocsHomePage:!1,title:"SSL Certificate",description:"Provides a managed SSL certificate.",source:"@site/docs/google/resources/Compute/SslCertificate.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/SslCertificate",permalink:"/docs/google/resources/Compute/SslCertificate",version:"current",frontMatter:{id:"SslCertificate",title:"SSL Certificate"},sidebar:"docs",previous:{title:"Project",permalink:"/docs/google/resources/Compute/Project"},next:{title:"SubNetwork",permalink:"/docs/google/resources/Compute/SubNetwork"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"List",id:"list",children:[]}],s={toc:l};function A(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a managed ",Object(c.b)("a",{parentName:"p",href:"https://console.cloud.google.com/net-services/loadbalancing/advanced/sslCertificates/list"},"SSL certificate"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const sslCertificate = await provider.makeSslCertificate({\n  name: "ssl-certificate",\n  properties: () => ({\n    managed: {\n      domains: ["yourdomainhere.com"],\n    },\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/storage/website-https"},"Https Website"))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/google/storage/website-https/diagram-target.svg",alt:"website-https/diagram-target.svg"})),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/sslCertificates/insert"},"all properties"))),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("h2",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/google/resources/Compute/HttpsTargetProxy"},"HttpsTargetProxy"))),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"List all SSL certificates with the ",Object(c.b)("strong",{parentName:"p"},"SslCertificate")," type"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t SslCertificate\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: google\n\u2713 google\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 SslCertificate from google                                                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name            \u2502 Data                                                  \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ssl-certificate \u2502 id: 6441474765553268206                               \u2502 Yes  \u2502\n\u2502                 \u2502 creationTimestamp: 2021-06-30T03:44:17.991-07:00      \u2502      \u2502\n\u2502                 \u2502 name: ssl-certificate                                 \u2502      \u2502\n\u2502                 \u2502 description: Managed By GruCloud                      \u2502      \u2502\n\u2502                 \u2502 selfLink: https://www.googleapis.com/compute/v1/proj\u2026 \u2502      \u2502\n\u2502                 \u2502 certificate: -----BEGIN CERTIFICATE-----              \u2502      \u2502\n\u2502                 \u2502 MIIFUTCCBDmgAwIBAgIRAPkAAOJC7+5VCgAAAADtDggwDQYJKoZI\u2026 \u2502      \u2502\n\u2502                 \u2502 RjELMAkGA1UEBhMCVVMxIjAgBgNVBAoTGUdvb2dsZSBUcnVzdCBT\u2026 \u2502      \u2502\n\u2502                 \u2502 TEMxEzARBgNVBAMTCkdUUyBDQSAxRDQwHhcNMjEwNjMwMDk0ODQy\u2026 \u2502      \u2502\n\u2502                 \u2502 MTA0ODQyWjAXMRUwEwYDVQQDEwxncnVjbG91ZC5vcmcwggEiMA0G\u2026 \u2502      \u2502\n\u2502                 \u2502 AQUAA4IBDwAwggEKAoIBAQCwg05xlwu+1ypsJgQ5WOL0B6Ux7LT3\u2026 \u2502      \u2502\n\u2502                 \u2502 I6TrqTwTpTq8lIwpEBvksGz2w99nJ5lLiCBhH7MRWskpwZYVY4Y2\u2026 \u2502      \u2502\n\u2502                 \u2502 4z4l7D+s/u8xCe7XB2D/B6suXPdVpPjl21kHLQUQCYiHSlXBknsw\u2026 \u2502      \u2502\n\u2502                 \u2502 dwrlJS4M3KfRYXhesJxZEeO3+PoXKw3wBkIpSRfvkJ/Y1BJqLoQc\u2026 \u2502      \u2502\n\u2502                 \u2502 jqdpROyJRaJ/gH1/1Ixe9wxQ0xRf9jAZClyfL8M/DENERLJuXCE7\u2026 \u2502      \u2502\n\u2502                 \u2502 aQiL+jB/x1AJYwuud04PPZuBNE3ouln8UnD5MD65C46BAgMBAAGj\u2026 \u2502      \u2502\n\u2502                 \u2502 BgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYD\u2026 \u2502      \u2502\n\u2502                 \u2502 ADAdBgNVHQ4EFgQUn0Lwt6ba79AHuJDIGAlW2310YfEwHwYDVR0j\u2026 \u2502      \u2502\n\u2502                 \u2502 DrJXkZQq5dRdhpCD3lOzuJIwagYIKwYBBQUHAQEEXjBcMCcGCCsG\u2026 \u2502      \u2502\n\u2502                 \u2502 dHRwOi8vb2NzcC5wa2kuZ29vZy9ndHMxZDQwMQYIKwYBBQUHMAKG\u2026 \u2502      \u2502\n\u2502                 \u2502 a2kuZ29vZy9yZXBvL2NlcnRzL2d0czFkNC5kZXIwFwYDVR0RBBAw\u2026 \u2502      \u2502\n\u2502                 \u2502 dWQub3JnMCEGA1UdIAQaMBgwCAYGZ4EMAQIBMAwGCisGAQQB1nkC\u2026 \u2502      \u2502\n\u2502                 \u2502 BDUwMzAxoC+gLYYraHR0cDovL2NybHMucGtpLmdvb2cvZ3RzMWQ0\u2026 \u2502      \u2502\n\u2502                 \u2502 V0NrLmNybDCCAQYGCisGAQQB1nkCBAIEgfcEgfQA8gB3APZclC/R\u2026 \u2502      \u2502\n\u2502                 \u2502 Vo7jTRMZM7/fDC8gC8xO8WTjAAABelyN0mYAAAQDAEgwRgIhAJK3\u2026 \u2502      \u2502\n\u2502                 \u2502 64j1+EfMUP7z2a1r49DvMLeIKdM1AiEA/JSBRq8oPtE1kTbIARqS\u2026 \u2502      \u2502\n\u2502                 \u2502 POCDVgsI/BQAdwDuwJXujXJkD5Ljw7kbxxKjaWoJe0tqGhQ45key\u2026 \u2502      \u2502\n\u2502                 \u2502 jdKCAAAEAwBIMEYCIQDoxrQxCcEH2vVeg2AtstxI1HDtxUl4zYlz\u2026 \u2502      \u2502\n\u2502                 \u2502 AOsmu4oulyYswA7MTs/Dy29W+nXk0D0mGAOzAHkCzlwIMA0GCSqG\u2026 \u2502      \u2502\n\u2502                 \u2502 A4IBAQAoD2cok3xHy87yVKdF7NUtjVAS6/jB6/KUdxSoaeE8HtFI\u2026 \u2502      \u2502\n\u2502                 \u2502 ZXvfhKYWZuc9WCaEUNZo45y582uuf/Wv1dBXSiH6vyD3F845XQB8\u2026 \u2502      \u2502\n\u2502                 \u2502 fsiQzTeOA5+5EmnQLkvaSpfs1VgMwwc0w+bd3mhHaHX1Pot5PTbT\u2026 \u2502      \u2502\n\u2502                 \u2502 NlSHP9oWk4Y4sk9ngaDu6p+nilPNXpKOXeVWchB5fkhW2BFNRyq5\u2026 \u2502      \u2502\n\u2502                 \u2502 fSjfQ5lMpeZMQi68FPuiNkcaJ5CY0ntHcwenhUpewYd1QwFiigbW\u2026 \u2502      \u2502\n\u2502                 \u2502 7hT0UnMmPf21WKP4EdMmmw+4dHwx                          \u2502      \u2502\n\u2502                 \u2502 -----END CERTIFICATE-----                             \u2502      \u2502\n\u2502                 \u2502 -----BEGIN CERTIFICATE-----                           \u2502      \u2502\n\u2502                 \u2502 MIIFjDCCA3SgAwIBAgINAgCOsgIzNmWLZM3bmzANBgkqhkiG9w0B\u2026 \u2502      \u2502\n\u2502                 \u2502 CQYDVQQGEwJVUzEiMCAGA1UEChMZR29vZ2xlIFRydXN0IFNlcnZp\u2026 \u2502      \u2502\n\u2502                 \u2502 MBIGA1UEAxMLR1RTIFJvb3QgUjEwHhcNMjAwODEzMDAwMDQyWhcN\u2026 \u2502      \u2502\n\u2502                 \u2502 MDQyWjBGMQswCQYDVQQGEwJVUzEiMCAGA1UEChMZR29vZ2xlIFRy\u2026 \u2502      \u2502\n\u2502                 \u2502 Y2VzIExMQzETMBEGA1UEAxMKR1RTIENBIDFENDCCASIwDQYJKoZI\u2026 \u2502      \u2502\n\u2502                 \u2502 ggEPADCCAQoCggEBAKvAqqPCE27l0w9zC8dTPIE89bA+xTmDaG7y\u2026 \u2502      \u2502\n\u2502                 \u2502 UebUQpK0yv2r678RJExK0HWDjeq+nLIHN1Em5j6rARZixmyRSjhI\u2026 \u2502      \u2502\n\u2502                 \u2502 saztIIJ7O0g/82qj/vGDl//3t4tTqxiRhLQnTLXJdeB+2DhkdU6I\u2026 \u2502      \u2502\n\u2502                 \u2502 H3Rcsejcqj8p5Sj19vBm6i1FhqLGymhMFroWVUGO3xtIH91dsgy4\u2026 \u2502      \u2502\n\u2502                 \u2502 2190Q0Lm/SiKmLbRJ5Au4y1euFJm2JM9eB84Fkqa3ivrXWUeVtye\u2026 \u2502      \u2502\n\u2502                 \u2502 zvxtxvusLJzLWYHk55zcRAacDA2SeEtBbQfD1qsCAwEAAaOCAXYw\u2026 \u2502      \u2502\n\u2502                 \u2502 DwEB/wQEAwIBhjAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUH\u2026 \u2502      \u2502\n\u2502                 \u2502 AQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUJeIYDrJXkZQq5dRdhpCD\u2026 \u2502      \u2502\n\u2502                 \u2502 VR0jBBgwFoAU5K8rJnEaK0gnhS9SZizv8IkTcT4waAYIKwYBBQUH\u2026 \u2502      \u2502\n\u2502                 \u2502 CCsGAQUFBzABhhpodHRwOi8vb2NzcC5wa2kuZ29vZy9ndHNyMTAw\u2026 \u2502      \u2502\n\u2502                 \u2502 AoYkaHR0cDovL3BraS5nb29nL3JlcG8vY2VydHMvZ3RzcjEuZGVy\u2026 \u2502      \u2502\n\u2502                 \u2502 MCswKaAnoCWGI2h0dHA6Ly9jcmwucGtpLmdvb2cvZ3RzcjEvZ3Rz\u2026 \u2502      \u2502\n\u2502                 \u2502 A1UdIARGMEQwCAYGZ4EMAQIBMDgGCisGAQQB1nkCBQMwKjAoBggr\u2026 \u2502      \u2502\n\u2502                 \u2502 aHR0cHM6Ly9wa2kuZ29vZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0B\u2026 \u2502      \u2502\n\u2502                 \u2502 IVToy24jwXUr0rAPc924vuSVbKQuYw3nLflLfLh5AYWEeVl/Du18\u2026 \u2502      \u2502\n\u2502                 \u2502 FZbhXkBH0PNcw97thaf2BeoDYY9Ck/b+UGluhx06zd4EBf7H9P84\u2026 \u2502      \u2502\n\u2502                 \u2502 K+Xh3I0tqJy2rgOqNDflr5IMQ8ZTWA3yltakzSBKZ6XpF0PpqyCR\u2026 \u2502      \u2502\n\u2502                 \u2502 uPCJvscp1/m2pVTtyBjYPRQ+QuCQGAJKjtN7R5DFrfTqMWvYgVlp\u2026 \u2502      \u2502\n\u2502                 \u2502 3cTIfzE7cmALskMKNLuDz+RzCcsYTsVaU7Vp3xL60OYhqFkuAOOx\u2026 \u2502      \u2502\n\u2502                 \u2502 YgPmOT4X3+7L51fXJyRH9KfLRP6nT31D5nmsGAOgZ26/8T9hsBW1\u2026 \u2502      \u2502\n\u2502                 \u2502 VS5H0HyIBMEKyGMIPhFWrlt/hFS28N1zaKI0ZBGD3gYgDLbiDT9f\u2026 \u2502      \u2502\n\u2502                 \u2502 lVlWPzXe81vdoEnFbr5M272HdgJWo+WhT9BYM0Ji+wdVmnRffXgl\u2026 \u2502      \u2502\n\u2502                 \u2502 1dFpgJu8fF3LG0gl2ibSYiCi9a6hvU0TppjJyIWXhkJTcMJlPrWx\u2026 \u2502      \u2502\n\u2502                 \u2502 JDwRjW/656r0KVB02xHRKvm2ZKI03TglLIpmVCK3kBKkKNpBNkFt\u2026 \u2502      \u2502\n\u2502                 \u2502 x/9tpNFlQTl7B39rJlJWkR17QnZqVptFePFORoZmFzM=          \u2502      \u2502\n\u2502                 \u2502 -----END CERTIFICATE-----                             \u2502      \u2502\n\u2502                 \u2502 -----BEGIN CERTIFICATE-----                           \u2502      \u2502\n\u2502                 \u2502 MIIFYjCCBEqgAwIBAgIQd70NbNs2+RrqIQ/E8FjTDTANBgkqhkiG\u2026 \u2502      \u2502\n\u2502                 \u2502 MQswCQYDVQQGEwJCRTEZMBcGA1UEChMQR2xvYmFsU2lnbiBudi1z\u2026 \u2502      \u2502\n\u2502                 \u2502 CxMHUm9vdCBDQTEbMBkGA1UEAxMSR2xvYmFsU2lnbiBSb290IENB\u2026 \u2502      \u2502\n\u2502                 \u2502 OTAwMDA0MloXDTI4MDEyODAwMDA0MlowRzELMAkGA1UEBhMCVVMx\u2026 \u2502      \u2502\n\u2502                 \u2502 GUdvb2dsZSBUcnVzdCBTZXJ2aWNlcyBMTEMxFDASBgNVBAMTC0dU\u2026 \u2502      \u2502\n\u2502                 \u2502 MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAthECix7j\u2026 \u2502      \u2502\n\u2502                 \u2502 ladAPKH9gvl9MgaCcfb2jH/76Nu8ai6Xl6OMS/kr9rH5zoQdsfnF\u2026 \u2502      \u2502\n\u2502                 \u2502 iV6nqlKr+CMny6SxnGPb15l+8Ape62im9MZaRw1NEDPjTrETo8gY\u2026 \u2502      \u2502\n\u2502                 \u2502 KSUjB6G00j0uYODP0gmHu81I8E3CwnqIiru6z1kZ1q+PsAewnjHx\u2026 \u2502      \u2502\n\u2502                 \u2502 DrXYfiYaRQM9sHmklCitD38m5agI/pboPGiUU+6DOogrFZYJsuB6\u2026 \u2502      \u2502\n\u2502                 \u2502 j5ZPaK49l8KEj8C8QMALXL32h7M1bKwYUH+E4EzNktMg6TO8Upmv\u2026 \u2502      \u2502\n\u2502                 \u2502 cuHKZPfmghCN6J3Cioj6OGaK/GP5Afl4/Xtcd/p2h/rs37EOeZVX\u2026 \u2502      \u2502\n\u2502                 \u2502 CruOC7XFxYpVq9Os6pFLKcwZpDIlTirxZUTQAs6qzkm06p98g7BA\u2026 \u2502      \u2502\n\u2502                 \u2502 iYH6TKX/1Y7DzkvgtdizjkXPdsDtQCv9Uw+wp9U7DbGKogPeMa3M\u2026 \u2502      \u2502\n\u2502                 \u2502 Eua++tgy/BBjFFFy3l3WFpO9KWgz7zpm7AeKJt8T11dleCfeXkkU\u2026 \u2502      \u2502\n\u2502                 \u2502 sZWwpbkNFhHax2xIPEDgfg1azVY80ZcFuctL7TlLnMQ/0lUTbiSw\u2026 \u2502      \u2502\n\u2502                 \u2502 9f6BQdgAmD06yK56mDcYBZUCAwEAAaOCATgwggE0MA4GA1UdDwEB\u2026 \u2502      \u2502\n\u2502                 \u2502 BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTkrysmcRorSCeFL1Jm\u2026 \u2502      \u2502\n\u2502                 \u2502 BgNVHSMEGDAWgBRge2YaRQ2XyolQL30EzTSo//z9SzBgBggrBgEF\u2026 \u2502      \u2502\n\u2502                 \u2502 JQYIKwYBBQUHMAGGGWh0dHA6Ly9vY3NwLnBraS5nb29nL2dzcjEw\u2026 \u2502      \u2502\n\u2502                 \u2502 MAKGHWh0dHA6Ly9wa2kuZ29vZy9nc3IxL2dzcjEuY3J0MDIGA1Ud\u2026 \u2502      \u2502\n\u2502                 \u2502 oCOGIWh0dHA6Ly9jcmwucGtpLmdvb2cvZ3NyMS9nc3IxLmNybDA7\u2026 \u2502      \u2502\n\u2502                 \u2502 MAgGBmeBDAECATAIBgZngQwBAgIwDQYLKwYBBAHWeQIFAwIwDQYL\u2026 \u2502      \u2502\n\u2502                 \u2502 AwMwDQYJKoZIhvcNAQELBQADggEBADSkHrEoo9C0dhemMXoh6dFS\u2026 \u2502      \u2502\n\u2502                 \u2502 NR3t5P+T4Vxfq7vqfM/b5A3Ri1fyJm9bvhdGaJQ3b2t6yMAYN/ol\u2026 \u2502      \u2502\n\u2502                 \u2502 WprKASOshIArAoyZl+tJaox118fessmXn1hIVw41oeQa1v1vg4Fv\u2026 \u2502      \u2502\n\u2502                 \u2502 9U5pCZEt4Wi4wStz6dTZ/CLANx8LZh1J7QJVj2fhMtfTJr9w4z30\u2026 \u2502      \u2502\n\u2502                 \u2502 +qduBmpvvYuR7hZL6Dupszfnw0Skfths18dG9ZKb59UhvmaSGZRV\u2026 \u2502      \u2502\n\u2502                 \u2502 d0lIKO2d1xozclOzgjXPYovJJIultzkMu34qQb9Sz/yilrbCgj8=  \u2502      \u2502\n\u2502                 \u2502 -----END CERTIFICATE-----                             \u2502      \u2502\n\u2502                 \u2502                                                       \u2502      \u2502\n\u2502                 \u2502 managed:                                              \u2502      \u2502\n\u2502                 \u2502   domains:                                            \u2502      \u2502\n\u2502                 \u2502     - "grucloud.org"                                  \u2502      \u2502\n\u2502                 \u2502   status: ACTIVE                                      \u2502      \u2502\n\u2502                 \u2502   domainStatus:                                       \u2502      \u2502\n\u2502                 \u2502     grucloud.org: ACTIVE                              \u2502      \u2502\n\u2502                 \u2502 type: MANAGED                                         \u2502      \u2502\n\u2502                 \u2502 subjectAlternativeNames:                              \u2502      \u2502\n\u2502                 \u2502   - "grucloud.org"                                    \u2502      \u2502\n\u2502                 \u2502 expireTime: 2021-09-28T03:48:42.000-07:00             \u2502      \u2502\n\u2502                 \u2502 kind: compute#sslCertificate                          \u2502      \u2502\n\u2502                 \u2502                                                       \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: google\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 google                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 SslCertificate     \u2502 ssl-certificate                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t SslCertificate" executed in 2s\n')))}A.isMDXComponent=!0}}]);