(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[9004],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},970:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:4},s={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Most of AuthGuard internal work is customizable by its configuration. The server expects",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/configuration.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Design",permalink:"/docs/design"}},d=[{value:"Injection",id:"injection",children:[]},{value:"One-Time Admin (OTA)",id:"one-time-admin-ota",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Server",id:"server",children:[{value:"Examples",id:"examples-1",children:[]}]},{value:"Exchange",id:"exchange",children:[{value:"Examples",id:"examples-2",children:[]}]},{value:"Authentication",id:"authentication",children:[{value:"Examples",id:"examples-3",children:[]}]},{value:"Accounts",id:"accounts",children:[]},{value:"Passwords",id:"passwords",children:[{value:"SCrypt",id:"scrypt",children:[]},{value:"BCrypt",id:"bcrypt",children:[]},{value:"Conditions",id:"conditions",children:[]},{value:"Version and Previous Versions",id:"version-and-previous-versions",children:[]}]},{value:"JWT",id:"jwt",children:[{value:"Examples",id:"examples-4",children:[]}]},{value:"Access Tokens",id:"access-tokens",children:[{value:"Examples",id:"examples-5",children:[]}]},{value:"ID Tokens",id:"id-tokens",children:[{value:"Examples",id:"examples-6",children:[]}]},{value:"Authorization Code",id:"authorization-code",children:[]},{value:"External Communication",id:"external-communication",children:[{value:"Examples",id:"examples-7",children:[]}]},{value:"One-Time Passwords",id:"one-time-passwords",children:[{value:"Examples",id:"examples-8",children:[]}]},{value:"Passwordless",id:"passwordless",children:[{value:"Examples",id:"examples-9",children:[]}]},{value:"Internal Event Channels",id:"internal-event-channels",children:[{value:"Examples",id:"examples-10",children:[]}]},{value:"API Keys",id:"api-keys",children:[]}],p={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Most of AuthGuard internal work is customizable by its configuration. The server expects\neither JSON or YAML configuration files to be provided named ",(0,l.kt)("inlineCode",{parentName:"p"},"application.json")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"application.yaml"),"."),(0,l.kt)("p",null,"If you're building your own distribution, you can include a configuration file in its\nresources. Alternatively, you can provide an configuration file using the config parameter\nlike this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"--config /path/to/config/file.yaml\n")),(0,l.kt)("p",null,"All configuration must be under the root 'authguard', whether it's JSON or YAML. Below\nis the break down of the configuration parameters. Note that other plugins also bring\nwith them their own configuration which can also be added here."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Using environment variables")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'To read any configuration value from environment variables, you can set the\nproperty to "env:" followed by the name of the variable. For example, "env:MY_VARIABLE"\nwill read the value of the variable MY_VARIABLE.'))),(0,l.kt)("h2",{id:"injection"},"Injection"),(0,l.kt)("p",null,"Since AuthGuard will look for plugins when it starts, you need to tell it which\npackages it's allowed to search."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'injection:\n  packages: [ "com.nexblocks.authguard" ]\n')),(0,l.kt)("h2",{id:"one-time-admin-ota"},"One-Time Admin (OTA)"),(0,l.kt)("p",null,"A One-Time Admin (OTA) is an account with limited capabilities, it's meant only to\ncreate other full admins and generate API keys for them. It should be deleted\nafterwards. "),(0,l.kt)("p",null,"Note that an OTA will only be created on startup if no other admins\nexist. In such case, AuthGuard will create the OTA based on the values of the\nenvironment variables set in the configuration."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'oneTimeAdmin:\n  usernameVariable: "AUTHGUARD_OTA_USERNAME"\n  passwordVariable: "AUTHGUARD_OTA_PASSWORD"\n')),(0,l.kt)("h2",{id:"server"},"Server"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"The port to use for HTTP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"securePort"),(0,l.kt)("td",{parentName:"tr",align:null},"The port to use for HTTPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableSsl"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable HTTPs port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enforeSsl"),(0,l.kt)("td",{parentName:"tr",align:null},"Don't allow HTTP traffic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keystorePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the keystore to use for TLS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keystorePassword"),(0,l.kt)("td",{parentName:"tr",align:null},"The password to use to access the keystore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableClientAuthentication"),(0,l.kt)("td",{parentName:"tr",align:null},"Accept connections only from trusted clients (only for TLS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truststorePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to store to use to authenticate clients")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truststorePassword"),(0,l.kt)("td",{parentName:"tr",align:null},"The password to use to access the trust store")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Only HTTP")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 3000 \n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Basic HTTP and HTTPS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 3000 \n  securePort: 8443\n  enableSsl: true\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Basic Only HTTPS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  securePort: 8443\n  enableSsl: true\n  enforceSsl: true \n  keystorePath: /path/to/keystore\n  keystorePassword: changeit\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"HTTPS with Client Authentication")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  securePort: 8443 # port for HTTPS\n  enableSsl: true\n  enforceSsl: true # don't allow HTTP traffic\n  keystorePath: /path/to/keystore\n  keystorePassword: changeit\n  enableClientAuthentication: true\n  truststorePath: /path/to/truststore\n  truststorePassword: changeit\n")),(0,l.kt)("h2",{id:"exchange"},"Exchange"),(0,l.kt)("p",null,"To configure auth exchanges, you need to provide a list of allowed providers and\nallowed exchanges."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"providers"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of strings of the names of allowed providers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowed"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of objects containing allowed exchanges (from and to)")))),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("p",null,"The example shows an exchange where users would use their identifier (e.g. username)\nand password to receive a one-time password, and the exchange that OTP for an\naccess token."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'exchange:\n  providers:\n    - "otp"\n    - "accessToken"\n  allowed: \n    - from: "basic"\n      to: "otp"\n    - from: "otp"\n      to: "accessToken"\n')),(0,l.kt)("h2",{id:"authentication"},"Authentication"),(0,l.kt)("p",null,"This is used to configure an exchange shortcut from basic auth (identifier and\npassword) to another token. It also tells the server what to expects for logout."),(0,l.kt)("h3",{id:"examples-3"},"Examples"),(0,l.kt)("p",null,"In the following example the server will generate a passwordless token but,\neventually, the user will logout while holding an access token."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'authentication:\n  generateToken: "passwordless"\n  logoutToken: "accessToken"\n')),(0,l.kt)("h2",{id:"accounts"},"Accounts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authguardAdminRole"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the role to use for admins of the server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requireEmail"),(0,l.kt)("td",{parentName:"tr",align:null},"Require a primary email to be supplied or not (true or false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requirePhoneNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"Require a phone number to be supplied or not")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verifyEmail"),(0,l.kt)("td",{parentName:"tr",align:null},"Verify an account email after it was created")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verifyPhoneNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"Verify an account phone number after it was created")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultRoles"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of roles to be added to an account if none were specified")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"The domain to use when creating the default roles")))),(0,l.kt)("h2",{id:"passwords"},"Passwords"),(0,l.kt)("p",null,"Currently, only two password hashing algorithms are supported: bcrypt and scrypt.\nSupport for Argon2 is in the works. You can configure the hashing algorithm, as\nwell password conditions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the algorithm to use 'bcrypt' or 'scrypt'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scrypt"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for scrypt (see below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bcrypt"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for bcrypt (see below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validFor"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration after which a password will expire (e.g. '30d' for 30 days)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conditions"),(0,l.kt)("td",{parentName:"tr",align:null},"Conditions a new password must meet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"Current version number of password configuration (integer)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"previousVersions"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous password configurations by version (explained below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minimumVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum acceptable version, any version below it is considered expired")))),(0,l.kt)("h3",{id:"scrypt"},"SCrypt"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPUMemoryCostParameter"),(0,l.kt)("td",{parentName:"tr",align:null},"default 16384")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockSize"),(0,l.kt)("td",{parentName:"tr",align:null},"default 8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelization"),(0,l.kt)("td",{parentName:"tr",align:null},"default 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saltSize"),(0,l.kt)("td",{parentName:"tr",align:null},"default 16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keySize"),(0,l.kt)("td",{parentName:"tr",align:null},"default 50")))),(0,l.kt)("h3",{id:"bcrypt"},"BCrypt"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cost"),(0,l.kt)("td",{parentName:"tr",align:null},"default 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saltSize"),(0,l.kt)("td",{parentName:"tr",align:null},"default 16")))),(0,l.kt)("h3",{id:"conditions"},"Conditions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeDigits"),(0,l.kt)("td",{parentName:"tr",align:null},"Must include at least one digit (true/false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeCaps"),(0,l.kt)("td",{parentName:"tr",align:null},"Must include at least one capital letter (true/false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeSpecialCharacters"),(0,l.kt)("td",{parentName:"tr",align:null},"Must include at least one special character (true/false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeSmallLetters"),(0,l.kt)("td",{parentName:"tr",align:null},"Must include at least one small character (true/false), default true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum length, default 30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minLength"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum length, default 6")))),(0,l.kt)("h3",{id:"version-and-previous-versions"},"Version and Previous Versions"),(0,l.kt)("p",null,"Whenever a user's credentials are stored, they get tagged by a version. The version\nindicates which password configuration was used to create that password. This, when\npaired with previous versions configuration, allows you to update the hashing\nconfiguration without affecting existing passwords. For example, if you are currently\nusing BCrypt and decided to switch to use SCrypt, then you can move your existing\nBCrypt configuration into a previous versions item, set SCrypt as the new one and\nchange the version number as follows. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"passwords:\n  algorithm: scrypt\n  scrypt:\n    blockSize: 16\n  conditions:\n    minLength: 6\n  version: 2 # was previously 1\n  previousVersions:\n    - version: 1 # version 1 was moved here\n      algorithm: bcrypt\n")),(0,l.kt)("h2",{id:"jwt"},"JWT"),(0,l.kt)("p",null,"If you intent to use the JWT plugin, you need to provide some general configuration\nfor it. This is different from token-specific configuration for access tokens and\nID tokens."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"Which algorithm to use. Check JWT documentation for a list of algorithms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privateKey"),(0,l.kt)("td",{parentName:"tr",align:null},'The private key to use to sign tokens. If you\'re using symmetric keys then you can this field will be treated as just "key"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The public key to use to verify tokens (only applicable to asymmetric keys)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"The value to use for the issuer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trustedIssuers"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of trusted issuers to be checked when verifying tokens. Must be ",'["self"]'," for now")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption"),(0,l.kt)("td",{parentName:"tr",align:null},"If defined, AuthGuard will encrypt all JWTs before sending them")))),(0,l.kt)("h3",{id:"examples-4"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Without Encryption")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'jwt:\n  algorithm: "HMAC256"\n  privateKey: "keys/hmac256.pem"\n  issuer: "AuthGuard"\n  allowedAlgorithms: ["HMAC256"]\n  trustedIssuers: ["self"]\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"With Encryption")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'jwt:\n  algorithm: "HMAC256"\n  privateKey: "keys/hmac256.pem"\n  issuer: "AuthGuard"\n  allowedAlgorithms: ["HMAC256"]\n  trustedIssuers: ["self"]\n  encryption:\n    algorithm: "AES_CBC"\n    privateKey: "keys/aes128.txt"\n')),(0,l.kt)("h2",{id:"access-tokens"},"Access Tokens"),(0,l.kt)("p",null,"While general JWT configuration will still apply to access tokens, they have some\nspecific configuration parameters of their own,"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenLife"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration for which the token will be valid (e.g. 5m, 2h..etc)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshTokenLife"),(0,l.kt)("td",{parentName:"tr",align:null},"The same thing, but for the refresh token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useJti"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to generate and store a JTI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includePermission"),(0,l.kt)("td",{parentName:"tr",align:null},"Add permissions to the token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeRoles"),(0,l.kt)("td",{parentName:"tr",align:null},"Add roles to the token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeExternalId"),(0,l.kt)("td",{parentName:"tr",align:null},"Add the external ID of the user in the token")))),(0,l.kt)("h3",{id:"examples-5"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'accessToken:\n  tokenLife: "5m"\n  refreshTokenLife: "1h"\n  useJti: true\n  includePermissions: true\n  includeRoles: true\n  includeExternalId: true\n')),(0,l.kt)("h2",{id:"id-tokens"},"ID Tokens"),(0,l.kt)("p",null,"Similar to access tokens, ID tokens also need to be configured indepndently."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenLife"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration for which the token will be valid (e.g. 5m, 2h..etc)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshTokenLife"),(0,l.kt)("td",{parentName:"tr",align:null},"The same thing, but for the refresh token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useJti"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to generate and store a JTI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeExternalId"),(0,l.kt)("td",{parentName:"tr",align:null},"Add the external ID of the user in the token")))),(0,l.kt)("h3",{id:"examples-6"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'idToken:\n  tokenLife: "1d"\n  useJti: true\n  includeExternalId: true\n')),(0,l.kt)("h2",{id:"authorization-code"},"Authorization Code"),(0,l.kt)("p",null,"If you're planning on using an authorization code, then you need to configure\nthat as well."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lifeTime"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration for which the code will be valid (e.g. 5m, 2h..etc)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"randomSize"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of random bits to generate")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'authorizationCode:\n  lifeTime: "5m"\n  randomSize: 128\n')),(0,l.kt)("h2",{id:"external-communication"},"External Communication"),(0,l.kt)("p",null,"While AuthGuard can send emails and text messages, this configuration only covers which\nchannels are allowed. Refer to the configuration of the particular plugin you want to\nuse for its own configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable email providers or not (true or false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sms"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable sms providers or not (true or false)")))),(0,l.kt)("h3",{id:"examples-7"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"external:\n  email: true\n  sms: true\n")),(0,l.kt)("h2",{id:"one-time-passwords"},"One-Time Passwords"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Use the email or sms plugin with an email provider to make AuthGuard send the token itself")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lifeTime"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the password will be valid for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of OTPs to generate: NUMERIC, ALPHANUMERIC, ALPHABETIC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of characters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"generateToken"),(0,l.kt)("td",{parentName:"tr",align:null},"What type of token should be generated after a successful OTP verification")))),(0,l.kt)("h3",{id:"examples-8"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'otp:\n  lifeTime: "2m"\n  mode: "NUMERIC" \n  length: 6\n  generateToken: "accessToken" \n')),(0,l.kt)("h2",{id:"passwordless"},"Passwordless"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Use the email plugin with an email provider to make AuthGuard send the token itself")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenLife"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the password will be valid for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"randomSize"),(0,l.kt)("td",{parentName:"tr",align:null},"How many random bits to generate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"generateToken"),(0,l.kt)("td",{parentName:"tr",align:null},"What type of token should be generated after a successful passwordless token verification")))),(0,l.kt)("h3",{id:"examples-9"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'passwordless:\n  tokenLife: "10m"\n  randomSize: 128\n  generateToken: "accessToken" # what to generate upon a successful OTP verification\n')),(0,l.kt)("h2",{id:"internal-event-channels"},"Internal Event Channels"),(0,l.kt)("p",null,"The Event Message Bus (EMB) is one of the core components of AuthGuard, and it makes\nit easier to add new functionality to it. Although a lot of channels are internally\ndefined, you can decide which ones to allow."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channels"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of the names of channels to allow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscribers"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of fully-qualified name of subscriber classes to allow to subscribe")))),(0,l.kt)("p",null,"Locking down which subscribers are allowed to be automatically subscribed to\nchannels was added to prevent unintentially adding an external plugin with\nsubscribers to read data it is not meant to read."),(0,l.kt)("h3",{id:"examples-10"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"emb:\n  channels: \n    - accounts\n    - auth\n    - passwordless\n  subscribers:\n    - com.nexblocks.authguard.external.email.subscribers.EmailPasswordlessSubscriber\n")),(0,l.kt)("h2",{id:"api-keys"},"API Keys"),(0,l.kt)("p",null,"AuthGuard comes with a default API key provider but can also be configured\nto use a different one. For example, the JWT extension adds another provider\nfor JWT-based API keys. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"The name/type of the provider to use ('default' or something else)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"randomSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of the key in bytes (default is 32 bytes)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"The hash configuration")))),(0,l.kt)("p",null,"Hash configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"Only 'blake2b' is currently supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret key to use for hashing")))))}u.isMDXComponent=!0}}]);