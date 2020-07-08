(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(6),o=(t(0),t(134)),a={id:"organization",title:"Organizing Timeseries (Spaces and Collections)",sidebar_label:"Organizing Timeseries"},c={id:"organization",title:"Organizing Timeseries (Spaces and Collections)",description:"# Organizing Timeseries (Spaces and Collections)",source:"@site/docs/organization.md",permalink:"/docs/organization",sidebar_label:"Organizing Timeseries",sidebar:"docs",previous:{title:"Versioning",permalink:"/docs/versioning"},next:{title:"Time series",permalink:"/docs/timeseries"}},s=[{value:"Space",id:"space",children:[]},{value:"Collection",id:"collection",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"organizing-timeseries-spaces-and-collections"},"Organizing Timeseries (Spaces and Collections)"),Object(o.b)("p",null,"Individual time series are organized in collections, which are assigned to spaces. You have permissions for "),Object(o.b)("h3",{id:"space"},"Space"),Object(o.b)("p",null,"A space is a place where a user stores collections."),Object(o.b)("h3",{id:"collection"},"Collection"),Object(o.b)("p",null,"A collection is at the center of ChronosDB. It is a place to store time series of various types and frequencies. Within each collection time series are versioned with vintages created for every data write. Annotations are confined within a collection."),Object(o.b)("p",null,"A collection is independent from the other collections; it can be archived and removed from the database without affecting other collections."),Object(o.b)("p",null,"Permissions are also managed on the collection level."))}p.isMDXComponent=!0},134:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return t?i.a.createElement(b,c({ref:n},l,{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);