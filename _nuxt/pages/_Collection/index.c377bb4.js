(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(t,e,r){"use strict";var n=r(3),o=r(43).find,c=r(93),l=r(29),d=!0,f=l("find");"find"in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d||!f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},321:function(t,e,r){"use strict";r.r(e);r(12),r(23),r(302),r(18),r(35),r(33),r(34),r(28),r(19);var n=r(10),o=(r(6),r(0)),c=r(37),l=r(54),d=r.n(l);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"IndexCollection",layout:"default",components:{},filters:{},props:{},data:function(){return{list:[]}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.store,t.params;case 1:case"end":return e.stop()}}),e)})))()},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,t.error,o=t.$axios,e.next=3,r.dispatch("CollectionStore/setupCollections");case 3:return e.prev=3,e.next=6,o.$get("https://firestore.googleapis.com/v1/projects/static-nuxt-store/databases/(default)/documents/"+n.Collection);case 6:if(!(c=e.sent)||!c.documents){e.next=9;break}return e.abrupt("return",{list:c.documents});case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",{list:[]});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()},computed:m(m({},Object(c.b)({collections:function(t){return t.CollectionStore.collections}})),{},{collection:function(){var t=this;return this.collections.length>0?this.collections.find((function(e){return e.name===t.$route.params.Collection})):null}}),watch:{},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{toDate:function(t,e){return d()(t).format(e)}},head:function(){return{title:"Hello Static Nuxt store"}}},v=r(4),component=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"},[t.collection?r("div",{staticClass:"relative max-w-lg mx-auto lg:max-w-7xl"},[r("div",[r("h2",{staticClass:"text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},[t._v(t._s(t.collection.label))]),t._v(" "),r("div",{staticClass:"mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"},[r("p",{staticClass:"text-xl leading-7 text-gray-500"},[t._v(t._s(t.collection.description))])])]),t._v(" "),r("div",{staticClass:"mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"},t._l(t.list,(function(e){return r("div",{key:e.fields._id.stringValue},[r("p",{staticClass:"text-sm leading-5 text-gray-500"},[r("time",{attrs:{datetime:t.toDate(e.fields._createDate.stringValue,"YYYY-MM-DD")}},[t._v(t._s(t.toDate(e.fields._createDate.stringValue,"DD/MM/YYYY hh:mm:ss")))])]),t._v(" "),r("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v(t._s(e.fields.title.stringValue))]),t._v(" "),r("div",{staticClass:"mt-3"},[r("nuxt-link",{staticClass:"text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{to:"/"+t.collection.name+"/"+e.fields._id.stringValue}},[t._v("Leia mais")])],1)])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);