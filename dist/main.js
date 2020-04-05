!function(e){var a={};function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)n.d(t,r,function(a){return e[a]}.bind(null,r));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="",n(n.s=0)}([function(e,a,n){"use strict";n.r(a);var t=function(e,a,n){var t=document.createElement(e);return t.innerHTML=a,t.setAttribute("class",n),t},r=document.querySelector(".content"),c=function(){r.appendChild(t("main",'\n    <div class="title">\n        <h1 class="f1 h1">The Red\'s Bistro</h1>\n    </div>\n  \n    <div class="description-div">\n        <h2 class="description-h2">Modern cuisine bistro</h2>\n        <h3 class="description-h3">Best quality and best atmosphere</h3>\n    </div>\n  ',"main"))},s=function(){r.appendChild(t("div",'\n      <h2 class="menu-title">The Menu</h2>\n      <div class="card-deck">\n          <div class="card text-white bg-dark mb-3 bistro-card">\n              <img src="./img/american-breakfast.jpg" class="card-img-top card-image" alt="...">\n              <div class="card-body">\n              <h5 class="card-title">American Breakfast</h5>\n              <p class="card-text">Coffe or orange juice served over easy eggs, bacon, hash browns, toasted bread</p>\n              <p class="card-text"><small class="text-muted">Price: $15.99</small></p>\n              </div>\n          </div>\n          <div class="card text-white bg-dark mb-3 bistro-card">\n              <img src="./img/lunch-special.jpg" class="card-img-top card-image" alt="...">\n              <div class="card-body">\n              <h5 class="card-title">Burger Lunch Special</h5>\n              <p class="card-text">Premium cheese burger, choice of salad and french fries.</p>\n              <p class="card-text"><small class="text-muted">Price: $16.99</small></p>\n              </div>\n          </div>\n          <div class="card text-white bg-dark mb-3 bistro-card">\n              <img src="./img/lobster-dinner.jpg" class="card-img-top card-image" alt="...">\n              <div class="card-body">\n              <h5 class="card-title">Lobster Dinner</h5>\n              <p class="card-text">Parmesan crusted lobster, served rice and lemon garlic butter sauce.</p>\n              <p class="card-text"><small class="text-muted">Price: $30.99</small></p>\n              </div>\n          </div>\n      </div>\n      \x3c!-- Coffee menu --\x3e\n      <div class="card-deck">\n              <div class="card text-white bg-dark mb-3 bistro-card">\n                  <img src="./img/cappuccino.jpg" class="card-img-top card-image" alt="...">\n                  <div class="card-body">\n                  <h5 class="card-title">Cappuccino</h5>\n                  <p class="card-text">Italian Cappuccino made with premium whole milk, Lavazza coffee topped with cinnamon</p>\n                  <p class="card-text"><small class="text-muted">Price: $7.99</small></p>\n                  </div>\n              </div>\n              <div class="card text-white bg-dark mb-3 bistro-card">\n                  <img src="./img/Latte.jpg" class="card-img-top card-image" alt="...">\n                  <div class="card-body">\n                  <h5 class="card-title">Latte</h5>\n                  <p class="card-text">Italian Latte made with almond milk, Colombian coffee and topped with cinnamon.</p>\n                  <p class="card-text"><small class="text-muted">Price: $8.99</small></p>\n                  </div>\n              </div>\n              <div class="card text-white bg-dark mb-3 bistro-card">\n                  <img src="./img/cheesecake.jpg" class="card-img-top card-image" alt="...">\n                  <div class="card-body">\n                  <h5 class="card-title">Cheesecake</h5>\n                  <p class="card-text">New York style cheesecake.</p>\n                  <p class="card-text"><small class="text-muted">Price: $7.99</small></p>\n                  </div>\n              </div>\n              \n          </div>\n  ',"container"))};var l=function(){document.body.appendChild(t("nav",'\n      <div class="d-flex w-50 order-0">\n          <a class="navbar-brand mr-1 nav-link" id="logo">Red\'s Bistro</a>\n          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">\n              <span class="navbar-toggler-icon"></span>\n          </button>\n      </div>\n      <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">\n          <ul class="navbar-nav">\n              <li class="nav-item">\n                <a class="nav-link" id="home">Home</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" id="menu">Menu</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" id="contact">contact</a>\n              </li>\n          </ul>\n      </div>\n      <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>\n    ',"navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom down-nav"))};window.addEventListener("DOMContentLoad",(l(),void c()));var i=document.querySelector("#home"),d=document.querySelector("#menu"),o=document.querySelector("#contact"),m=document.querySelector("#logo"),u=function(e){e.srcElement===i||e.srcElement===m?(r.innerHTML="",c()):e.srcElement===d?s():(r.innerHTML="",r.appendChild(t("div",'\n            <form class="form">\n                <h2 class="form-title">Contact us</h2>\n\n                <div class="form-group">\n                    <label for="exampleInputEmail1">Full name</label>\n                    <input type="text" class="form-control" placeholder="Enter your name">\n                </div>\n                <div class="form-group">\n                    <label for="email-input">Email</label>\n                    <input type="email" class="form-control" id="email-input" placeholder="Enter your email">\n                </div>\n                <div class="form-group">\n                    <label for="message">Your message</label>\n                    <textarea class="form-control" id="message" rows="3"></textarea>\n                </div>\n                <button type="submit" class="btn btn-dark">Contact us</button>\n            </form>\n    ',"container form-container")))};i.addEventListener("click",u),d.addEventListener("click",u),o.addEventListener("click",u),m.addEventListener("click",u)}]);