/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r,o,a={953:(e,t,n)=>{var r=n(294),o=n(745),a=n(702),i=n(318),l=n(130),c=n(379),s=n.n(c),u=n(795),m=n.n(u),d=n(569),h=n.n(d),f=n(565),p=n.n(f),g=n(216),b=n.n(g),w=n(589),y=n.n(w),v=n(253),x={};function E(e){var t=e.children;return r.createElement("main",null,r.createElement("article",{className:"container mx-auto p-10 mt-10"},t))}function k(e){var t=e.title,n=e.paragraphs;return r.createElement(r.Fragment,null,r.createElement("h1",{className:"text-3xl mb-3 pb-2 pt-6 underline underline-offset-8"},t),n.map((function(e){return"string"==typeof e?r.createElement("p",{className:"my-2 pl-1"},e):r.createElement("div",{className:"my-2 pl-1"},e)})))}x.styleTagTransform=y(),x.setAttributes=p(),x.insert=h().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=b(),s()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;function S(e){var t,n=e.children,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["children"]);return r.createElement("div",null,r.createElement("span",{className:"text-lg font-semibold inline"},o.titleHref?r.createElement("a",{href:o.titleHref},o.title):o.title)," ",r.createElement("span",{className:"text-sm"},o.startYear," ~ ",null!==(t=o.endYear)&&void 0!==t?t:"현재"),r.createElement("br",null),n)}function j(e){var t=e.children;return r.createElement("li",null,r.createElement("div",{className:"inline-table pt-3"},Array.isArray(t)?t.map((function(e){return"string"==typeof e?r.createElement("span",null,e):e})):t))}function N(e){var t=e.children,n=e.href;return r.createElement("a",{href:n,className:"text-blue-600 hover:text-blue-800 focus:text-blue-800 active:text-blue-900 visited:text-orange-800"},t)}function O(e){var t=e.name,n=e.techs,o=e.href,a=e.children;return r.createElement("div",null,r.createElement("span",{className:"text-lg font-semibold"},o?r.createElement(N,{href:o},t):t)," ",r.createElement("span",{className:"text-sm text-gray-600"},n.join(", ")),r.createElement("br",null),a)}function L(e){var t=e.children;return r.createElement("div",{className:"mt-2 mb-4 pl-3"},r.createElement("ul",{className:"list-disc list-outside ml-2"},t))}function z(){return r.createElement(E,null,r.createElement(k,{title:"소개",paragraphs:["안녕하세요, 4년제 대학교에서 컴퓨터공학을 공부하고, 웹 개발에 관심이 많은 초보 개발자입니다.",r.createElement("p",null,"지금까지 여러 웹 어플리케이션들을 만들었으며, Node.js와 TypeScript, React(혹은 Vue)를 이용해 복잡하지 않은 웹사이트를 만들 수 있을 정도의 지식을 갖추고 있습니다.",r.createElement("br",null),"또한, C#이나 VB.NET를 이용해보았기에 .NET 프로그래밍에도 약간의 지식을 갖추고 있습니다.")]}),r.createElement(k,{title:"학력 및 병역",paragraphs:[r.createElement(L,null,r.createElement(j,null,r.createElement(S,{title:"중앙대학교",titleHref:"https://cse.cau.ac.kr",startYear:2019},r.createElement("span",null,"소프트웨어학부, 컴퓨터공학사"))),r.createElement(j,null,r.createElement(S,{title:"대한민국 공군",titleHref:"https://rokaf.airforce.mil.kr/",startYear:2021,endYear:2022},r.createElement("span",null,"병장 만기전역"))))]}),r.createElement(k,{title:"프로젝트",paragraphs:[r.createElement("p",null,"여러개의 개인 프로젝트를 진행했으며, 대부분의 프로젝트들은 제 GitHub에서 확인하실 수 있습니다.",r.createElement("br",null),"제가 2020년에 ",r.createElement(N,{href:"https://www.instagram.com/cau_manhwadure/"},"중앙대학교 동아리 만화두레"),"에서 부회장으로 일하며 진행한 프로젝트들은 다음과 같습니다."),r.createElement(L,null,r.createElement(j,null,r.createElement(O,{name:"fullcards",href:"https://github.com/ManhwaDure/fullcards",techs:["TypeScript","React","MariaDB"]},r.createElement("p",null,r.createElement(N,{href:"https://caumd.club"},"동아리 소개 홈페이지"),"를 만드는 데 이용되는 웹 어플리케이션입니다.",r.createElement("br",null),"카드 형식의 컨텐츠를 만들거나 수정할 수 있으며, OpenID Connect 표준에 따라 로그인을 외부와 연동할 수 있습니다."))),r.createElement(j,null,r.createElement(O,{name:r.createElement("span",null,r.createElement(N,{href:"https://id.caumd.club"},"회원관리 사이트"),"(",r.createElement(N,{href:"https://github.com/ManhwaDure/manduid-backend"},"백엔드"),", ",r.createElement(N,{href:"https://github.com/ManhwaDure/manduid-frontend"},"프론트엔드"),")"),techs:["TypeScript","Vue","GraphQL","MariaDB"]},r.createElement("p",null,"신입회원의 동아리 가입 신청을 받고, 회원명부와 계정을 관리하는 홈페이지입니다.",r.createElement("br",null),"동아리 운영의 체계성을 위해 회원명부의 수정기록을 보존하는 기능과 다른 관리자를 선임하는 기능, 그리고 관리권한을 세부적으로 부여하는 기능이 구현되어 있습니다.",r.createElement("br",null),"해당 사이트는 OpenID Connect 1.0 표준에서의 Identitiy Provider로서도 동작합니다. 따라서 해당 사이트의 계정은 위의 Fullcards에 관리자로 로그인하거나, 혹은 후술할 위키에 로그인할 때도 이용됩니다."))),r.createElement(j,null,r.createElement(O,{name:"동아리 위키",href:"https://wiki.caumd.club",techs:["Python"]},r.createElement("p",null,r.createElement(N,{href:"https://github.com/openNAMU/openNAMU"},"openNAMU"),"를 이용해 운영되던 동아리 위키를 인수인계받아 회원관리 사이트와 로그인을 연동시키고 동아리 실정에 맞게 약간의 수정을 거쳐 운영했습니다.")))),r.createElement("p",null,"지금은 많이 식었지만, 저는 개인적으로 ",r.createElement(N,{href:"https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4"},"위키"),"에 관심이 있습니다. 따라서 위키와 관련된 프로젝트를 몇개 진행했으며, 그 프로젝트들은 다음과 같습니다."),r.createElement(L,null,r.createElement(j,null,r.createElement(O,{name:"NamuFix",href:"https://github.com/LiteHell/NamuFix",techs:["Javascript"]},r.createElement("p",null,r.createElement(N,{href:"https://namu.wiki"},"나무위키"),", ",r.createElement(N,{href:"https://alphawiki.org"},"알파위키"),", ",r.createElement(N,{href:"https://theseed.io"},"더시드위키")," 등 ",r.createElement(N,{href:"mailto:namu@theseed.io"},"익명 개발자 namu"),"가 개발한 ",r.createElement(N,{href:"https://namu.wiki/w/the%20seed"},"the seed"),"를 이용하는 위키 사이트를 편리하게 이용할 수 있게 하는 유저스크립트입니다.",r.createElement("br",null),"임시저장이나 드래그앤 드롭 이미지 업로드 등을 지원하는 위키텍스트 에디터와, 토론시 앵커 미리보기, 위키 관리자들을 위한 일괄차단 메뉴 등 여러가지 기능을 추가합니다.",r.createElement("br",null),"2015년부터 2020년까지 개발 및 유지보수하였으며, 현재는 유지보수를 중단했습니다, 이 스크립트에 대한 자세한 사항은 ",r.createElement(N,{href:"https://namu.wiki/w/NamuFix"},"나무위키 문서"),"나 ",r.createElement(N,{href:"https://blog.litehell.info/post/memory_of_namufix"},"블로그 글"),"를 참고해주세요."))),r.createElement(j,null,r.createElement(O,{name:"theseed-skin-buma",href:"https://github.com/LiteHell/theseed-skin-buma",techs:["Javascript","Vue"]},r.createElement("p",null,r.createElement(N,{href:"https://alphawiki.org"},"알파위키"),"에서 로그인한 사용자가 선택할 수 있는 스킨입니다. ",r.createElement(N,{href:"https://bulma.io"},"bulma CSS 프레임워크"),"를 이용해 개발했습니다.")))),r.createElement("p",null,"위에 서술한 것 이외에 학교에서 진행했거나, 혹은 학교와 관련된 프로젝트는 다음과 같습니다."),r.createElement(L,null,r.createElement(j,null,r.createElement(O,{name:"caucalendar",href:"https://caucalendar.online",techs:["Javascript"]},r.createElement("p",null,"중앙대학교 학사일정을 주기적으로 크롤링해 ",r.createElement(N,{href:"https://en.wikipedia.org/wiki/ICalendar"},"ics 파일 형식"),"으로 제공하는 프로젝트입니다.",r.createElement("br",null),"해당 서비스를 이용하면 학사일정을 모바일 캘린더앱이나 구글 캘린더 등에서 편하게 보실 수 있습니다.",r.createElement("br",null),"소스코드는 ",r.createElement(N,{href:"https://github.com/litehell/caucalendar"},"여기"),"서 보실 수 있습니다.")))),r.createElement("p",null,"이외에도 몇가지 프로젝트가 더 있지만 이 사이트에는 서술하지 않았습니다.")]}))}function C(){return r.createElement("footer",{className:"bg-gray-300"},r.createElement("div",{className:"container mx-auto p-10 text-center"},r.createElement("p",null,"Copyright (C) 2023 Yeonjin Shin, All rights reserved",r.createElement("br",null),"This website is licensed under ",r.createElement(N,{href:"https://www.gnu.org/licenses/gpl-3.0.html"},"GNU General Public License Version 3"),", or (at your option) any later version.",r.createElement("br",null),"Source code of this website is available on ",r.createElement(N,{href:"https://github.com/litehell/litehell.github.io"},"GitHub"))))}function A(){return"undefined"!=typeof window&&"undefined"!=typeof document}function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function P(){P=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),l=new j(o||[]);return r(i,"_invoke",{value:x(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var m={};function d(){}function h(){}function f(){}var p={};c(p,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==t&&n.call(b,a)&&(p=b);var w=f.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function v(e,t){function o(r,a,i,l){var c=u(e[r],e,a);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==_(m)&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){o("next",e,i,l)}),(function(e){o("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return o("throw",e,i,l)}))}l(c.arg)}var a;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function x(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=u(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=f,r(w,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:h,configurable:!0}),h.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(v.prototype),c(v.prototype,i,(function(){return this})),e.AsyncIterator=v,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new v(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(w),c(w,l,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(){var e,t,o=(e=(0,r.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1],l=(0,r.createRef)();return(0,r.useEffect)((function(){null===a&&null!==l.current&&function(e){return t=this,r=void 0,o=void 0,a=P().mark((function t(){var r,o,a,i,l,c;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!A()){t.next=12;break}return t.next=3,n.e(85).then(n.t.bind(n,85,23));case 3:return r=t.sent,o=r.default,a=o(e),i=a.toSVGTree().toString(),l=new Blob([i],{type:"image/svg+xml"}),c=URL.createObjectURL(l),t.abrupt("return",c);case 12:return t.abrupt("return","");case 13:case"end":return t.stop()}}),t)})),new(o||(o=Promise))((function(e,n){function i(e){try{c(a.next(e))}catch(e){n(e)}}function l(e){try{c(a.throw(e))}catch(e){n(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,l)}c((a=a.apply(t,r||[])).next())}));var t,r,o,a}({width:l.current.getBoundingClientRect().width,height:l.current.getBoundingClientRect().height}).then((function(e){i("url(".concat(e,")"))}))})),r.createElement("div",{style:{backgroundImage:null!=a?a:""},ref:l,className:"bg-amber-600 bg-no-repeat bg-cover w-full md:w-3/5 h-full card-background p-12 text-right flex flex-col justify-end bg-fixed"})}var M=n(6);function F(e){return r.createElement("div",{className:"p-12 pt-6 md:pt-12 align-bottom text-left md:w-full h-full flex-1 flex flex-col justify-between bg-gray-50 bg-bottom",id:"card-title"},r.createElement("div",{className:"text-left text-xl mb-12"},r.createElement(M.Z,{className:"icon"})),r.createElement("div",{className:"text-left w-full font-sans"},r.createElement("h1",{className:"text-4xl font-normal"},e.title),r.createElement("p",{className:"text-xl font-light"},e.subtitle),r.createElement("div",{className:"border-gray-700 border-x-0 border-y h-0 w-64 my-5"}),r.createElement("p",null,r.createElement("i",{"data-feather":"mail"})," E-mail: ",r.createElement("a",{className:"hover:text-gray-700",href:"mailto:".concat(e.email)},e.email),r.createElement("br",null),r.createElement("i",{"data-feather":"key"})," GPG Key: ",r.createElement("code",null,function(e){for(var t="",n=0,r=0;r<e.length;r++)t+=e[r],0==(n=++n%4)&&(t+=" ");return t}(e.gpgKey))),r.createElement("ul",{className:"mt-1.5"},e.links.map((function(e){return r.createElement("li",{className:"inline mr-2 last:mr-0",key:e.key},r.createElement("a",{className:"hover:text-gray-700",href:e.href},e.icon," ",e.text))}))),r.createElement("div",{className:"text-sm mt-3 text-gray-700"},"Scroll down to see more...")))}function I(e){return r.createElement("header",{className:"h-screen w-screen flex flex-col md:flex-row-reverse shadow-md"},r.createElement(T,null),r.createElement(F,Object.assign({},e)))}function U(e){var t=e.email;return r.createElement("div",null,r.createElement(I,{title:"Yeonjin Shin",subtitle:"Rookie software engineer",email:t,gpgKey:"D6D80A51DDFA07A4",links:[{href:"https://github.com/litehell",text:"GitHub",key:"GitHub",icon:r.createElement(a.Z,{className:"icon"})},{href:"https://linkedin.com/in/LiteHell",text:"LinkedIn",key:"LinkedIn",icon:r.createElement(i.Z,{className:"icon"})},{href:"https://blog.litehell.info",text:"Blog",key:"Blog",icon:r.createElement(l.Z,{className:"icon"})}]}),r.createElement(z,null),r.createElement(C,null))}if(A()){var G="yeonjin.name"===location.hostname?"yeonjin@yeonjin.name":"litehell@litehell.info",H=document.querySelector("body > #root");H.classList.contains("hydrated")?o.hydrateRoot(H,r.createElement(U,{email:G})):o.createRoot(H).render(r.createElement(U,{email:G}))}},253:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-table {\n  display: inline-table;\n}\n.h-full {\n  height: 100%;\n}\n.h-0 {\n  height: 0px;\n}\n.h-screen {\n  height: 100vh;\n}\n.w-full {\n  width: 100%;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.list-outside {\n  list-style-position: outside;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.flex-col {\n  flex-direction: column;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.border-x-0 {\n  border-left-width: 0px;\n  border-right-width: 0px;\n}\n.border-y {\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.bg-amber-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(217 119 6 / var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.bg-cover {\n  background-size: cover;\n}\n.bg-fixed {\n  background-attachment: fixed;\n}\n.bg-bottom {\n  background-position: bottom;\n}\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n.p-10 {\n  padding: 2.5rem;\n}\n.p-12 {\n  padding: 3rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.pl-1 {\n  padding-left: 0.25rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.align-bottom {\n  vertical-align: bottom;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.underline-offset-8 {\n  text-underline-offset: 8px;\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\nsvg.icon {\n    display: inline;\n    height: 1em !important;\n    width: auto !important;\n}\n\n#card-title {\n    background-attachment: fixed;\n    background-position-y: 95%;\n}\n\n.last\\:mr-0:last-child {\n  margin-right: 0px;\n}\n\n.visited\\:text-orange-800:visited {\n  color: rgb(154 52 18 );\n}\n\n.hover\\:text-blue-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n\n.focus\\:text-blue-800:focus {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.active\\:text-blue-900:active {\n  --tw-text-opacity: 1;\n  color: rgb(30 58 138 / var(--tw-text-opacity));\n}\n\n@media (min-width: 768px) {\n\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .md\\:w-full {\n    width: 100%;\n  }\n\n  .md\\:flex-row-reverse {\n    flex-direction: row-reverse;\n  }\n\n  .md\\:pt-12 {\n    padding-top: 3rem;\n  }\n}',""]);const l=i}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return a[e].call(n.exports,n,n.exports,l),n.exports}l.m=a,e=[],l.O=(t,n,r,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,o]=e[u],i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(o,a),o},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="litehell-homepage:",l.l=(e,t,n,a)=>{if(r[e])r[e].push(t);else{var i,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var m=s[u];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==o+n){i=m;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(h);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,n)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(n=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(c)var u=c(l)}for(t&&t(n);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},n=self.webpackChunklitehell_homepage=self.webpackChunklitehell_homepage||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var c=l.O(void 0,[201],(()=>l(953)));c=l.O(c)})();