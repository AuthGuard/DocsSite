(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[737],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8477:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=t(2122),r=t(9756),s=(t(7294),t(3905)),i=["components"],o={title:"Tutorial 1: Basic example",description:"Basic client",slug:"tutorial-basic-example",tags:["tutorial"],hide_table_of_contents:!1},l={permalink:"/blog/tutorial-basic-example",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-09-05-basic-client-example.md",source:"@site/blog/2021-09-05-basic-client-example.md",title:"Tutorial 1: Basic example",description:"Basic client",date:"2021-09-05T00:00:00.000Z",formattedDate:"September 5, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:5.15,truncated:!0},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Scenario",id:"scenario",children:[{value:"Registration",id:"registration",children:[]},{value:"Login",id:"login",children:[]},{value:"Refresh",id:"refresh",children:[]},{value:"Updating Credentials and Account",id:"updating-credentials-and-account",children:[]},{value:"Password Reset",id:"password-reset",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this example we will walk through how to use AuthGuard to\nbuild your own auth server for a simple web application."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Make sure that you have already followed the instruction on\nhow to build an AuthGuard distribution, or that you are using\na standard distribution."),(0,s.kt)("li",{parentName:"ol"},"Follow the guideline for the ",(0,s.kt)("a",{parentName:"li",href:"/docs/setup"},"server setup"),".")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Adapt the guideline to your use case")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This guideline is written from the perspective of a web application\nwhich communicates with AuthGuard directly. The same concepts,\nhowever, are transferrable to other use cases, and you should\nadapt it as such. "))),(0,s.kt)("h2",{id:"scenario"},"Scenario"),(0,s.kt)("p",null,"Our scenario will be a simple flow, our goals are:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Users can register a username but also their email"),(0,s.kt)("li",{parentName:"ol"},"In the signup page, we inform the user of whether their\nchosen username and email are available or not"),(0,s.kt)("li",{parentName:"ol"},"Users can log in using either their username or email"),(0,s.kt)("li",{parentName:"ol"},"The login process will result in an access token and\na refresh token (you can use sessions instead)")),(0,s.kt)("h3",{id:"registration"},"Registration"),(0,s.kt)("p",null,"Before making any calls to create an account, we need first\nan idempotent key. Idempotent keys are there to guarantee\nthat duplicate calls will not have any effect. For this purpose\nwe will use ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/uuidv4"},"uuidv4")," library,\nand when your registration page loads, a new idempotent key should\nbe generated as ",(0,s.kt)("inlineCode",{parentName:"p"},"const IDEMPOTENT_KEY = uuidv4()"),"."),(0,s.kt)("p",null,"The first step in our registration process is to give the user\nfeedback on whether the chosen username exists. For that,\nyou need to set the input change event to something like this"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function checkEmail(e) {\n    let email = e.target.value;\n    let valid = validateEmail(email); // outside the scope of this tutorial\n    \n    let response = await fetch(`/accounts/email/${email}/exists`)\n\n    if (response.status == 200) {\n        displayEmailExistsLabel()\n    } \n\n    // if the response is 404 then it doesn't exist and we're good to go\n} \n\nfunction checkUsername(e) {\n    let username = e.target.value;\n    let valid = validateUsername(username); // outside the scope of this tutorial\n\n    let response = await fetch(`/credentials/identifiers/${username}/exists`)\n\n    if (response.status == 200) {\n        displayUsernameExistsLabel()\n    } \n\n    // if the response is 404 then it doesn't exist and we're good to go\n}\n")),(0,s.kt)("p",null,"If everything is good, then we can proceed with creating an account"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function registerButtonClick(e) {\n    let email = document.getElementById('email').value;\n    let username = document.getElementById('username').value;\n    let password = document.getElementById('password').value;\n\n    let account = {\n        email: {\n            email: email\n        }\n    }\n\n    let credentials = {\n        identifiers: [\n            {\n                identifier: email,\n                type: \"EMAIL\"\n            },\n            {\n                identifier: username,\n                type: \"USERNAME\"\n            }\n        ]\n    }\n\n    await register(account, credentials);\n}\n\nasync function register(account, credentials) {\n    const body = {\n        account: account,\n        credentials: credentials\n    };\n\n    let response = await fetch('/accounts/complete', {\n            method = 'POST',\n            body: JSON.stringify(body),\n            headers: {\n                'X-IDEMPOTENT-KEY': IDEMPOTENT_KEY\n            }\n        });\n\n    if (response.status == 200) {\n        /*\n         * A recommended step is to create a user profile \n         * on your own server to associate an AuthGuard \n         * account with. In the scenario where your client\n         * creates account through your server, you can \n         * perform that step first and then use the ID of \n         * the profile as an external ID for AuthGuard.\n         */\n        createUserProfile();\n        redirectToLogin();\n    } else if (response.status == 409) {\n        let error = await response.json();\n        \n        if (error.code == 'AC.031') {\n            displayEmailExistsLabel()\n        } else if (error.code == 'CD.012') {\n            displayUsernameExistsLabel();\n        } else {\n            displayGenericError();\n        }\n    } else {\n        displayGenericError();\n    }\n}\n")),(0,s.kt)("h3",{id:"login"},"Login"),(0,s.kt)("p",null,"We can now move on to letting users log in using their credentials."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function loginButtonClick(e) {\n    let identifier = document.getElementById('identifier').value; // username or email\n    let password = document.getElementById('password').value;\n    let localSessionId = createSessionId(); // a randomly generated client-side session, used to associate multiple login attempts, and token refresh requests together\n\n    let request = {\n        identifier: identifier,\n        password: password,\n        externalSessionId: localSessionId\n    }\n\n    let response = await fetch('/auth/authenticate',\n        {\n            method: 'POST',\n            body: JSON.stringify(request)\n        }\n    );\n\n    if (response.status == 200) {\n        let body = await response.json();\n\n        storeTokenAsCookie(body.token);\n        storeRefreshToken(body.refreshToken); // use internal storage instead\n    } else {\n        displayLoginError();\n    }\n}\n")),(0,s.kt)("h3",{id:"refresh"},"Refresh"),(0,s.kt)("p",null,"Access tokens are short-lived, which means that your client\nwill need to refresh the token. Possibly multiple times within\na session. You can either do this periodically, or only if\na request was made and the response code was 401."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function refresh() {\n    let refreshToken = getRefreshToken();\n    let localSessionId = getLocalSessionId(); \n\n    let request = {\n        token: refreshToken,\n        externalSessionId: localSessionId\n    }\n\n    let response = await fetch('/auth/exchange?from=refreshToken&to=accessToken',\n        {\n            method: 'POST',\n            body: JSON.stringify(request)\n        }\n    );\n\n    if (response.status == 200) {\n        let body = await response.json();\n\n        storeTokenAsCookie(body.token);\n        storeRefreshToken(body.refreshToken); \n    } \n\n    /* \n     * The choice is yours how you want your app to react \n     * if the refresh failed. One of the causes is if the \n     * account was deleted or blocked.\n     */\n    \n}\n")),(0,s.kt)("h3",{id:"updating-credentials-and-account"},"Updating Credentials and Account"),(0,s.kt)("p",null,"Updating user account information and credentials cannot be\ndone using an auth client. Instead, your client will need\nto make a request to your server, which will then issue the\nupdate request to AuthGuard."),(0,s.kt)("h3",{id:"password-reset"},"Password Reset"),(0,s.kt)("p",null,"If a user forgot their password, they can receive a temporary\npassword reset token sent to their email. You can issue a POST\nrequest to ",(0,s.kt)("inlineCode",{parentName:"p"},"/credentials/reset_token")," to generate a reset\ntoken."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "identifier": "<the user identifier>"\n}\n')),(0,s.kt)("p",null,"If the Token Send plugin is part of your distribution, then\nAuthGuard will send the email itself. Otherwise, your\nserver will need to send it. Typically, the email will\ncontain a URL to a reset page of your own which will\naccept the token as a query parameter;"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Auth client vs admin client")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The reset token is returned back in the response only if\nthe request was made by an admin client. If you want an\nauth client to make the request then having the Token Send\nplugin and an email provider plugin is a requirement.\nStandard distributions come with both."))),(0,s.kt)("p",null,"Once the user has the reset token, in your reset page, you\ncan do the following"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function passwordResetButtonClick() {\n    let token = getResetToken(); // depends on how it got there\n    let password = document.getElementById('password').value;\n    let request = {\n        resetToken: token,\n        plainPassword: password\n    }\n\n    let response = await fetch('/credentials/reset',\n        {\n            method: 'POST',\n            body: JSON.strinfigy(request)\n        }\n    );\n\n    if (response.status == 200) {\n        redirectToLogin();\n    } else {\n        displayError();\n    }\n}\n")))}d.isMDXComponent=!0}}]);