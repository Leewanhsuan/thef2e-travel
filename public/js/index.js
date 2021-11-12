!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=12)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o={default:"城市",Taipei:"臺北市",NewTaipei:"新北市",Taoyuan:"桃園市",Taichung:"臺中市",Tainan:"臺南市",Kaohsiung:"高雄市",Keelung:"基隆市",Hsinchu:"新竹市",HsinchuCounty:"新竹縣",MiaoliCounty:"苗栗縣",ChanghuaCounty:"彰化縣",NantouCounty:"南投縣",YunlinCounty:"雲林縣",ChiayiCounty:"嘉義縣",Chiayi:"嘉義市",PingtungCounty:"屏東縣",YilanCounty:"宜蘭縣",HualienCounty:"花蓮縣",TaitungCounty:"臺東縣",KinmenCounty:"金門縣",PenghuCounty:"澎湖縣",LienchiangCounty:"連江縣"},i={default:"類型","文化類":"文化類","觀光工廠類":"觀光工廠類","自然風景類":"自然風景類","生態類":"生態類","國家風景區類":"國家風景區類","遊憩類":"遊憩類","其他":"其他","廟宇類":"廟宇類","體育健身類":"體育健身類","林場類":"林場類","休閒農業類":"休閒農業類","溫泉類":"溫泉類","古蹟類":"古蹟類","特產類":"小吃/特產類","藝術類":"藝術類","森林遊樂區類":"森林遊樂區類","國家公園類":"國家公園類","都會公園類":"都會公園類"}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r}));var o="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?",i="https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/",r=function(){var t=(new Date).toGMTString(),e=new jsSHA("SHA-1","TEXT");return e.setHMACKey("i7UmCAqBwc6Bj9n1Jy6AHgMv6SI","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="2db62364b8cc45119ba7a9c97c74cfe0", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}}},function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return p})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return s}));var o=n(0),i=n(1);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,i,r=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(t){c=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var c=function(){document.getElementById("result");var t=document.getElementById("citySelect"),e=document.getElementById("classSelect"),n=document.getElementById("search-input").value.trim().toLowerCase(),i=t.selectedIndex,r=Object.values(o.a)[i],a=e.selectedIndex;return[n,r,Object.keys(o.b)[a]]},p=function(){document.getElementById("result");document.getElementById("search-btn").addEventListener("click",(function(t){var e=r(c(),3),n=e[0],o=e[1],i=e[2];l(n,o,i)}))},l=function(t,e,n){var o=document.getElementById("result"),r=d(t,e,n);fetch("".concat(i.b).concat(r,"&$top=30&$format=JSON"),{headers:Object(i.c)()}).then((function(t){return t.json().then((function(e){return{status:t.status,body:e}}))})).then((function(t){200===t.status&&o&&(console.log(t.body),o.innerHTML="",t.body.forEach((function(t,e){var n,i,r,a,c={pictureUrl:null!==(n=null===(i=t.Picture)||void 0===i?void 0:i.PictureUrl1)&&void 0!==n?n:"./img/notfound001.jpeg",pictureDescription:null!==(r=null===(a=t.Picture)||void 0===a?void 0:a.PictureDescription1)&&void 0!==r?r:"目前該景點沒有照片",name:t.Name,index:e,city:t.City,id:t.ID,detail:t.DescriptionDetail,phone:t.Phone,openTime:t.OpenTime,website:t.WebsiteUrl};o.innerHTML+=f(c)})))}))},s=function(t){var e=document.getElementById("detailResult");console.log(e),console.log(t),fetch("".concat(i.b,"$filter=contains(ID%2C%20'").concat(t,"') &$format=JSON"),{headers:Object(i.c)()}).then((function(t){return t.json().then((function(e){return{status:t.status,body:e}}))})).then((function(t){200===t.status&&(console.log(t.body),t.body.forEach((function(t,n){var o,i,r,a,c={pictureUrl:null!==(o=null===(i=t.Picture)||void 0===i?void 0:i.PictureUrl1)&&void 0!==o?o:"./img/notfound001.jpeg",pictureDescription:null!==(r=null===(a=t.Picture)||void 0===a?void 0:a.PictureDescription1)&&void 0!==r?r:"目前該景點沒有照片",name:t.Name,index:n,city:t.City,id:t.ID,detail:t.DescriptionDetail,phone:t.Phone,openTime:t.OpenTime,website:t.WebsiteUrl};e.innerHTML+=u(c)})))}))},d=function(t,e,n){var o="contains(Name,'".concat(null!=t?t:"","')"),i="城市"===e?"":" and City eq '".concat(null!=e?e:"","'"),r="default"===n?"":" and (Class1 eq '".concat(null!=n?n:"","' or Class2 eq '").concat(null!=n?n:"","')");return"".concat("$filter=")+"".concat(o)+"".concat(i)+"".concat(r)},f=function(t){return'\n        <div class="result-card">\n            <a href="http://0.0.0.0:8080/detail.html?id='.concat(t.id,'" key="').concat(t.index,'" >\n                <img class="card-img" id="card-img" src="').concat(t.pictureUrl,'" alt="').concat(t.pictureDescription,'"/>\n            </a> \n            <div class="card-content">\n                <h6 class="card-text">').concat(t.name,'</h6>\n                <i class="fas fa-map-marker-alt"></i>\n                <span class="card-location">').concat(t.city,'</span>\n                <span class="card-like"><i class="fas fa-heart" ></i></span>\n            </div>\n        </div>\n    ')},u=function(t){return'\n        <span class="info-name">'.concat(t.name,'</span>\n            <div class="info-div">\n                <span class="info-location"><i class="fas fa-map-marker-alt"></i>').concat(t.city,'</span>\n                <span class="info-phone"><i class="fas fa-phone"></i><a href="tel:').concat(t.phone,'">').concat(t.phone,'</a></span>\n                <span class="info-time"><i class="fas fa-clock"></i>').concat(t.openTime,'</span>\n                <span class="info-url"><i class="fas fa-link"></i><a href="').concat(t.website,'">官方網站</a></span>\n                <p class="description-detail">\n                    ').concat(t.detail,'\n                </p>\n            <img class="img-div" src="').concat(t.pictureUrl,'" alt="').concat(t.pictureDescription,'" />\n    ')}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var o=n(0),i=function(){var t=document.getElementById("citySelect"),e=document.getElementById("classSelect");Object.values(o.a).forEach((function(e){t.innerHTML+='<option class="selectList" value="">'.concat(e,"</option>")})),Object.values(o.b).forEach((function(t){e.innerHTML+='<option class="selectList" value="">'.concat(t,"</option>")}))},r=function(){var t=document.getElementById("activitySelect");Object.values(o.a).forEach((function(e){t.innerHTML+='<option class="selectList" value="">'.concat(e,"</option>")}))}},function(t,e,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function p(t,e){for(var n={},o=[],i=0;i<t.length;i++){var r=t[i],p=e.base?r[0]+e.base:r[0],l=n[p]||0,s="".concat(p," ").concat(l);n[p]=l+1;var d=c(s),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:b(f,e),references:1}),o.push(s)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function u(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var x=null,h=0;function b(t,e){var n,o,i;if(e.singleton){var r=h++;n=x||(x=l(e)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=l(e),o=u.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=p(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=p(t,e),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=r}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(p," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([i]).join("\n")}var a,c,p;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);o&&i[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),e.push(p))}},e}},,,,,,,function(t,e,n){"use strict";n.r(e);n(13),n(0),n(1);var o=n(3),i=n(2);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,i,r=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(t){c=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}window.addEventListener("load",(function(){Object(o.b)();var t=r(Object(i.c)(),3);t[0],t[1],t[2];Object(i.d)(Object(i.c)()),document.getElementById("search-btn").addEventListener("click",(function(){var t=r(Object(i.c)(),3),e=t[0],n=t[1],o=t[2];window.location.href="http://0.0.0.0:8080/scene.html?keyword=".concat(e,"&area=").concat(n,"&classFilter=").concat(o)}))}))},function(t,e,n){var o=n(4),i=n(14);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},function(t,e,n){(e=n(5)(!1)).push([t.i,'p{font-family:Noto Sans TC;color:#737373}.container{max-height:100vh;overflow-y:scroll;border:1px solid gray;scroll-snap-type:y mandatory}body{margin:0;padding:0;scroll-behavior:smooth}input,textarea{outline:none;border:none}textarea{resize:none;overflow:auto}h2{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:600;font-size:48px;line-height:65px;color:#769763}@media (max-width: 576px){h2{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:600;font-size:40px;line-height:65px;color:#769763}}h4{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:48px;line-height:70px;letter-spacing:0.15em;color:#737373}@media (max-width: 576px){h4{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:28px;line-height:70px;letter-spacing:0.15em;color:#737373}}.navbar-box{position:sticky;left:0%;right:0%;top:0%;height:98.85057067871094px;width:1440px;border-radius:0px;background:rgba(255,255,255,0.9);border:1px solid #fafafa;box-sizing:border-box;box-shadow:0px 0.5px 0px rgba(196,196,196,0.3);z-index:5}@media (max-width: 576px){.navbar-box{float:none;position:sticky;left:0%;right:0%;top:0%;height:98.85057067871094px;width:600px;border-radius:0px;background:rgba(255,255,255,0.9);border:1px solid #fafafa;box-sizing:border-box;box-shadow:0px 0.5px 0px rgba(196,196,196,0.3);z-index:5}}.navbar-logo{position:absolute;height:62px;width:107px;left:5%;top:17px;border-radius:0px}@media (max-width: 576px){.navbar-logo{position:absolute;height:41px;width:75px;left:5%;right:20%;top:20%;bottom:14.67%}}.navbar-heart{color:#769763;position:absolute;right:5%;top:45px}@media (max-width: 576px){.navbar-heart{display:none}}.navbar-heart:hover{color:#f1d675}.navbar-link1{color:#737373;position:absolute;right:13%;top:30px;text-align:center;letter-spacing:0.2em}@media (max-width: 576px){.navbar-link1{position:absolute;left:-180px;top:25%}}.navbar-link1:hover{color:#769763}.myMOUSE{cursor:pointer}.navbar-link2{position:absolute;right:25%;top:30px;text-align:center;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:16px;line-height:23px;text-align:center;letter-spacing:0.2em;color:#737373}@media (max-width: 576px){.navbar-link2{position:absolute;left:150px;top:24%}}.navbar-link2:hover{color:#769763}.navbar-link1-eng{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:10px;line-height:14px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:#737373}.navbar-link1-eng:hover{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:10px;line-height:14px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:#737373;padding-bottom:5px;border-bottom:solid 3px #f1d675}.background{background:url("/img/banner.jpg") no-repeat center;background-size:cover;position:absolute;left:0px;right:0px;top:0px;box-shadow:0px 2px 6px rgba(0,0,0,0.14);z-index:0}.index-banner{height:800px;width:1440px}@media (max-width: 576px){.index-banner{height:520px}}.search-group{justify-content:center;position:static;left:0px;top:0px;z-index:2}.searchDivider1{border-left:1px solid #38546d;height:45px;position:absolute;left:780px;top:390px;z-index:4}.searchDivider2{border-left:1px solid #38546d;height:45px;position:absolute;left:630px;top:390px}@media (max-width: 576px){.searchDivider1{display:none}.searchDivider2{display:none}}.city-select{appearance:none;display:flex;flex-direction:row;align-items:center;padding:0px 24px 0px 32px;position:absolute;width:150px;height:66px;left:630px;top:380px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px;border:none;flex:none;order:2;flex-grow:1;margin:0px 0px}@media (max-width: 576px){.city-select{appearance:none;position:absolute;width:280px;height:46px;left:47px;top:350px;border-radius:10px}}.class-select{appearance:none;display:flex;flex-direction:row;align-items:center;padding:10px 10px 10px 32px;position:absolute;width:150px;height:66px;left:780px;top:380px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px;border:none;flex:none;order:2;flex-grow:1;margin:0px 0px}@media (max-width: 576px){.class-select{appearance:none;position:absolute;width:280px;height:46px;left:47px;top:400px;position:absolute;border-radius:10px}}.search-form{appearance:none;display:flex;flex-direction:row;align-items:center;padding:0px 24px 0px 32px;position:absolute;width:224px;height:66px;left:350px;top:380px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:5px 0px 0px 5px;border:none;flex:none;order:0;flex-grow:0;margin:0px 0px}@media (max-width: 576px){.search-form{appearance:none;position:absolute;width:180px;height:46px;left:47px;top:450px;border-radius:10px}}.search-btn{appearance:none;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;position:absolute;width:160px;height:66px;right:350px;top:380px;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px 5px 5px 0px;border:none;flex:none;order:5;flex-grow:0;margin:0px 0px;color:#769763;background-color:#f5f5f5}@media (max-width: 576px){.search-btn{appearance:none;width:50px;height:47px;position:absolute;left:280px;top:450px;border-radius:10px}}.search-btn:hover{color:#f1d675;background-color:#769763}.city-text-div{display:flex;width:500px;height:200px;position:absolute;top:100px;left:200px;flex-direction:column}@media (max-width: 576px){.city-text-div{display:flex;width:500px;height:200px;position:absolute;top:100px;left:17px;flex-direction:column}}.city-text-div2{display:flex;width:528px;height:150px;position:absolute;top:100px;right:200px;flex-direction:column}@media (max-width: 576px){.city-text-div2{display:flex;width:300px;height:150px;position:absolute;top:220px;left:17px;flex-direction:column}}.city-div-btn{appearance:none;width:170px;height:32px;padding:4px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4px 24px;position:absolute;right:0px;top:130px;border:0.5px solid #737373;background-color:#ffffff;box-sizing:border-box;border-radius:50px;color:#737373}@media (max-width: 576px){.city-div-btn{left:17px;top:170px}}.city-div-btn:hover{border:0.5px solid #769763;background-color:#769763;color:#ffffff}.city-bar-cointaner{display:flex;flex-direction:row;flex-wrap:nowrap;margin-top:300px;margin-bottom:80px;overflow-x:hidden;justify-content:center}@media (max-width: 576px){.city-bar-cointaner{position:absolute;display:flex;flex-direction:row;flex-wrap:nowrap;padding-top:200px;overflow-x:auto;justify-content:center}}.city-div-title{text-align:left}.city-div-subtitle{text-align:left}.city-div-text{text-align:left;color:#737373}.city-bar-img{opacity:1;width:200px;height:300px;border-radius:18px;padding:15px;z-index:0}@media (max-width: 576px){.city-bar-img{opacity:1;width:100px;height:150px;border-radius:18px;padding:15px;z-index:0}}.city-bar-img:hover{margin-top:10px}.hover-text{font-family:Noto Sans TC;font-style:normal;font-weight:bold;font-size:22px;line-height:140%;text-align:center}.city-div{position:absolute;top:900px;left:0px;width:1440px;height:740px}@media (max-width: 576px){.city-div{position:absolute;top:600px;left:0px;height:450px}}.activities-div{position:absolute;top:1600px;width:1440px;height:740px;background-color:#fafafa}@media (max-width: 576px){.activities-div{position:absolute;top:1300px;height:450px;background-color:#fafafa}}.activities-text-div{width:500px;position:absolute;right:200px;top:200px}@media (max-width: 576px){.activities-text-div{width:300px;position:absolute;left:17px;top:50px}}.activities-div-text{color:#737373}.activities-img{left:0px;margin-top:150px;border-radius:0px 5px 5px 0px;width:700px;height:466px}@media (max-width: 576px){.activities-img{left:0px;margin-top:150px;border-radius:0px 5px 5px 0px;width:350px;height:233px;position:absolute;top:250px}}.activities-div-btn{appearance:none;width:170px;height:32px;padding:4px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4px 24px;position:absolute;right:0px;top:250px;border:0.5px solid #737373;background-color:#ffffff;box-sizing:border-box;border-radius:50px;color:#737373}@media (max-width: 576px){.activities-div-btn{position:absolute;left:17px;top:300px}}.activities-div-btn:hover{border:0.5px solid #769763;background-color:#769763;color:#ffffff}.bike-div{position:absolute;height:388px;left:0px;right:0px;top:2240px;background:#ffffff}@media (max-width: 576px){.bike-div{position:absolute;height:200px;left:0px;top:2000px;background:#ffffff}}.bike-text-div{margin-top:180px;text-align:center;flex-direction:column;justify-content:center}@media (max-width: 576px){.bike-text-div{margin-top:0px;text-align:center;flex-direction:column;justify-content:center}}.bike-div-btn{appearance:none;width:170px;height:32px;padding:4px;margin-top:25px;display:flex;justify-content:center;align-items:center;padding:4px 24px;position:absolute;left:630px;border:0.5px solid #737373;background-color:#ffffff;box-sizing:border-box;border-radius:50px;color:#737373}.bike-div-btn:hover{border:0.5px solid #769763;background-color:#769763;color:#ffffff}.bike-div-tex{appearance:none;color:#737373}.footer{position:absolute;top:2850px;width:1440px;height:70px;background-color:#769763;text-align:center}@media (max-width: 576px){.footer{position:absolute;left:0px;top:2250px;width:500px;height:70px;background-color:#769763;text-align:left;color:#fafafa}}.footer-text{color:#fafafa;font-size:14px}@media (max-width: 576px){.footer-text{color:#fafafa;font-size:10px;position:absolute;left:17px}}\n',""]),t.exports=e}]);