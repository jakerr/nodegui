(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{334:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(6),i=(t(0),t(436)),a={sidebar_label:"Debugging in VSCode",title:"Debugging in VSCode"},c={unversionedId:"guides/debugging-in-vscode",id:"guides/debugging-in-vscode",isDocsHomePage:!1,title:"Debugging in VSCode",description:"- Open a NodeGui project in VSCode.",source:"@site/docs/guides/debugging-in-vscode.md",slug:"/guides/debugging-in-vscode",permalink:"/docs/guides/debugging-in-vscode",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/guides/debugging-in-vscode.md",version:"current",sidebar_label:"Debugging in VSCode",sidebar:"guides",previous:{title:"Debugging",permalink:"/docs/guides/debugging"},next:{title:"Using native Node Modules",permalink:"/docs/guides/using-native-node-modules"}},u=[],p={rightToc:u};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Open a NodeGui project in VSCode.")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ git clone git@github.com:nodegui/nodegui-starter.git\n$ code nodegui-starter\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Add a file ",Object(i.b)("inlineCode",{parentName:"strong"},".vscode/launch.json")," with the following configuration:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Qode Process",\n      "type": "node",\n      "request": "launch",\n      "cwd": "${workspaceRoot}",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/qode",\n      "windows": {\n        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/qode.exe"\n      },\n      "args": ["./dist/index.js"],\n      "outputCapture": "std"\n    },\n    {\n      "command": "npx webpack --devtool source-map && npx qode --inspect ./dist/index.js",\n      "name": "Debug for Cmd",\n      "request": "launch",\n      "type": "node-terminal"\n    },\n    {\n      "command": "npx webpack --devtool source-map; npx qode --inspect ./dist/index.js",\n      "name": "Debug for PowerShell",\n      "request": "launch",\n      "type": "node-terminal"\n    },\n  ]\n}\n')),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Tip"),": "),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"You could also configure a preLaunchTask for building typescript before launching the debugger everytime."),Object(i.b)("li",{parentName:"ol"},"enable source-map feature for debugging."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Debugging")),Object(i.b)("p",{parentName:"li"},"Set some breakpoints in ",Object(i.b)("inlineCode",{parentName:"p"},"index.js"),", and start debugging in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging"}),"Debug View"),". You should be able to hit the breakpoints."))))}d.isMDXComponent=!0},436:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},l=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(t),l=r,g=s["".concat(a,".").concat(l)]||s[l]||b[l]||i;return t?o.a.createElement(g,c(c({ref:n},p),{},{components:t})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=l;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);