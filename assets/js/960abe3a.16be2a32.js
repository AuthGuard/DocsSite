(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[16],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4398:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:10},u={unversionedId:"federation",id:"federation",isDocsHomePage:!1,title:"Identity Federation",description:"Federation and Social Login/Signup are still experimental",source:"@site/docs/federation.md",sourceDirName:".",slug:"/federation",permalink:"/docs/federation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/federation.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Server Administration",permalink:"/docs/adminstration"}},l=[{value:"LDAP",id:"ldap",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Exchanges",id:"exchanges",children:[]}]},{value:"Social Login",id:"social-login",children:[{value:"Configuration",id:"configuration-1",children:[]},{value:"Flow",id:"flow",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Experimental Features")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Federation and Social Login/Signup are still experimental\nfeatures and may not be ready for production use yet."))),(0,a.kt)("p",null,"Beside being a full identity managenet service, AuthGuard also\nsupports authentication users which are not managed by it directly.\nAuthGuard is compatible with: any standard LDAP implementation, and\nany OpenID Connect (OIDC) service. OIDC is what most social login\nproviders, such as Google and Facebook, support."),(0,a.kt)("h2",{id:"ldap"},"LDAP"),(0,a.kt)("p",null,"AuthGuard can connect to an LDAP server to authenticate users. In\nsuch scenarios, the LDAP server will be the identity provider,\nwhile AuthGuard will handle only the user tokens or sessions. "),(0,a.kt)("p",null,"Before starting, you need to make sure that the LDAP extension\nis available as part of your distribution. Standard distributions\ndo not include LDAP support, so you will need a custom one. This\nwill change when the LDAP is no longer an experimental feature."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'ldap:\n    host: .. the server host ..\n    port: .. the server port ..\n    secure: true # should be true for production use\n    admin: # the admin account AuthGuard can use to communicate with the LDAP server\n    adminPassword: # the password of the admin account\n    adminBindFormat: "cn=%s" # the format to use to bind the admin account, %s is a placeholder for the username\n    baseDN: "ou=people,dc=example,dc=com" # the base DN to use to search for users\n    searchAttribut: "uid" # the attribute to get use to search for the username\n    passwordAttribute: "userPassword" # the attribute which has the password\n    bindType: "simple" # the bind type to use (simple, cram_md5, digest_md5, or plain)\n')),(0,a.kt)("h3",{id:"exchanges"},"Exchanges"),(0,a.kt)("p",null,"Just like all other authentication options, LDAP authentication\nis just an exchange. The extension defines the following exchanges:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LDAP to Access Token"),(0,a.kt)("li",{parentName:"ul"},"LDAP to Authorization Code"),(0,a.kt)("li",{parentName:"ul"},"LDAP to ID Token"),(0,a.kt)("li",{parentName:"ul"},"LDAP to Session"),(0,a.kt)("li",{parentName:"ul"},"LDAP to OTP"),(0,a.kt)("li",{parentName:"ul"},"LDAP to Passwordless")),(0,a.kt)("p",null,"All of them are available through ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth/exchange")," endpoint. You\ncan check the ",(0,a.kt)("a",{parentName:"p",href:"/api"},"OpenAPI documentation")," on how to use it."),(0,a.kt)("h2",{id:"social-login"},"Social Login"),(0,a.kt)("p",null,"Most, if not all, of social login providers support OAuth 2.0 and\nOpenID Connect. AuthGuard does not have a provider-specific\nimplementation, instead you can configure it to connect to any\nof them."),(0,a.kt)("h3",{id:"configuration-1"},"Configuration"),(0,a.kt)("p",null,"As we mentioned, you can configure AuthGuard to use any OpenID\nConnect provider, and you do by defining a client for it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'oauth:\n    clients:\n        - provider: .. the name of the provider, this can be anything to identify it ..\n          authUrl: .. the auth URL of the provider ..\n          tokenUrl: .. the token URL of the provider ..\n          authRedirectUrl: .. the URL to tell the provider to redirect to after the auth step ..\n          tokenRedirectUrl: .. the URL to tell the provider to redirect to after the token step ..\n          clientId: .. the client ID registered with the provider ..\n          clientSecret: .. the client secret registered with the provider ..\n          defaultScopes: ["openid", "profile",..] # the scopes to request from the provder\n')),(0,a.kt)("h3",{id:"flow"},"Flow"),(0,a.kt)("p",null,"There are steps to this flow: 1. get an authorization URL, 2. exchange\nthe authorization code for valid tokens."),(0,a.kt)("p",null,"First you need to request the authorization URL from AuthGuard\nby sending a GET request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/oauth/auth_url")," with the query\nparameter ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," set to one of the providers you defined\nin the configuration. AuthGuard will take care of creating the\nsession state value to be used for interacting with the OAuth\nserver."),(0,a.kt)("p",null,"Once your client gets the URL, it should redirect the user to\nthat URL to perform the authentication. If that step was successful,\nthen the OAuth server will redirect the user back to your application\nwith the authorization code. You then send a POST request to\n",(0,a.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")," with the name of the provider, the state, and\nthe authorization code. AuthGuard will then exchange the code\nfor the tokens from the provider and pass them back to your\napplication."))}d.isMDXComponent=!0}}]);