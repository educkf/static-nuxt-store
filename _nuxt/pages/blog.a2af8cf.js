(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{311:function(t,e,r){"use strict";r.r(e);r(6);var n=r(0),o=r(54),l=r.n(o),c={name:"IndexBlog",layout:"default",components:{},filters:{},props:{},data:function(){return{list:[]}},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.store,t.params;case 1:case"end":return e.stop()}}),e)})))()},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,t.error,r=t.$axios,e.prev=1,e.next=4,r.$get("https://firestore.googleapis.com/v1/projects/static-nuxt-store/databases/(default)/documents/Blog");case 4:if(!(n=e.sent)||!n.documents){e.next=7;break}return e.abrupt("return",{list:n.documents});case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{list:[]});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},computed:{},watch:{},created:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{toDate:function(t,e){return l()(t).format(e)}},head:function(){return{title:"Hello Static Nuxt store"}}},d=r(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"},[r("div",{staticClass:"relative max-w-lg mx-auto lg:max-w-7xl"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"},t._l(t.list,(function(e){return r("div",{key:e.fields._id.stringValue},[r("p",{staticClass:"text-sm leading-5 text-gray-500"},[r("time",{attrs:{datetime:t.toDate(e.fields._createDate.stringValue,"YYYY-MM-DD")}},[t._v(t._s(t.toDate(e.fields._createDate.stringValue,"DD/MM/YYYY hh:mm:ss")))])]),t._v(" "),r("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v(t._s(e.fields.title.stringValue))]),t._v(" "),r("div",{staticClass:"mt-3"},[r("nuxt-link",{staticClass:"text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{to:"/posts/"+e.fields._id.stringValue}},[t._v("Leia mais")])],1)])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{staticClass:"text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},[this._v("Blog")]),this._v(" "),e("div",{staticClass:"mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"},[e("p",{staticClass:"text-xl leading-7 text-gray-500"},[this._v("Listinha de post, pá")])])])}],!1,null,null,null);e.default=component.exports}}]);