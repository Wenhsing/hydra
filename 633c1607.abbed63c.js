(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),i=(n(0),n(239)),c={id:"hierarchical_static_config",title:"A hierarchical static configuration"},o={unversionedId:"tutorials/structured_config/hierarchical_static_config",id:"version-1.0/tutorials/structured_config/hierarchical_static_config",isDocsHomePage:!1,title:"A hierarchical static configuration",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/2_hierarchical_static_config.md",slug:"/tutorials/structured_config/hierarchical_static_config",permalink:"/docs/tutorials/structured_config/hierarchical_static_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/2_hierarchical_static_config.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1604023633,sidebar:"version-1.0/docs",previous:{title:"Minimal example",permalink:"/docs/tutorials/structured_config/minimal_example"},next:{title:"Config Groups",permalink:"/docs/tutorials/structured_config/config_groups"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/structured_configs/2_static_complex/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(i.b)("p",null,"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass UserInterface:\n    title: str = "My app"\n    width: int = 1024\n    height: int = 768\n\n@dataclass\nclass MyConfig:\n    db: MySQLConfig = MySQLConfig()\n    ui: UserInterface = UserInterface()\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=MyConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: MyConfig) -> None:\n    print(f"Title={cfg.ui.title}, size={cfg.ui.width}x{cfg.ui.height} pixels")\n\nif __name__ == "__main__":\n    my_app()\n')))}u.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);