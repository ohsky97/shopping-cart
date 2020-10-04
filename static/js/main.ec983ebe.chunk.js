(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{15:function(e,t,a){e.exports={p__grid:"ProductsGrid_p__grid__jG-ud"}},23:function(e,t,a){e.exports={header:"header_header__3vvvj"}},25:function(e,t,a){e.exports={footer:"footer_footer__1mhel"}},28:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=a(8),i=a(2),m=a(14),s=a(3),u=a(11),p=function(e){return function(e){localStorage.setItem("cart",JSON.stringify(e.length>0?e:[]))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}},d=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(s.a)(Object(s.a)({},t.payload),{},{quantity:1})),Object(s.a)(Object(s.a)(Object(s.a)({},e),p(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"REMOVE_ITEM":return Object(s.a)(Object(s.a)(Object(s.a)({},e),p(e.cartItems.filter((function(e){return e.id!==t.payload.id})))),{},{cartItems:Object(u.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity++,Object(s.a)(Object(s.a)(Object(s.a)({},e),p(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"DECREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity--,Object(s.a)(Object(s.a)(Object(s.a)({},e),p(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"CHECKOUT":return Object(s.a)({cartItems:[],checkout:!0},p([]));case"CLEAR":return Object(s.a)({cartItems:[]},p([]));default:return e}},E=Object(n.createContext)(),h=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],b=Object(s.a)(Object(s.a)({cartItems:h},p(h)),{},{checkout:!1}),g=function(e){var t=e.children,a=Object(n.useReducer)(d,b),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(s.a)({removeProduct:function(e){o({type:"REMOVE_ITEM",payload:e})},addProduct:function(e){o({type:"ADD_ITEM",payload:e})},increase:function(e){o({type:"INCREASE",payload:e})},decrease:function(e){o({type:"DECREASE",payload:e})},clearCart:function(){o({type:"CLEAR"})},handleCheckout:function(){console.log("CHECKOUT",l),o({type:"CHECKOUT"})}},l);return r.a.createElement(E.Provider,{value:i},t)},f=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd",fillRule:"evenodd"}))},v=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"}))},y=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}))},N=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"}))},C=function(e){var t=e.width;return r.a.createElement("svg",{width:t,viewBox:"0 0 16 16",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))},j=a(23),x=a.n(j),O=function(){var e=Object(n.useContext)(E).itemCount;return r.a.createElement("header",{className:x.a.header},r.a.createElement(o.b,{to:"/"},"Store"),r.a.createElement(o.b,{to:"/about"},"About"),r.a.createElement(o.b,{to:"/cart"},r.a.createElement(y,null)," Cart (",e,")"))},I=a(25),w=a.n(I),k=function(){return r.a.createElement("footer",{className:"".concat(w.a.footer," mt-5 p-3")},"2020 \xa9 React Store")},R=a(13),_=(a(38),function(e){var t=e.title,a=e.description,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement("title",null,t?t+" - React Boilerplate":"React.js Boilerplate"),r.a.createElement("meta",{name:"description",content:a||"React.js Boilerplate"})),r.a.createElement(O,null),r.a.createElement("main",{className:"container"},n),r.a.createElement(k,null))}),S=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},A=function(e){var t=e.product,a=Object(n.useContext)(E),c=a.addProduct,l=a.cartItems,i=a.increase,m=function(e){return!!l.find((function(t){return t.id===e.id}))};return r.a.createElement("div",{className:"card card-body"},r.a.createElement("img",{style:{display:"block",margin:"0 auto 10px",maxHeight:"200px"},className:"img-fluid",src:t.photo+"?v="+t.id,alt:""}),r.a.createElement("p",null,t.name),r.a.createElement("h3",{className:"text-left"},S(t.price)),r.a.createElement("div",{className:"text-right"},r.a.createElement(o.b,{to:"/",className:"btn btn-link btn-sm mr-2"},"Details"),m(t)&&r.a.createElement("button",{onClick:function(){return i(t)},className:"btn btn-outline-primary btn-sm"},"Add more"),!m(t)&&r.a.createElement("button",{onClick:function(){return c(t)},className:"btn btn-primary btn-sm"},"Add to cart")))},M=[{id:1,name:"Buffalo - Striploin",price:39.11,photo:"/hs-shopping-cart/img/1.jpg"},{id:2,name:"Bacardi Breezer - Tropical",price:257.92,photo:"/hs-shopping-cart/img/2.jpg"},{id:3,name:"Wine - Gato Negro Cabernet",price:51.01,photo:"/hs-shopping-cart/img/3.jpg"},{id:4,name:"Cabbage - Nappa",price:250.9,photo:"/hs-shopping-cart/img/4.jpg"},{id:5,name:"Sping Loaded Cup Dispenser",price:175.85,photo:"/hs-shopping-cart/img/5.jpg"},{id:6,name:"Bread - Malt",price:82.61,photo:"/hs-shopping-cart/img/6.jpg"},{id:7,name:"Glass Clear 8 Oz",price:201.1,photo:"/hs-shopping-cart/img/7.jpg"},{id:8,name:"Sour Puss Raspberry",price:134.99,photo:"/hs-shopping-cart/img/8.jpg"},{id:9,name:"Pork - Chop, Frenched",price:199.16,photo:"/hs-shopping-cart/img/9.jpg"},{id:10,name:"Bagels Poppyseed",price:"123.82",photo:"/hs-shopping-cart/img/10.jpg"}],T=Object(n.createContext)(),B=function(e){var t=e.children,a=Object(n.useState)(M),c=Object(m.a)(a,1)[0];return r.a.createElement(T.Provider,{value:{products:c}},t)},H=a(15),P=a.n(H),z=function(){var e=Object(n.useContext)(T).products;return r.a.createElement("div",{className:P.a.p__container},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"py-3"},e.length," Products")),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"",placeholder:"Search product",className:"form-control",id:""})))),r.a.createElement("div",{className:P.a.p__grid},e.map((function(e){return r.a.createElement(A,{key:e.id,product:e})}))),r.a.createElement("div",{className:P.a.p__footer}))},D=function(){return r.a.createElement(_,{title:"Store",description:"This is the Store page."},r.a.createElement("div",null,r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h1",null,"Store"),r.a.createElement("p",null,"This is the Stor page.")),r.a.createElement(z,null)))},q=function(){return r.a.createElement(_,{title:"About",description:"This is the About page"},r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This project was built for practice pruposes using",r.a.createElement("strong",null,"Context API")," by React."),r.a.createElement("a",{className:"btn btn-primary",href:"https://github.com/ohsky97"},r.a.createElement(C,{width:"18px"}),r.a.createElement("span",{className:"ml-2 mr-2"},"Visit My Git"))))},U=function(){return r.a.createElement(_,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"This is the 404 page.")))},V=function(e){var t=e.product,a=Object(n.useContext)(E),c=a.increase,l=a.decrease,o=a.removeProduct;return r.a.createElement("div",{className:"row no-gutters py-2"},r.a.createElement("div",{className:"col-sm-2 p-2"},r.a.createElement("img",{alt:t.name,style:{margin:"0 auto",maxHeight:"50px"},src:t.photo,className:"img-fluid d-block"})),r.a.createElement("div",{className:"col-sm-4 p-2"},r.a.createElement("h5",{className:"mb-1"},t.name),r.a.createElement("p",{className:"mb-1"},"Price: ",S(t.price)," ")),r.a.createElement("div",{className:"col-sm-2 p-2 text-center "},r.a.createElement("p",{className:"mb-0"},"Qty: ",t.quantity)),r.a.createElement("div",{className:"col-sm-4 p-2 text-right"},r.a.createElement("button",{onClick:function(){return c(t)},className:"btn btn-primary btn-sm mr-2 mb-1"},r.a.createElement(v,{width:"20px"})),t.quantity>1&&r.a.createElement("button",{onClick:function(){return l(t)},className:"btn btn-danger btn-sm mb-1"},r.a.createElement(f,{width:"20px"})),1===t.quantity&&r.a.createElement("button",{onClick:function(){return o(t)},className:"btn btn-danger btn-sm mb-1"},r.a.createElement(N,{width:"20px"}))))},G=function(){var e=Object(n.useContext)(E).cartItems;return r.a.createElement("div",null,r.a.createElement("div",{className:"card card-body border-0"},e.map((function(e){return r.a.createElement(V,{key:e.id,product:e})}))))},L=function(){var e=Object(n.useContext)(E),t=e.total,a=e.cartItems,c=e.itemCount,l=e.clearCart,i=e.checkout,m=e.handleCheckout;return r.a.createElement(_,{title:"Cart",description:"This is the Cart page"},r.a.createElement("div",null,r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h1",null,"Cart"),r.a.createElement("p",null,"This is the Cart Page.")),r.a.createElement("div",{className:"row no-gutters justify-content-center"},r.a.createElement("div",{className:"col-sm-9 p-3"},a.length>0?r.a.createElement(G,null):r.a.createElement("div",{className:"p-3 text-center text-muted"},"Your cart is empty"),i&&r.a.createElement("div",{className:"p-3 text-center text-success"},r.a.createElement("p",null,"Checkout successfull"),r.a.createElement(o.b,{to:"/",className:"btn btn-outline-success btn-sm"},"BUY MORE"))),a.length>0&&r.a.createElement("div",{className:"col-sm-3 p-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("p",{className:"mb-1"},"Total Items"),r.a.createElement("h4",{className:" mb-3 txt-right"},c),r.a.createElement("p",{className:"mb-1"},"Total Payment"),r.a.createElement("h3",{className:"m-0 txt-right"},S(t)),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-primary mb-2",onClick:m},"CHECKOUT"),r.a.createElement("button",{type:"button",className:"btn btn-outlineprimary btn-sm",onClick:l},"CLEAR")))))))},F=function(){return r.a.createElement(o.a,{basename:"/hs-shopping-cart"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/about",component:q}),r.a.createElement(i.a,{exact:!0,path:"/",component:D}),r.a.createElement(i.a,{path:"/cart",component:L}),r.a.createElement(i.a,{path:"*",component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R.b,null,r.a.createElement(B,null,r.a.createElement(g,null,r.a.createElement(F,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ec983ebe.chunk.js.map