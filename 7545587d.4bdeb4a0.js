(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(8),a=(n(0),n(268)),i=n(277),u={id:"defaults",title:"Defaults List"},c={unversionedId:"tutorials/structured_config/defaults",id:"tutorials/structured_config/defaults",isDocsHomePage:!1,title:"Defaults List",description:"You can define a defaults list in your primary Structured Config just like you can in your primary config.yaml file.",source:"@site/docs/tutorials/structured_config/4_defaults.md",slug:"/tutorials/structured_config/defaults",permalink:"/docs/next/tutorials/structured_config/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/4_defaults.md",version:"current",lastUpdatedBy:"Bernard Beckerman",lastUpdatedAt:1614150702,sidebar:"docs",previous:{title:"Config Groups",permalink:"/docs/next/tutorials/structured_config/config_groups"},next:{title:"Structured Config schema",permalink:"/docs/next/tutorials/structured_config/schema"}},s=[],l={toc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{to:"examples/tutorials/structured_configs/4_defaults/my_app.py",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"You can define a defaults list in your primary Structured Config just like you can in your primary ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," file.\nThe example below extends the previous example by adding a defaults list that will load ",Object(a.b)("inlineCode",{parentName:"p"},"db=mysql")," by default."),Object(a.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: You can still place your defaults list in your primary (YAML) config file (Example in next page)."),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{11-14,19,25}","{11-14,19,25}":!0}),'from omegaconf import MISSING, OmegaConf\n\n@dataclass\nclass MySQLConfig:\n    ...\n\n@dataclass\nclass PostGreSQLConfig:\n    ...\n\ndefaults = [\n    # Load the config "mysql" from the config group "db"\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\ncs.store(name="config", node=Config)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"my_app.py")," loads the mysql config option by default:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  ...\n")),Object(a.b)("p",null,"You can override the default option via the command line:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  ...\n")),Object(a.b)("h4",{id:"requiring-users-to-specify-a-default-list-value"},"Requiring users to specify a default list value"),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"db")," as ",Object(a.b)("inlineCode",{parentName:"p"},"MISSING")," to require the user to specify a value on the command line."),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="Defaults list with a missing db"',title:'"Defaults',list:!0,with:!0,a:!0,missing:!0,'db"':!0}),'defaults = [\n    {"db": MISSING}\n]\n\n\n'))),Object(a.b)("div",{className:"col  col--6"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Output"',title:'"Output"'}),"$ python my_app.py\nYou must specify 'db', e.g, db=<OPTION>\nAvailable options:\n        mysql\n        postgresql\n")))))}f.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,g=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return n?o.a.createElement(g,u(u({ref:t},s),{},{components:n})):o.a.createElement(g,u({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},270:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},271:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(11),i=n(269),u=n(7),c=Object(r.createContext)({collectLink:function(){}}),s=n(272),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,p=e.to,g=e.href,b=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,D=Object(r.useContext)(c),w=p||g,P=Object(i.a)(w),x=null==w?void 0:w.replace("pathname://",""),A=void 0!==x?(n=x,h&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,C=Object(r.useRef)(!1),_=d?a.e:a.c,N=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&P&&window.docusaurus.prefetch(A),function(){N&&f&&f.disconnect()}}),[A,N,P]);var L=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,E=!A||!P||L;return A&&P&&!L&&!v&&D.collectLink(A),E?o.a.createElement("a",Object.assign({href:A},w&&!P&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(_,Object.assign({},O,{onMouseEnter:function(){C.current||(window.docusaurus.preload(A),C.current=!0)},innerRef:function(e){var t,n;N&&e&&P&&(t=e,n=function(){window.docusaurus.prefetch(A)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:A||""},d&&{isActive:m,activeClassName:b}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(21),o=n(269);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(r){e.exports={}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(270),o=n(275),a=n(276);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return a.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getDocVersionSuggestions(n,o)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return i}));var r=n(21);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(270);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,a,i=t.getActiveVersion(e,n),u=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(o=u.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),a=o.activeVersion!==r;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),a=n.n(o),i=n(271),u=n(21),c=n(273);function s(e){return a.a.createElement(i.a,Object(r.a)({},e,{to:(t=e.to,o=Object(c.useActiveVersion)(),Object(u.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(s,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);