!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("intersection-observer"),require("core-js/modules/es.array.concat")):"function"==typeof define&&define.amd?define(["exports","intersection-observer","core-js/modules/es.array.concat"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueLazy={})}(this,(function(e){"use strict";function t(e,t,n,i,o,s,r,d,c,a){"boolean"!=typeof r&&(c=d,d=r,r=!1);const u="function"==typeof n?n.options:n;let l;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):t&&(l=r?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),l)if(u.functional){const e=u.render;u.render=function(t,n){return l.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,l):[l]}return n}const n={props:{src:{required:!0,type:String},width:{type:String,default:function(){return null}},height:{type:String,default:function(){return null}},srcset:{type:String,default:function(){return null}},config:{type:Object,default:function(){return{threshold:[0,1]}}}},data:function(){return{isLoaded:!1}},computed:{getSrc:function(){return this.isLoaded?this.src:this.placeholder},getSrcset:function(){return this.isLoaded?this.srcset:null},getClass:function(){return["lazyload",{lazyloaded:this.isLoaded}]},placeholder:function(){return this.width&&this.height?"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ".concat(this.width," ").concat(this.height,"'%3E%3C/svg%3E"):"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}},mounted:function(){var e=this,t=new IntersectionObserver((function(n){n[0]&&n[0].isIntersecting&&(e.onLoad(),t.disconnect())}),this.config);t.observe(this.$el)},methods:{onLoad:function(){this.isLoaded=!0,this.$emit("loaded",!0)}}};var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{class:e.getClass,attrs:{src:e.getSrc,srcset:e.getSrcset,width:e.width,height:e.height}})};i._withStripped=!0;const o=t({render:i,staticRenderFns:[]},undefined,n,undefined,false,undefined,!1,void 0,void 0,void 0);var s={install:function(e){e.component("lazy-image",o)}};e.LazyImage=o,e.default=s,Object.defineProperty(e,"__esModule",{value:!0})}));