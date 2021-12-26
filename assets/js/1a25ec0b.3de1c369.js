(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[2019],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,h=p["".concat(u,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},562:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},u={unversionedId:"features",id:"features",isDocsHomePage:!1,title:"Features",description:"An overview of the available features of AuthGuard.",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/features.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AuthGuard",permalink:"/docs/intro"},next:{title:"Running AuthGuard",permalink:"/docs/run"}},l=[{value:"User Management",id:"user-management",children:[{value:"Single and Multiple Credentials",id:"single-and-multiple-credentials",children:[]}]},{value:"Applications and API Keys",id:"applications-and-api-keys",children:[]},{value:"Authentication",id:"authentication",children:[{value:"Session",id:"session",children:[]},{value:"JWT",id:"jwt",children:[]},{value:"Basic OAuth",id:"basic-oauth",children:[]},{value:"One-Time Password and Passwordless",id:"one-time-password-and-passwordless",children:[]},{value:"LDAP (experimental)",id:"ldap-experimental",children:[]}]}],d={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An overview of the available features of AuthGuard."),(0,i.kt)("h2",{id:"user-management"},"User Management"),(0,i.kt)("p",null,"AuthGuard manages user accounts, their credentials, permissions, and roles.\nLeaving your own application to care more about the business logic around the users."),(0,i.kt)("h3",{id:"single-and-multiple-credentials"},"Single and Multiple Credentials"),(0,i.kt)("p",null,"AuthGuard handles storing user identifiers and passwords. It supports three\ntypes of identifiers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Username"),(0,i.kt)("li",{parentName:"ul"},"Email"),(0,i.kt)("li",{parentName:"ul"},"Phone number")),(0,i.kt)("p",null,"You may choose to allow your users to have multiple identifiers or a single one."),(0,i.kt)("h2",{id:"applications-and-api-keys"},"Applications and API Keys"),(0,i.kt)("p",null,"AuthGuard also handles managing external applications and thei API keys for you.\nIf you want to allow external parties to call your APIs you can easily register\nan application and generate API keys for it."),(0,i.kt)("p",null,"Since each company might want different structure of their API keys, you can add\nyour own API key generator to AuthGuard. Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/extend/extend"},"Extending AuthGuard"),"\nfor more details. However, a basic API key provider is provided. The JWT extension\nalso provides a JWT-based API key."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("h3",{id:"session"},"Session"),(0,i.kt)("p",null,"Straightforward session management with bring-your-own-store."),(0,i.kt)("h3",{id:"jwt"},"JWT"),(0,i.kt)("p",null,"AuthGuard can generate access tokens out of the box with customizable fields in\nthe configuration. It can also be extended to generate different JWTs. Refer to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/extend/extend"},"Extending AuthGuard")," for more details."),(0,i.kt)("h3",{id:"basic-oauth"},"Basic OAuth"),(0,i.kt)("p",null,"AuthGuard supports, to some extent, OAuth authorization code flow. Better\nout-of-the-box support will be available. However, since AuthGuard is not meant\nto act as an external identity provider, using such flows adds unnecessary\ncomplexity."),(0,i.kt)("h3",{id:"one-time-password-and-passwordless"},"One-Time Password and Passwordless"),(0,i.kt)("p",null,"While not all application will need them initially, some choose to support them\nlater. You can quickly support OTP and passwordless login with simple\nconfiguration changes with AuthGuard."),(0,i.kt)("h3",{id:"ldap-experimental"},"LDAP (experimental)"),(0,i.kt)("p",null,"Authenticating users using LDAP is currently supported, though still experimental."))}c.isMDXComponent=!0}}]);