(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[6547],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(t),f=o,m=l["".concat(s,".").concat(f)]||l[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4391:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:1},s={unversionedId:"extend/extend",id:"extend/extend",isDocsHomePage:!1,title:"Extending AuthGuard",description:"AuthGuard could be extended by adding components to it. It has its own component scan which will discover those components at runtime and make them available to Guice for dependency injection. There are four extension points where you can add your own components: data access, exchange service, messaging, and API.",source:"@site/docs/extend/extend.md",sourceDirName:"extend",slug:"/extend/extend",permalink:"/docs/extend/extend",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/extend/extend.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/docs/design"},next:{title:"Exchange Service",permalink:"/docs/extend/exchange"}},u=[],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"AuthGuard could be extended by adding components to it. It has its own component scan which will discover those components at runtime and make them available to Guice for dependency injection. There are four extension points where you can add your own components: data access, exchange service, messaging, and API."),(0,i.kt)("p",null,"Those components can also make use of dependency injection by annotating their constructors with Guice ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation. This includes reading the configuration."),(0,i.kt)("p",null,"We will first go through each extension point and then we will show some case studies for more concrete examples."))}p.isMDXComponent=!0}}]);