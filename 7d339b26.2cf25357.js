(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},119:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(121),i=n(116),l=n(56),c=n.n(l),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),y=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(r.useState)(l),h=v[0],g=v[1],O=r.Children.toArray(e.children);if(null!=p){var w=y[p];null!=w&&w!==h&&b.some((function(e){return e.value===w}))&&g(w)}var j=function(e){g(e),null!=p&&f(p,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},120:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},121:function(e,t,n){"use strict";var r=n(0),a=n(122);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=n(0),a=n.n(r),o=n(119),i=n(120),l="ts",c="code",u=[{label:"roblox-ts",value:"ts"},{label:"luau",value:"luau"}];t.d=function(e){var t=e.children,n=t[0],r=t[1];return console.log(n,r),a.a.createElement(o.a,{defaultValue:l,groupId:c,values:u},a.a.createElement(i.a,{value:"ts"},n),a.a.createElement(i.a,{value:"luau"},r))}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(115)),i=n(123),l={id:"type-safety",title:"Type Safety",sidebar_label:"Type Safety",slug:"/type-safety"},c={unversionedId:"type-safety",id:"version-1.3.0/type-safety",isDocsHomePage:!1,title:"Type Safety",description:"It's important when you recieve events or calls from the server that you ensure the types are correct, otherwise unwanted errors may pop up.",source:"@site/versioned_docs/version-1.3.0/type-safety.md",slug:"/type-safety",permalink:"/rbx-net/docs/1.3.x/type-safety",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/versioned_docs/version-1.3.0/type-safety.md",version:"1.3.0",sidebar_label:"Type Safety",sidebar:"docs",previous:{title:"Install for TypeScript",permalink:"/rbx-net/docs/1.3.x/install"},next:{title:"Caching",permalink:"/rbx-net/docs/1.3.x/caching"}},u=[{value:"How to enforce types",id:"how-to-enforce-types",children:[]},{value:"Using an existing type guard library",id:"using-an-existing-type-guard-library",children:[{value:"TypeScript",id:"typescript",children:[]},{value:"Lua",id:"lua",children:[]}]}],s={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's important when you recieve events or calls from the server that you ensure the types are correct, otherwise unwanted errors may pop up."),Object(o.b)("p",null,"By default, events and callbacks are typed to ",Object(o.b)("inlineCode",{parentName:"p"},"unknown[]"),". This may become a bit problematic when you're trying to set specific parameter types as such:"),Object(o.b)("p",null,"It's important when you recieve events or calls from the server that you ensure the types are correct, otherwise unwanted errors may pop up."),Object(o.b)("p",null,"By default, events and callbacks are typed to ",Object(o.b)("inlineCode",{parentName:"p"},"unknown[]"),". This may become a bit problematic when you're trying to set specific parameter types as such:"),Object(o.b)(i.d,{mdxType:"Code"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const addItemToPlayer = new Net.ServerEvent("AddItemToPlayer");\naddItemToPlayer.Connect((player: Player, itemId: string, amount: number) => {\n    // itemId and amount will show with an error\n    // since unknown cannot be converted to number\n}) \n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'local addItemToPlayer = Net.ServerEvent.new("AddItemToPlayer")\naddItemToPlayer:Connect(function(player, itemId, amount) \n    -- itemId and amount could be anything here in Lua\n    -- This can lead to bugs, especially with exploiters\nend)\n'))),Object(o.b)("h2",{id:"how-to-enforce-types"},"How to enforce types"),Object(o.b)("p",null,"The constructors for ",Object(o.b)("inlineCode",{parentName:"p"},"Net.ServerEvent"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Net.ServerFunction")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Net.ServerAsyncFunction"),' all take extra parameters that are referred to as "Type Guards".'),Object(o.b)("p",null,"A type guard is a basic function which takes in a value, and returns whether or not the value matches a certain criteria to be of that type."),Object(o.b)(i.d,{mdxType:"Code"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'function isString(value: unknown): value is string {\n    return typeIs(value, "string");\n}\n\nfunction isNumber(value: unknown): value is number {\n    return typeIs(value, "number");\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'function isString(value)\n    return type(value) == "string"\nend\n\nfunction isNumber(value)\n    return type(value) == "number"\nend\n'))),Object(o.b)("p",null,"So in our above case, if we wanted to enforce our RemoteEvent to only take in a string, and a number:"),Object(o.b)(i.d,{mdxType:"Code"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import Net from \"@rbxts/net\";\n\nconst addItemToPlayer = new Net.ServerEvent(\"AddItemToPlayer\", isString, isNumber);\n// Take note of 'isString' and 'isNumber' use in the constructor here.\n// Also the types can be omitted as TypeScript knows what the types are now.\naddItemToPlayer.Connect((player, itemId, amount) => {\n    // itemId will always be a string\n    // amount will always be a number\n    // If either are wrong, it will get discarded\n}) \n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),"local Net = require(path_to_net)\n\nlocal addItemToPlayer = Net.ServerEvent.new(\"AddItemToPlayer\", isString, isNumber)\n-- Take note of 'isString' and 'isNumber' use in the constructor here.\naddItemToPlayer:Connect(function(player, itemId, amount) \n    -- itemId will always be a string\n    -- amount will always be a number\n    -- If either are wrong, it will get discarded\nend)\n"))),Object(o.b)("h2",{id:"using-an-existing-type-guard-library"},"Using an existing type guard library"),Object(o.b)("p",null,"Writing your own functions for type guards, while doable can get tedious. There is already a library called 't' which is a good solution for this."),Object(o.b)("h3",{id:"typescript"},"TypeScript"),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@rbxts/t"}),"install it")," using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i @rbxts/t\n")),Object(o.b)("p",null,"Then with our above example, simply replace ",Object(o.b)("inlineCode",{parentName:"p"},"isString")," and ",Object(o.b)("inlineCode",{parentName:"p"},"isNumber")," with ",Object(o.b)("inlineCode",{parentName:"p"},"t.string")," and ",Object(o.b)("inlineCode",{parentName:"p"},"t.number"),". There are also other type guards in that library that you could use for different argument types."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import t from "@rbxts/t";\nimport Net from "@rbxts/net";\n\nconst addItemToPlayer = new Net.ServerEvent("AddItemToPlayer", t.string, t.number);\naddItemToPlayer.Connect((player, itemId, amount) => {\n    // itemId will always be a string\n    // amount will always be a number\n    // If either are wrong, it will get discarded\n}) \n')),Object(o.b)("h3",{id:"lua"},"Lua"),Object(o.b)("p",null,"If you want the Lua version of t, it is available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/osyrisrblx/t"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'local Net = require(path_to_net)\nlocal t = require(path_to_t)\n\nlocal addItemToPlayer = Net.ServerEvent.new("AddItemToPlayer", t.string, t.number)\naddItemToPlayer:Connect(function(player, itemId, amount) \n    -- itemId will always be a string\n    -- amount will always be a number\n    -- If either are wrong, it will get discarded\nend)\n')))}b.isMDXComponent=!0}}]);