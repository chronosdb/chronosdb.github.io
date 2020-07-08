(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),l=(n(0),n(134)),i={id:"collection",title:"Collection",sidebar_label:"Collection"},c={id:"collection",title:"Collection",description:"# Collection",source:"@site/docs/collection.md",permalink:"/docs/collection",sidebar_label:"Collection"},o=[{value:"Data types",id:"data-types",children:[]},{value:"Hierarchical data",id:"hierarchical-data",children:[]},{value:"Panel data",id:"panel-data",children:[]},{value:"panel data api",id:"panel-data-api",children:[]}],b={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"collection"},"Collection"),Object(l.b)("p",null,"You can think of the collection as a dataset. But it is much more than that. It allows you to\nCollection has"),Object(l.b)("h2",{id:"data-types"},"Data types"),Object(l.b)("p",null,"float, integer, categorical, boolean"),Object(l.b)("h2",{id:"hierarchical-data"},"Hierarchical data"),Object(l.b)("h2",{id:"panel-data"},"Panel data"),Object(l.b)("p",null,"When collection is created as a panel, timeseries names are restricted to "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"identity"),Object(l.b)("li",{parentName:"ul"},"variable -> (frequency, fparams, dtype, dparams)")),Object(l.b)("p",null,"Restrictions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'time series name is "{identity}_{variable}"')),Object(l.b)("p",null,"timeseries/{tsid}/hierarchy/ {\nget, put, post\n}"),Object(l.b)("h2",{id:"panel-data-api"},"panel data api"),Object(l.b)("p",null,"/panel/{coll_id}/"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"get,\nquery entire panel\nparameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"variables="),Object(l.b)("li",{parentName:"ul"},"identity=")))),Object(l.b)("p",null,"/panel/{coll_id}/varaible/ {\nget, post, delete\ncreate new variables of diffrent type\n}\ncollection: {coll_id}_vars"),Object(l.b)("p",null,"/panel/{coll_id}/identity/ {"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"post (identities, start...end)"),Object(l.b)("li",{parentName:"ul"},"get:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"query individuals and time invariant data\nparameters",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"identity"),Object(l.b)("li",{parentName:"ul"}))))),Object(l.b)("li",{parentName:"ul"},"put, save time invariant data\n}\ncollection: {coll_id}_identity"),Object(l.b)("li",{parentName:"ul"},"where time invariant data is stored")),Object(l.b)("p",null,"controls:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"strict, identity has to be created "),Object(l.b)("li",{parentName:"ul"},"relaxed, identity is not enforced")))}p.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(i,".").concat(s)]||u[s]||d[s]||l;return n?r.a.createElement(O,c({ref:t},b,{components:n})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);