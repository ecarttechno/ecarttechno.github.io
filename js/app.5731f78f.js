(function(t){function e(e){for(var n,o,i=e[0],u=e[1],s=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==c[u]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},c={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"3a40":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"cartitemcount",(function(){return vt})),r.d(n,"carttotalprice",(function(){return bt}));var c={};r.r(c),r.d(c,"SET_PRODUCTS",(function(){return ht})),r.d(c,"SET_PRODUCT",(function(){return _t})),r.d(c,"ADD_TO_CART",(function(){return gt})),r.d(c,"SET_CART",(function(){return Ot})),r.d(c,"REMOVE_PRODUCT_FROM_CART",(function(){return yt})),r.d(c,"CLEAR_CART_ITEM",(function(){return Ct}));var a={};r.r(a),r.d(a,"getproducts",(function(){return Tt})),r.d(a,"getproduct",(function(){return wt})),r.d(a,"addproducttocart",(function(){return Et})),r.d(a,"getcartitems",(function(){return Rt})),r.d(a,"removeproductfromcart",(function(){return kt})),r.d(a,"clearcartitem",(function(){return $t}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view"),r("notificationList")],1)},u=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notification-list"},[r("notificationmessage")],1)},d=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},p=[],f={},m=f,v=r("2877"),b=Object(v["a"])(m,l,p,!1,null,null,null),h=b.exports,_={components:{notificationmessage:h}},g=_,O=(r("836e"),Object(v["a"])(g,s,d,!1,null,null,null)),y=O.exports,C={name:"App",components:{notificationList:y}},j=C,x=(r("034f"),Object(v["a"])(j,i,u,!1,null,null,null)),T=x.exports,w=r("5f5b"),E=r("b1e0"),R=(r("4989"),r("f9e3"),r("ab8b"),r("2dd8"),r("8c4f")),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container"},[r("headers"),r("productlist")],1)},$=[],q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[r("div",{staticClass:"container"},[r("div",{staticClass:"nav navbar-nav"},[r("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/"}},[t._v("Home")]),r("a",{staticClass:"nav-item nav-link",attrs:{href:"#"}},[t._v("products")])],1),r("div",[r("div",{staticClass:"dropdown open"},[r("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.cartitemcount)+" cart ")]),r("div",{on:{click:function(t){return t.stopPropagation()}}},[r("minicard")],1)])])])])])},S=[],P=r("5530"),A=r("2f62"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dropdown-menu p-2",staticStyle:{"min-width":"320px",right:"0",left:"auto"},attrs:{"aria-labelledby":"triggerId"}},[t._l(t.cart,(function(e){return r("div",{key:e.product.id},[r("div",{staticClass:"px-2 d-flex justify-content-between"},[r("div",[r("strong",[t._v(t._s(e.product.title))]),r("br"),t._v(t._s(e.quantity)+" x $"+t._s(e.product.price)+" ")]),r("div",[r("a",{staticClass:"badge badge-secondary",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.removeproductfromcart(e.product)}}},[t._v("remove")])])]),r("hr")])})),r("div",{staticClass:"d-flex justify-content-between"},[r("span",[t._v("Total:$"+t._s(t.carttotalprice))]),r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearcartitem()}}},[t._v("Clear Cart")])])],2)},M=[],U={computed:Object(P["a"])(Object(P["a"])({},Object(A["d"])(["cart"])),Object(A["c"])(["carttotalprice"])),mounted:function(){this.getcartitems()},methods:Object(P["a"])(Object(P["a"])({},Object(A["b"])(["clearcartitem","getcartitems"])),{},{removeproductfromcart:function(t){this.$store.dispatch("removeproductfromcart",t)}})},I=U,L=Object(v["a"])(I,D,M,!1,null,null,null),F=L.exports,J={components:{minicard:F},computed:Object(P["a"])({},Object(A["c"])(["cartitemcount"]))},V=J,H=Object(v["a"])(V,q,S,!1,null,"5c34238f",null),N=H.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-items-stretch flex-wrap"},t._l(t.products,(function(t){return r("productcard",{key:t.id,attrs:{product:t}})})),1)},B=[],G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-3 col-md-3 col-lg-3 col-sm-3 col-10 d-block m-auto"},[r("b-card",{staticClass:"mb-2 mt-5",staticStyle:{"max-width":"20rem"},attrs:{"img-alt":"Image","img-top":"",tag:"article"}},[r("img",{staticClass:"w-100",attrs:{src:t.product.image,alt:""}}),r("h4",{staticClass:"card-title"},[r("router-link",{attrs:{to:{name:"products",params:{id:t.product.id}}}},[t._v(t._s(t.product.title))])],1),r("strong",[t._v("$"+t._s(t.product.price))]),r("b-card-text",[t._v(" "+t._s(t.product.description)+" ")]),r("b-button",{attrs:{href:"#",variant:"primary"},on:{click:function(e){return t.addtocart()}}},[t._v("Add to Cart")])],1)],1)},K=[],Q={props:["product"],methods:Object(P["a"])(Object(P["a"])({},Object(A["b"])(["addproducttocart"])),{},{addtocart:function(){this.addproducttocart({product:this.product,quantity:1})}})},W=Q,X=Object(v["a"])(W,G,K,!1,null,null,null),Y=X.exports,Z={components:{productcard:Y},computed:Object(P["a"])({},Object(A["d"])(["products"])),mounted:function(){this.getproducts()},methods:Object(P["a"])({},Object(A["b"])(["getproducts"]))},tt=Z,et=Object(v["a"])(tt,z,B,!1,null,null,null),rt=et.exports,nt={components:{headers:N,productlist:rt}},ct=nt,at=Object(v["a"])(ct,k,$,!1,null,"2e50dd11",null),ot=at.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"main-container"},[r("headers"),r("div",{staticClass:"container"},[r("div",{staticClass:"row mt-5 full-detailes"},[t._m(0),r("div",{staticClass:"col-8"},[r("h1",[t._v(t._s(t.product.title))]),r("h3",[t._v("$"+t._s(t.product.price))]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"text-center col-1 mr-2 p-1",attrs:{type:"text"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addtocart()}}},[t._v(" add to cart ")]),r("p",{staticClass:"mt-4"},[t._v(" "+t._s(t.product.description)+" ")])])])])],1):t._e()},ut=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4"},[r("img",{staticClass:"w-100 ml-4",attrs:{src:"https://picsum.photos/600/300/?image=25",alt:""}})])}],st={components:{headers:N},data:function(){return{quantity:1}},props:["id"],computed:Object(P["a"])({},Object(A["d"])(["product"])),mounted:function(){this.getproduct(this.id)},methods:Object(P["a"])(Object(P["a"])({},Object(A["b"])(["addproducttocart","getproduct"])),{},{addtocart:function(){this.addproducttocart({product:this.product,quantity:this.quantity})}})},dt=st,lt=(r("75a1"),Object(v["a"])(dt,it,ut,!1,null,"428fc2fe",null)),pt=lt.exports;o["default"].use(R["a"]);var ft=new R["a"]({mode:"history",routes:[{path:"/",name:"home",component:ot},{path:"/products/:id",name:"products",component:pt,props:!0}]}),mt={products:[],product:null,cart:[]},vt=(r("4160"),r("159b"),function(t){return t.cart.length}),bt=function(t){var e=0;return t.cart.forEach((function(t){e+=t.product.price*t.quantity})),e},ht=(r("4de4"),r("7db0"),function(t,e){t.products=e}),_t=function(t,e){t.product=e},gt=function(t,e){var r=e.product,n=e.quantity,c=t.cart.find((function(t){return t.product.id===r.id}));c?c.quantity+=n:t.cart.push({product:r,quantity:n})},Ot=function(t,e){t.cart=e},yt=function(t,e){t.cart=t.cart.filter((function(t){return t.product.id!==e.id}))},Ct=function(t){t.cart=[]},jt=r("bc3a"),xt=r.n(jt),Tt=function(t){var e=t.commit;xt.a.get("http://localhost:3000/products").then((function(t){e("SET_PRODUCTS",t.data)}))},wt=function(t,e){var r=t.commit;xt.a.get("http://localhost:3000/products/".concat(e)).then((function(t){r("SET_PRODUCT",t.data)}))},Et=function(t,e){var r=t.commit,n=e.product,c=e.quantity;r("ADD_TO_CART",{product:n,quantity:c}),xt.a.post("http://localhost:3000/cart",{product_id:n.id,quantity:c})},Rt=function(t){var e=t.commit;xt.a.get("http://localhost:3000/cart").then((function(t){e("SET_CART",t.data)}))},kt=function(t,e){var r=t.commit;r("REMOVE_PRODUCT_FROM_CART",e),xt.a.delete("http://localhost:3000/cart/".concat(e.id))},$t=function(t){var e=t.commit;e("CLEAR_CART_ITEM"),xt.a.delete("http://localhost:3000/cart")};o["default"].use(A["a"]);var qt=new A["a"].Store({state:mt,getters:n,mutations:c,actions:a});o["default"].config.productionTip=!1,o["default"].use(w["a"]),o["default"].use(E["a"]),new o["default"]({router:ft,store:qt,render:function(t){return t(T)}}).$mount("#app")},"75a1":function(t,e,r){"use strict";r("3a40")},"836e":function(t,e,r){"use strict";r("db06")},"85ec":function(t,e,r){},db06:function(t,e,r){}});
//# sourceMappingURL=app.5731f78f.js.map