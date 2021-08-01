(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[720],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7376:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:6},l={unversionedId:"deployment",id:"deployment",isDocsHomePage:!1,title:"Deployment",description:"Regardless of whether you created your own distribution or used a standard one,",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/deployment.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Steps",permalink:"/docs/extend/bootstrap"},next:{title:"Setup and Usage",permalink:"/docs/setup"}},u=[{value:"TLS",id:"tls",children:[{value:"Certificates",id:"certificates",children:[]},{value:"Configuration",id:"configuration",children:[]}]},{value:"One-Time Admin",id:"one-time-admin",children:[]},{value:"Deploying the Server",id:"deploying-the-server",children:[{value:"Build the Distribution",id:"build-the-distribution",children:[]},{value:"Copy the Files",id:"copy-the-files",children:[]},{value:"Systemd Service",id:"systemd-service",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Regardless of whether you created your own distribution or used a standard one,\nthe deployment process is pretty much the same, unless there are plugin-specific\nsteps. In this section we will take an AuthGuard distribution from a dev server\nto a production setup."),(0,i.kt)("h2",{id:"tls"},"TLS"),(0,i.kt)("p",null,"Perhaps the first and most important step is to enable TLS and enforce HTTPS\ntraffic. In production, your authentication server should never use HTTP."),(0,i.kt)("h3",{id:"certificates"},"Certificates"),(0,i.kt)("p",null,"You must have a certificate for TLS, you can easily obtain one from Let's Encrypt,\nor through another provider. Another option which can be useful for testing\nproduction setup is to use a self-signed certificate. You may also use a self-signed\none in production, although that is not recommended."),(0,i.kt)("p",null,"To generate a self-signed certificate using Java keytool, you can run the\nfollowing command (adjust the parameters if you needed to)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -genkey -keyalg RSA -alias selfsigned -keystore cert-keystore.jks -storepass changeit -validity 360 -keysize 2048\n")),(0,i.kt)("p",null,"If you already have a certificate and you want to package it as jks file to be to use\nit (this will create a new store)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -import -alias certAlias -file certificate.crt -keypass keypass -keystore keystore.jks -storepass changeit\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The server configuration options are explained in ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#server"},"Configuration#Server"),",\nhowever here is the same example which is presented there"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 8080 # 80 in prod\n  securePort: 8443 # 443 in prod\n  enableSsl: true\n  enforceSsl: true \n  keystorePath: /path/to/keystore\n  keystorePassword: changeit\n")),(0,i.kt)("h2",{id:"one-time-admin"},"One-Time Admin"),(0,i.kt)("p",null,"The One-Time Admin (OTA) is an admin that will be created automatically if no other\nadmins exists. Its sole purpose to create at least one more admin and then it should\nbe deleted. That admin only has access to the endpoints which are relavant to that\ntask. The OTA will have the username and password specified by environment variables\nset in the configuration, for example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'oneTimeAdmin:\n  usernameVariable: "AUTHGUARD_OTA_USERNAME"\n  passwordVariable: "AUTHGUARD_OTA_PASSWORD"\n')),(0,i.kt)("p",null,"You have two options here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run AuthGuard in a non-prod environment connected to the prod database where those\nvariables are defined, create the other admin and generate an API key for it, then\nmove the server to prod."),(0,i.kt)("li",{parentName:"ol"},"Just keep them defined in the prod environment and proceed as usual.")),(0,i.kt)("h2",{id:"deploying-the-server"},"Deploying the Server"),(0,i.kt)("p",null,"The pre-requisites for this example are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You are deploying to a Linux machine"),(0,i.kt)("li",{parentName:"ol"},"You have JRE or JDK installed (11+)"),(0,i.kt)("li",{parentName:"ol"},"You have systemd running")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Environment Variables")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure the OTA variables, as well as any other variables required by the plugins\nare defined."))),(0,i.kt)("h3",{id:"build-the-distribution"},"Build the Distribution"),(0,i.kt)("p",null,"If you are using your own distribution, you can build it by running one of the\nfollowing commands for Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mvn package # if you don't have the wrapper\n./mvnw package # if you have the wrapper\n")),(0,i.kt)("p",null,"Or, if you are using Gradle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gradle build\n./gradlew build\n")),(0,i.kt)("h3",{id:"copy-the-files"},"Copy the Files"),(0,i.kt)("p",null,"To copy the JAR to your machine you can use the scp command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"scp target/authguard-distribution.jar user@<machine IP>:/authguard/\n")),(0,i.kt)("p",null,"Then you can copy your configuration files there as well"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"scp -dr config/ user@<machine IP>:/authguard/\n")),(0,i.kt)("p",null,"And your secrets (JWT keys, certificates..etc)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"scp -dr secrets/ user@<machine IP>:/authguard/\n")),(0,i.kt)("p",null,"In addition to that, we will also create a small script to run it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/sh\n\njava -jar /authguard/authguard-distribution.jar --config /authguard/config/prod.yaml\n")),(0,i.kt)("h3",{id:"systemd-service"},"Systemd Service"),(0,i.kt)("p",null,"Create the systemd serviceas follows"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"This is just the bare minimum")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Add more as you need"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=AuthGuard Server\n\n[Service]\nRestart=always\nExecStart=bash /authguard/run.sh\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("p",null,"Copy the service to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system"),", and then run the following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start authguard.service # to start the service now\nsystemctl enable authguard.service # to start the service automatically after reboot\n")))}d.isMDXComponent=!0}}]);