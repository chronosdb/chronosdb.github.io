(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(6),o=(a(0),a(134)),i={id:"vintage",title:"Vintage",sidebar_label:"Vintage"},c={id:"vintage",title:"Vintage",description:"# Vintage",source:"@site/docs/vintage.md",permalink:"/docs/vintage",sidebar_label:"Vintage",sidebar:"docs",previous:{title:"Time series data",permalink:"/docs/timeseriesdata"},next:{title:"Annotation",permalink:"/docs/annotation"}},l=[{value:"Sharing the right version of your data",id:"sharing-the-right-version-of-your-data",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"What you need to know is",id:"what-you-need-to-know-is",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"vintage"},"Vintage"),Object(o.b)("p",null,"Vintage is a human-friendly label attached to a version to time series saved in the database. When one or many time series are saved together in a collection, a vintage is automatically created. It comes really handy:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"when you want to share the version of your data and refer to it in a human-friendly label."),Object(o.b)("li",{parentName:"ul"},"when you want to save metadata with a particular version of the series")),Object(o.b)("h2",{id:"sharing-the-right-version-of-your-data"},"Sharing the right version of your data"),Object(o.b)("p",null,"Vintage name is a human-readable label assigned to a timestamp of when data was written to the collection. Therefore, it allows you to refer in an easy way to a particular version of data."),Object(o.b)("p",null,"For example, if you save revenue projections for a review by the management, you can send them a vintage name and an HTML link to this particular version of data."),Object(o.b)("h2",{id:"metadata"},"Metadata"),Object(o.b)("p",null,"Vintage can be very useful when you want to save some metadata (JSON object)) about one or many time series you want to save in the database."),Object(o.b)("p",null,"For example, suppose you have a model that takes some parameters as input and generates output, which is a bunch of time series. You can save the output to a collection and attach the parameters of the model using a vintage. This will allow you to reproduce the output of your model if required. "),Object(o.b)("p",null,"You could also store some extra statistics in a vintage. This could be handy when someone comes with questions regarding the output of your model."),Object(o.b)("p",null,"You can also store some attributes, which will permit you to search for the right version of the time series."),Object(o.b)("h2",{id:"what-you-need-to-know-is"},"What you need to know is"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Vintages are unique within a collection and can only refer to the data saved in that particular collection."),Object(o.b)("li",{parentName:"ul"},"Vintage is created every time data are saved. "),Object(o.b)("li",{parentName:"ul"},"Vintage's name, description, attributes can be edited after it was created when time-series were written to a collection."),Object(o.b)("li",{parentName:"ul"},"Vintages are fully-versioned and you can see the historical modifications to any vintage."),Object(o.b)("li",{parentName:"ul"},"Vintages cannot be deleted."),Object(o.b)("li",{parentName:"ul"},"Metadata can by any JSON object by to 15MB.")))}u.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return a?r.a.createElement(m,c({ref:t},s,{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);