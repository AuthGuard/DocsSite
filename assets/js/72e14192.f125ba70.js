(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[7239],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8615:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},u={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"As mentioned in the previous section, some standard distributions",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/quick-start.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Running AuthGuard",permalink:"/docs/run"},next:{title:"Configuration",permalink:"/docs/configuration"}},c=[{value:"The Images",id:"the-images",children:[]},{value:"Running Distributions",id:"running-distributions",children:[]},{value:"Production",id:"production",children:[]}],l={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"/docs/run"},"the previous section"),", some standard distributions\nare already provided and ready to be used. The quickest way to get started with\nthose distributions is to use their container images, which is what we will use\nin this guide."),(0,a.kt)("h2",{id:"the-images"},"The Images"),(0,a.kt)("p",null,"All of our images are hosted on GitHub registry. You can find a list of available\nimages ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/AuthGuard/packages?ecosystem=container"},"here"),"."),(0,a.kt)("h2",{id:"running-distributions"},"Running Distributions"),(0,a.kt)("p",null,"In this example we will only run the standard-mongo distribution, which is a\njust a standard distribution with MongoDB drivers for persistence. To do so,\nfor a development environment, we will need to create the following Docker\nCompose file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.3"\n    \nservices:\n    mongodb:\n        image: "mongo:5.0"\n        volumes: \n            - "./db/:/data/db"\n        \n    my_authguard:\n        image: "authguard-standard-mongo-base:0.9.0"\n        links:\n            - mongodb\n        volumes:\n            - "./keys/:/opt/authguard/keys"\n            - "./config/:/opt/authguard/config"\n        ports:\n            - "3200:8080"\n        environment:\n            AUTHGUARD_OTA_USERNAME: ag_ota\n            AUTHGUARD_OTA_PASSWORD: test_env_password\n')),(0,a.kt)("p",null,"In this file we are basically just creating a MongoDB container called\nmongodb, and another container called my_authguard. For the AuthGuard\ncontainer, we are mounting two local directories to make the server\npick the configuration we have for the environment as well as JWT signing\nand encryption keys."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Generate key using AuthGuard CLI")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AuthGuard/authg-cli"},"AuthGuard CLI (authg-cli)"),"\ncan generate the keys for you by just supplying the algorithm. It\nrequires OpenSSL to be installed on your system."))),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration documentation")," to\nbuild your own configuration. However, keep in mind that key paths\nmust be set for the container (i.e. starting with /opt/authguard)\nand not for the host. For example, your JWT keys configuration\nshould be like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'jwt:\n    ...\n    privateKey: "/opt/authguard/keys/rsa512-private.pem"\n    publicKey: "/opt/authguard/keys/rsa512-public.pem"\n    ...\n')),(0,a.kt)("p",null,"Once all of that is set up, just run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up")," (or with ",(0,a.kt)("inlineCode",{parentName:"p"},"-d"),")\nand you will have your test environment ready to go."),(0,a.kt)("h2",{id:"production"},"Production"),(0,a.kt)("p",null,"How you deploy your container to a production environment is up to you.\nYou can create a new image with the configuration and the keys. Or\nyou can deploy the base image and mount directories like we did in the\ndevelopment environment example."),(0,a.kt)("p",null,'If you decided to package the configuration in a new image, consider\nreading some configuration values from environment variables. You can\ndo so by adding "env:" followed by the name of the variable instead of\nsupplying an actual value. For example '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mongo:\n    connectionString: "env:MONGO_CONNECTION_STRING"\n    database: "env:MONGO_DB_NAME"\n')))}d.isMDXComponent=!0}}]);