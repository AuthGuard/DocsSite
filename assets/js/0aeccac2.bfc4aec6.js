(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[414],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5274:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l={unversionedId:"design",id:"design",isDocsHomePage:!1,title:"Design",description:"It is important to understand the fundmental parts of AuthGuard's design to be able to configure and extend it correctly. This document will go through the internal parts without talking about the exposed API.",source:"@site/docs/design.md",sourceDirName:".",slug:"/design",permalink:"/docs/design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/design.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Extending AuthGuard",permalink:"/docs/extend/extend"}},c=[{value:"The Three Layers + 1",id:"the-three-layers--1",children:[{value:"API Layer",id:"api-layer",children:[]},{value:"Service Layer",id:"service-layer",children:[]},{value:"Data Access Layer",id:"data-access-layer",children:[]},{value:"Messaging",id:"messaging",children:[]}]},{value:"Data Models",id:"data-models",children:[]},{value:"Low-Level Exchange Service",id:"low-level-exchange-service",children:[{value:"Login Session Example",id:"login-session-example",children:[]},{value:"Login with One-Time Password",id:"login-with-one-time-password",children:[]}]},{value:"High-Level Authentication Steps",id:"high-level-authentication-steps",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is important to understand the fundmental parts of AuthGuard's design to be able to configure and extend it correctly. This document will go through the internal parts without talking about the exposed API."),(0,i.kt)("h2",{id:"the-three-layers--1"},"The Three Layers + 1"),(0,i.kt)("p",null,"AuthGuard is implemented in three layers: API layer, service layer, and data access\nlayer, with an extra messaging layer parallel to the service layer."),(0,i.kt)("h3",{id:"api-layer"},"API Layer"),(0,i.kt)("p",null,"The outer most layer which exposes a REST API built using Javalin. Refer to the API\ndocumentation to the available endpoints and payloads"),(0,i.kt)("h3",{id:"service-layer"},"Service Layer"),(0,i.kt)("p",null,"This is where the internal logic resides."),(0,i.kt)("h3",{id:"data-access-layer"},"Data Access Layer"),(0,i.kt)("p",null,"The layer which connects AuthGuard to data stores."),(0,i.kt)("h3",{id:"messaging"},"Messaging"),(0,i.kt)("p",null,"The messaging layer does not interact directly with any other layer. It resides\nparallel to the service layer and the two are connected through a message bus.\nSome parts othe service layer push events to specific channels and you can add\ncomponents which subscribe to those channels and perform some other actions."),(0,i.kt)("h2",{id:"data-models"},"Data Models"),(0,i.kt)("p",null,"Since AuthGuard integrates with external components at two layers: API and data\naccess, we opted for separating our models into three, each corresponding to a\nlayer: Data Transfer Objects (DTO) for API layer, Business Object (BO) for service\nlayer, and Data Object (DO) for data access layer."),(0,i.kt)("p",null,"Consumers of the API will deal with DTOs, data access implementations will deal with DOs, and event subscribers will deal BOs."),(0,i.kt)("h2",{id:"low-level-exchange-service"},"Low-Level Exchange Service"),(0,i.kt)("p",null,"The exchange service is the core of AuthGuard authentication system. It provides a\nflexible way of adding new forms of authentication with little effort. The exchange\nservice defines any authentication/authorization action as exchange of tokens, and\nfor the sake of simplicity everything is a token. So basic authorization header is\nstill treated as a token, and so are one-time passwords. And then any\nauthentication/authorization flow is defined as a sequence of exchanges. Here are a\ncouple of examples."),(0,i.kt)("h3",{id:"login-session-example"},"Login Session Example"),(0,i.kt)("p",null,"Let's say your login flow is just users provide username and password, and we give\nthem back a session token. We can the pre-defined exchange ",(0,i.kt)("inlineCode",{parentName:"p"},"basic")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"session"),".\nThis exchange simply connects a basic authentication verifier with a session\nprovider."),(0,i.kt)("h3",{id:"login-with-one-time-password"},"Login with One-Time Password"),(0,i.kt)("p",null,"If your flow is more complicated, let's say user logins in, we send back an OTP,\nthen user provides the OTP, and we eventually send back an access token. This is\nsimply defined as two exchanges in AuthGuard:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"basic")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"otp")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"otp")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"access_token"))),(0,i.kt)("h2",{id:"high-level-authentication-steps"},"High-Level Authentication Steps"),(0,i.kt)("p",null,"There are some endpoints provided which give you a shortcut to the exchange\nservice. Those endpoints are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/authentication"),": exchanges a basic token for whatever it is configured to\ngenerate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/otp"),": exchanges an OTP for whatever it is configured to generate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/passwordless"),": exchanges a passwordless token for whatever it is configured to\ngenerate")))}u.isMDXComponent=!0}}]);