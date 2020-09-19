(function(t){function e(e){for(var n,o,r=e[0],u=e[1],c=e[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var u=a[r];0!==i[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={index:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("a1ec")},"0bac":function(t,e,a){},"0f0c":function(t,e,a){"use strict";var n=a("0bac"),i=a.n(n);i.a},"35bb":function(t,e,a){},3720:function(t,e,a){},"674d":function(t,e,a){},"8bb8":function(t,e,a){"use strict";var n=a("35bb"),i=a.n(n);i.a},a0f2:function(t,e,a){"use strict";var n=a("674d"),i=a.n(n);i.a},a1ec:function(t,e,a){"use strict";a.r(e);a("b0c0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"},attrs:{id:"hero"}},[a("h1",{staticStyle:{"text-align":"center"}},[t._v(" Vue Concise Carousel is SSR and CSR friendly. ")]),t._m(0),a("div",{attrs:{id:"example"}},[a("carousel",{attrs:{"per-page-custom":[[480,1],[768,4]],"center-mode":!0,"navigation-enabled":!1}},t._l(t.slideCount,(function(t){return a("slide",{key:t},[a("img",{staticStyle:{width:"100%"},attrs:{src:"https://via.placeholder.com/1080.png/09f/fff"}})])})),1)],1),t._m(1),t._m(2),t._m(3)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"action",staticStyle:{"text-align":"center"}},[a("a",{staticClass:"button",attrs:{href:"#install"}},[t._v("GET STARTED")]),a("a",{staticClass:"button white",attrs:{href:"https://github.com/jambonn/vue-concise-carousel#readme"}},[t._v(" GITHUB ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"install"}},[a("h2",{staticStyle:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"},attrs:{id:"installation"}},[t._v(" Installation ")]),a("h3",[t._v("yarn/npm")]),a("pre",{staticClass:"language-bash"},[a("code",{staticClass:"language-bash"},[a("span",{staticClass:"token comment"},[t._v("# npm")]),t._v("\n"),a("span",{staticClass:"token function"},[t._v("npm")]),t._v(" i vue-concise-carousel\n"),a("span",{staticClass:"token comment"},[t._v("# yarn")]),t._v("\n"),a("span",{staticClass:"token function"},[t._v("yarn")]),t._v(" "),a("span",{staticClass:"token function"},[t._v("add")]),t._v(" vue-concise-carousel")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"quick-start"}},[a("h2",{staticStyle:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}},[t._v(" Quick Start ")]),a("p",[t._v(" See "),a("a",{attrs:{href:"https://github.com/jambonn/vue-concise-carousel#configuration"}},[t._v(" Configuration ")]),t._v(" to learn advanced usage. ")]),a("pre",{staticClass:"language-html"},[a("code",{staticClass:"language-html"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("carousel")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":center-mode")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("true"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":navigation-enabled")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("false"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n      "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("1"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n      "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("2"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n      "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("3"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n      "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("4"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("slide")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("carousel")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script"},[a("span",{staticClass:"token language-javascript"},[t._v("\n  "),a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Carousel, Slide } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'vue-concise-carousel'")]),t._v("\n  "),a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'vue-concise-carousel/dist/vue-concise-carousel.css'")]),t._v("\n\n  "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    name"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'ConciseCarouselComponent'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    components"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" Carousel, Slide "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"license"}},[a("h2",{staticStyle:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}},[t._v(" License ")]),a("p",[t._v(" This software is licensed under the "),a("a",{attrs:{href:"https://github.com/jambonn/vue-concise-carousel/blob/master/LICENSE"}},[t._v(" MIT ")]),t._v(" . ")])])}],o={name:"App",data:function(){return{slideCount:6}}},r=o,u=(a("d7fb"),a("2877")),c=Object(u["a"])(r,i,s,!1,null,null,null),l=c.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"VueCarousel",class:{"VueCarousel--reverse":"top"===t.paginationPosition}},[a("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[a("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden",height:""+t.currentHeight,"padding-left":t.padding+"px","padding-right":t.padding+"px"}},[t._t("default")],2)]),t.navigationEnabled?t._t("navigation",[t.isNavigationRequired?a("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()]):t._e(),t.paginationEnabled?t._t("pagination",[a("pagination",{on:{paginationclick:function(e){return t.goToPage(e,"pagination")}}})]):t._e()],2)},d=[],p=(a("99af"),a("4de4"),a("caad"),a("c975"),a("d81d"),a("13d5"),a("2af1"),a("a9e3"),a("ac1f"),a("2532"),a("466d"),a("2909")),g=a("5530"),f=a("53ca"),v={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout))},restartAutoplay:function(){this.pauseAutoplay(),this.startAutoplay()},autoplayAdvancePage:function(){this.advancePage(this.autoplayDirection)}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}},m=v,C=void 0,b=function(t,e,a){var n;return function(){var i=C,s=function(){n=null,a||t.apply(i)},o=a&&!n;clearTimeout(n),n=setTimeout(s,e),o&&t.apply(i)}},_=b,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"VueCarousel-navigation"},[a("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",tabindex:t.canAdvanceBackward?0:-1},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("backward")}}}),a("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",tabindex:t.canAdvanceForward?0:-1},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("forward")}}})])},k=[],y={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t)}}},w=y,S=(a("a0f2"),Object(u["a"])(w,P,k,!1,null,"60643be2",null)),x=S.exports,T=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination",class:(t={},t["VueCarousel-pagination--"+e.paginationPositionModifierName]=e.paginationPositionModifierName,t)},[n("div",{staticClass:"VueCarousel-dot-container",style:e.dotContainerStyle,attrs:{role:"tablist"}},e._l(e.paginationCount,(function(t,a){return n("button",{key:t+"_"+a,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":e.isCurrentDot(a)},style:e.dotStyle(a),attrs:{"aria-hidden":"false",role:"tab",title:e.getDotTitle(a),value:e.getDotTitle(a),"aria-label":e.getDotTitle(a),"aria-selected":e.isCurrentDot(a)?"true":"false"},on:{click:function(t){return e.goToPage(a)}}})})),0)])},O=[],$={name:"pagination",inject:["carousel"],computed:{paginationPositionModifierName:function(){var t=this.carousel.paginationPosition;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition:function(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount:function(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount||0},dotContainerStyle:function(){var t=this.carousel;if(-1===t.maxPaginationDotCount)return{"margin-top":"".concat(2*t.paginationPadding,"px")};var e=2*t.paginationPadding,a=t.maxPaginationDotCount*(t.paginationSize+e);return{"margin-top":"".concat(2*t.paginationPadding,"px"),overflow:"hidden",width:"".concat(a,"px"),margin:"0 auto","white-space":"nowrap"}}},methods:{goToPage:function(t){this.$emit("paginationclick",t)},isCurrentDot:function(t){return t===this.carousel.currentPage},getDotTitle:function(t){return this.carousel.$children[t].title?this.carousel.$children[t].title:"Item ".concat(t)},dotStyle:function(t){var e=this.carousel,a={};if(a["margin-".concat(this.paginationPropertyBasedOnPosition)]="".concat(2*e.paginationPadding,"px"),Object.assign(a,{padding:"".concat(e.paginationPadding,"px"),width:"".concat(e.paginationSize,"px"),height:"".concat(e.paginationSize,"px"),"background-color":"".concat(this.isCurrentDot(t)?e.paginationActiveColor:e.paginationColor)}),-1===e.maxPaginationDotCount)return a;var n=e.paginationSize+2*e.paginationPadding,i=e.pageCount-e.maxPaginationDotCount,s=e.currentPage>i?i:e.currentPage<=e.maxPaginationDotCount/2?0:e.currentPage-Math.ceil(e.maxPaginationDotCount/2)+1,o=0-n*s;return Object.assign(a,{"-webkit-transform":"translate3d(".concat(o,"px,0,0)"),transform:"translate3d(".concat(o,"px,0,0)"),"-webkit-transition":"-webkit-transform ".concat(e.speed/1e3,"s"),transition:"transform ".concat(e.speed/1e3,"s")})}}},M=$,E=(a("0f0c"),Object(u["a"])(M,T,O,!1,null,"4b52a64a",null)),A=E.exports,j={onwebkittransitionstart:"webkitTransitionStart",onmoztransitionstart:"transitionstart",onotransitionstart:"oTransitionStart otransitionstart",ontransitionstart:"transitionstart"},W={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},D=function(){for(var t in j)if(t in window)return j[t]},N=function(){for(var t in W)if(t in window)return W[t]},L={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:x,Pagination:A},data:function(){return{browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!==typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto"}},mixins:[m],provide:function(){return{carousel:this}},props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(t){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)||t.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===Object(f["a"])(t)?(0==t[1]&&(this.dragging=!0,setTimeout((function(){e.dragging=!1}),this.refreshRate)),this.$nextTick((function(){e.goToPage(t[0])}))):this.$nextTick((function(){e.goToPage(t)}))}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("page-change",t),this.$emit("input",t)},autoplay:function(t){!1===t?this.pauseAutoplay():this.restartAutoplay()}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,a=t.sort((function(t,e){return t[0]>e[0]?-1:1})),n=a.filter((function(t){return e>=t[0]})),i=n[0]&&n[0][1];return i||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:this.rtl?1*(this.offset-this.dragOffset):-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth:function(){var t=this.carouselWidth-2*this.spacePadding,e=this.currentPerPage;return t/e},isNavigationRequired:function(){return this.slideCount>this.currentPerPage},isCenterModeEnabled:function(){return this.centerMode&&!this.isNavigationRequired},transitionStyle:function(){var t="".concat(this.speed/1e3,"s"),e="".concat(t," ").concat(this.easing," transform");return this.adjustableHeight?"".concat(e,", height ").concat(t," ").concat(this.adjustableHeightEasing||this.easing):e},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?+this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},goToLastSlide:function(){var t=this;this.dragging=!0,setTimeout((function(){t.dragging=!1}),this.refreshRate),this.$nextTick((function(){t.goToPage(t.pageCount)}))},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var a={attributes:!0,data:!0};if(this.adjustableHeight&&(a=Object(g["a"])(Object(g["a"])({},a),{},{childList:!0,subtree:!0,characterData:!0})),this.mutationObserver=new e((function(){t.$nextTick((function(){t.computeCarouselWidth(),t.computeCarouselHeight()}))})),this.$parent.$el)for(var n=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<n.length;i++)this.mutationObserver.observe(n[i],a)}},handleNavigation:function(t){this.advancePage(t),this.pauseAutoplay(),this.$emit("navigation-click",t)},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),e=0;e<t.length;e++)t[e].clientWidth>0&&(this.carouselWidth=t[e].clientWidth||0);return this.carouselWidth},getCarouselHeight:function(){var t=this;if(!this.adjustableHeight)return"auto";var e=this.currentPerPage*(+this.currentPage+1)-1,a=Object(p["a"])(Array(this.currentPerPage)).map((function(a,n){return t.getSlide(e+n)})).reduce((function(t,e){return Math.max(t,e&&e.$el.clientHeight||0)}),0);return this.currentHeight=0===a?"auto":"".concat(a,"px"),this.currentHeight},getSlideCount:function(){var t=this;this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter((function(e){return e.tag&&null!==e.tag.match("^vue-component-\\d+-".concat(t.tagName,"$"))})).length||0},getSlide:function(t){var e=this,a=this.$children.filter((function(t){return null!==t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName,"$"))}));return a[t]},goToPage:function(t,e){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):this.slideWidth*t,this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t,"pagination"===e&&(this.pauseAutoplay(),this.$emit("pagination-click",t)))},onStart:function(t){2!=t.button&&(document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY)},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.pauseAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,a=this.dragStartX-e;if(this.dragMomentum=a/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(a)>=this.minSwipeDistance){var n=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(a)*(n/2)}this.rtl?this.offset-=this.dragOffset:this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,a=this.isTouch?t.touches[0].clientY:t.clientY,n=this.dragStartX-e,i=this.dragStartY-a;if(!(this.isTouch&&Math.abs(n)<Math.abs(i))){t.stopImmediatePropagation(),this.dragOffset=n;var s=this.offset+this.dragOffset;this.rtl?0==this.offset&&this.dragOffset>0?this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset):this.offset==this.maxOffset&&this.dragOffset<0&&(this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset)):s<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):s>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))}},onResize:function(){var t=this;this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout((function(){t.dragging=!1}),this.refreshRate)},render:function(){this.rtl?this.offset-=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth:this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,e=t*Math.floor(this.slideCount/(this.currentPerPage-1)),a=e+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(e+a)/2?this.offset=a:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},computeCarouselHeight:function(){this.getCarouselHeight()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart:function(){this.$emit("transitionStart"),this.$emit("transition-start")},handleTransitionEnd:function(){this.$emit("transitionEnd"),this.$emit("transition-end")}},mounted:function(){window.addEventListener("resize",_(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=D(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=N(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide()},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}},V=L,H=(a("8bb8"),Object(u["a"])(V,h,d,!1,null,null,null)),B=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":t.isActive,"VueCarousel-slide-center":t.isCenter,"VueCarousel-slide-adjustableHeight":t.isAdjustableHeight},attrs:{tabindex:"-1","aria-hidden":!t.isActive,role:"tabpanel"}},[t._t("default")],2)},I=[],R={name:"slide",props:["title"],data:function(){return{width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",(function(t){return t.preventDefault()})),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides:function(){var t=this.carousel,e=t.currentPage,a=t.breakpointSlidesPerPage,n=t.$children,i=[],s=n.filter((function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0})).map((function(t){return t._uid})),o=0;while(o<a){var r=s[e*a+o];i.push(r),o++}return i},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.breakpointSlidesPerPage;return!(t%2===0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)},isAdjustableHeight:function(){var t=this.carousel.adjustableHeight;return t}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,a=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(a)<this.carousel.minSwipeDistance)&&(this.$emit("slideclick",Object.assign({},t.currentTarget.dataset)),this.$emit("slide-click",Object.assign({},t.currentTarget.dataset)))}}},X=R,F=(a("f33a"),Object(u["a"])(X,z,I,!1,null,null,null)),q=F.exports;n["a"].config.productionTip=!1,n["a"].component(B.name,B),n["a"].component(q.name,q),new n["a"]({render:function(t){return t(l)}}).$mount("#app")},c889:function(t,e,a){},d7fb:function(t,e,a){"use strict";var n=a("3720"),i=a.n(n);i.a},f33a:function(t,e,a){"use strict";var n=a("c889"),i=a.n(n);i.a}});
//# sourceMappingURL=index.8d265cf5.js.map