(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[979],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8005:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Tutorial 2: Federation with LDAP",description:"An example on how to use AuthGuard to authenticate users using an LDAP server",slug:"tutorial-ldap",tags:["tutorial"],hide_table_of_contents:!1},l={permalink:"/blog/tutorial-ldap",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-11-10-ldap-example.md",source:"@site/blog/2021-11-10-ldap-example.md",title:"Tutorial 2: Federation with LDAP",description:"An example on how to use AuthGuard to authenticate users using an LDAP server",date:"2021-11-10T00:00:00.000Z",formattedDate:"November 10, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:1.59,truncated:!0,nextItem:{title:"Tutorial 1: Basic example",permalink:"/blog/tutorial-basic-example"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Scenario",id:"scenario",children:[]},{value:"Test Setup",id:"test-setup",children:[]},{value:"AuthGuard Configuration",id:"authguard-configuration",children:[{value:"Login",id:"login",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are in an enterprise environment, chances are that you\nalready have some sort of an LDAP server, or are planning to\nuse one. Since the LDAP server will hold the identities of the\ninternal users, you can make AuthGuard use it instead of requiring\nusers to sign up."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that you have already followed the instruction on\nhow to build an AuthGuard distribution. LDAP module is not\ncurrently included in standard distributions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the guideline for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup"},"server setup"),"."))),(0,o.kt)("h2",{id:"scenario"},"Scenario"),(0,o.kt)("p",null,"Our scenario is pretty straightforward:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Users are already added to an LDAP server"),(0,o.kt)("li",{parentName:"ol"},"A user can go to your website and application and log\nin using their LDAP credentials"),(0,o.kt)("li",{parentName:"ol"},"AuthGuard will authenticate the users against the LDAP\nserver and then whatever token it is configured to generate\njust like a normal authentication step")),(0,o.kt)("h2",{id:"test-setup"},"Test Setup"),(0,o.kt)("p",null,"For the purpose of this tutorial, we will run a test LDAP server\nas a container. The image we are going to use is ",(0,o.kt)("inlineCode",{parentName:"p"},"bitnami/openldap:2"),"\nsince it makes it easier to bootstrap accounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.3"\n    \nservices:\n    ldap_server:\n        image: "bitnami/openldap:2"\n        ports:\n            - "1389:1389"\n            - "1636:1636"\n        environment: \n            LDAP_ADMIN_USERNAME: admin\n            LDAP_ADMIN_PASSWORD: password\n            LDAP_USERS: user01,user02\n            LDAP_PASSWORDS: password1,password2\n')),(0,o.kt)("p",null,"By default, the admin will available using ",(0,o.kt)("inlineCode",{parentName:"p"},"CN=admin,DC=example,DC=org"),",\nand users will be under ",(0,o.kt)("inlineCode",{parentName:"p"},"dc=example,dc=org"),"."),(0,o.kt)("h2",{id:"authguard-configuration"},"AuthGuard Configuration"),(0,o.kt)("p",null,"The configuration is the same as any regular AuthGuard distribution\nbut with the LDAP section added, and the new exchanges allowed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'ldap:\n    adminBindFormat: CN=%s,DC=example,DC=org\n    baseDN: dc=example,dc=org\n    searchAttribute: uid\n    passwordAttribute: userPassword\n    host: localhost\n    port: 1389\n    isSecure: false\n    admin: admin\n    adminPassword: password\n    bindType: simple\n\nexchange:\n    providers: [ "accessToken", "sessionToken" ]\n    allowed:\n      - from: "ldap"\n        to: "accessToken"\n      - from: "basic"\n        to: "accessToken"\n')),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth/authenticate")," endpoint cannot be used in this case,\nso a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth/exchange?from=ldap&to=accessToken")," is\nnecessary. You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken")," with any of the supported\ntoken types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "identifier": "user01",\n    "password": "password1"\n}\n')))}c.isMDXComponent=!0}}]);