(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5097b854",content,!0,{sourceMap:!1})},199:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4c327bd0",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("a08b740c",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n(198)},202:function(t,e,n){var o=n(41),c=n(203),r=n(204);e=o(!1);var l=c(r);e.push([t.i,".name-hero[data-v-c3cdef04]{background:linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6)),url("+l+');background-size:cover;background-attachment:fixed}.scroll-text[data-v-c3cdef04]{padding-bottom:1em;font-size:1.2em}.scroll-text>*[data-v-c3cdef04]{position:relative;-webkit-animation:bounce-data-v-c3cdef04 1s linear infinite;animation:bounce-data-v-c3cdef04 1s linear infinite}.contact-link[data-v-c3cdef04]:not(:last-of-type):after{content:" | "}@-webkit-keyframes bounce-data-v-c3cdef04{0%,55%{top:0}60%{top:.1em}70%{top:.3em}to{top:0}}@keyframes bounce-data-v-c3cdef04{0%,55%{top:0}60%{top:.1em}70%{top:.3em}to{top:0}}',""]),t.exports=e},203:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},204:function(t,e,n){t.exports=n.p+"img/fox.a0c7ad9.jpg"},205:function(t,e,n){"use strict";n(199)},206:function(t,e,n){(e=n(41)(!1)).push([t.i,".introduction[data-v-2aba11f0]{padding-top:1rem}.content h3[data-v-2aba11f0]{text-decoration:underline}",""]),t.exports=e},207:function(t,e,n){"use strict";n(200)},208:function(t,e,n){(e=n(41)(!1)).push([t.i,".fullscreen-snap-container[data-v-55e26e53]{-ms-scroll-snap-type:y proximity;scroll-snap-type:y proximity;height:100vh;width:100vw;overflow-y:scroll;overflow-x:hidden;scroll-behavior:smooth}.fullscreen-snap-container>*[data-v-55e26e53]{scroll-snap-align:start}",""]),t.exports=e},219:function(t,e,n){"use strict";n.r(e);n(33);var o=n(2),c={},r=(n(201),n(34)),l=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-primary is-fullheight name-hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("Yeonjin Shin")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Rookie developer ;D\n                "),e("br"),this._v(" "),this._t("default")],2)])]),this._v(" "),e("div",{staticClass:"hero-foot"},[e("div",{staticClass:"container scroll-text"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("font-awesome-icon",{attrs:{icon:"chevron-down"}}),this._v(" Scroll down to see more")],1)])])])])}),[],!1,null,"c3cdef04",null).exports,f={props:["href","title","icon"]},h=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"contact-link",attrs:{href:this.href,title:this.title,target:"_blank"}},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:this.icon}})],1)])}),[],!1,null,null,null).exports,d={props:["page"]},v=(n(205),Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section introduction"},[e("nuxt-content",{staticClass:"content is-medium",attrs:{document:this.page}})],1)}),[],!1,null,"2aba11f0",null).exports),m=(n(207),{components:{WelcomeSection:l,WelcomeSectionLink:h,ContentSection:v,FullscreenScrollSnap:Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fullscreen-snap-container"},[this._t("default")],2)}),[],!1,null,"55e26e53",null).exports},head:function(){return{title:"Yeonjin Shin",meta:[{name:"viewport",content:"width=device-width, user-scalable=no"},{property:"og:title",content:"Yeonjin Shin"},{property:"og:description",content:"Personal website of yeonjin shin"},{property:"og:image",content:"https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1"},{property:"og:url",content:"https://litehell.info"}],link:[{rel:"shortcut icon",href:"https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1"}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("index").fetch();case 3:return o=e.sent,e.abrupt("return",{page:o});case 5:case"end":return e.stop()}}),e)})))()}}),x=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fullscreen-scroll-snap",[n("welcome-section",[n("welcome-section-link",{attrs:{icon:["fab","github"],href:"https://github.com/litehell",title:"Github"}}),t._v(" "),n("welcome-section-link",{attrs:{icon:["fab","linkedin"],href:"https://linkedin.com/in/litehell",title:"LinkedIn"}}),t._v(" "),n("welcome-section-link",{attrs:{icon:["fab","keybase"],href:"https://keybase.io/litehell",title:"Keybase"}}),t._v(" "),n("welcome-section-link",{attrs:{icon:"envelope",href:"mailto:litehell@litehell.info",title:"E-mail"}})],1),t._v(" "),n("content-section",{staticClass:"website-content",attrs:{page:t.page}}),t._v(" "),n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[t._v("\n                Copyrights (C) 2019~2020 Yeonjin Shin"),n("br"),t._v("\n                Fox Image : Copyrights (C) 2004 Shiretoko-Shari Torurist Association"),n("br"),t._v("\n                Distributed under CCL BY 4.0 license\n            ")])])])],1)}),[],!1,null,null,null);e.default=x.exports}}]);