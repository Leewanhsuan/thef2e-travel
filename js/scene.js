!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=15)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o={default:"城市",Taipei:"臺北市",NewTaipei:"新北市",Taoyuan:"桃園市",Taichung:"臺中市",Tainan:"臺南市",Kaohsiung:"高雄市",Keelung:"基隆市",Hsinchu:"新竹市",HsinchuCounty:"新竹縣",MiaoliCounty:"苗栗縣",ChanghuaCounty:"彰化縣",NantouCounty:"南投縣",YunlinCounty:"雲林縣",ChiayiCounty:"嘉義縣",Chiayi:"嘉義市",PingtungCounty:"屏東縣",YilanCounty:"宜蘭縣",HualienCounty:"花蓮縣",TaitungCounty:"臺東縣",KinmenCounty:"金門縣",PenghuCounty:"澎湖縣",LienchiangCounty:"連江縣"},r={default:"類型","文化類":"文化類","觀光工廠類":"觀光工廠類","自然風景類":"自然風景類","生態類":"生態類","國家風景區類":"國家風景區類","遊憩類":"遊憩類","其他":"其他","廟宇類":"廟宇類","體育健身類":"體育健身類","林場類":"林場類","休閒農業類":"休閒農業類","溫泉類":"溫泉類","古蹟類":"古蹟類","特產類":"小吃/特產類","藝術類":"藝術類","森林遊樂區類":"森林遊樂區類","國家公園類":"國家公園類","都會公園類":"都會公園類"}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a}));var o="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?",r="https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/",a=function(){var t=(new Date).toGMTString(),e=new jsSHA("SHA-1","TEXT");return e.setHMACKey("i7UmCAqBwc6Bj9n1Jy6AHgMv6SI","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="2db62364b8cc45119ba7a9c97c74cfe0", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}}},function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return p}));var o=n(0),r=n(1);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(t){c=!0,r=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var c=function(){document.getElementById("result");var t=document.getElementById("citySelect"),e=document.getElementById("classSelect"),n=document.getElementById("search-input").value.trim().toLowerCase(),r=t.selectedIndex,a=Object.values(o.a)[r],i=e.selectedIndex;return[n,a,Object.keys(o.b)[i]]},l=function(){document.getElementById("result");document.getElementById("search-btn").addEventListener("click",(function(t){var e=a(c(),3),n=e[0],o=e[1],r=e[2];s(n,o,r)}))},s=function(t,e,n){var o=document.getElementById("result"),a=u(t,e,n);fetch("".concat(r.b).concat(a,"&$top=30&$format=JSON"),{headers:Object(r.c)()}).then((function(t){return t.json().then((function(e){return{status:t.status,body:e}}))})).then((function(t){200===t.status&&o&&(console.log(t.body),o.innerHTML="",t.body.forEach((function(t,e){var n,r,a,i,c,l={pictureUrl:null!==(n=null===(r=t.Picture)||void 0===r?void 0:r.PictureUrl1)&&void 0!==n?n:"./img/notfound001.jpeg",pictureDescription:null!==(a=null===(i=t.Picture)||void 0===i?void 0:i.PictureDescription1)&&void 0!==a?a:"目前該景點沒有照片",name:t.Name,index:e,city:null!==(c=t.City)&&void 0!==c?c:"台灣",id:t.ID,detail:t.DescriptionDetail,phone:t.Phone,openTime:t.OpenTime,website:t.WebsiteUrl};o.innerHTML+=d(l)})))}))},p=function(t){var e=document.getElementById("detailResult");console.log(e),console.log(t),fetch("".concat(r.b,"$filter=contains(ID%2C%20'").concat(t,"') &$format=JSON"),{headers:Object(r.c)()}).then((function(t){return t.json().then((function(e){return{status:t.status,body:e}}))})).then((function(t){200===t.status&&(console.log(t.body),t.body.forEach((function(t,n){var o,r,a,i,c={pictureUrl:null!==(o=null===(r=t.Picture)||void 0===r?void 0:r.PictureUrl1)&&void 0!==o?o:"./img/notfound001.jpeg",pictureDescription:null!==(a=null===(i=t.Picture)||void 0===i?void 0:i.PictureDescription1)&&void 0!==a?a:"目前該景點沒有照片",name:t.Name,index:n,city:t.City,id:t.ID,detail:t.DescriptionDetail,phone:t.Phone,openTime:t.OpenTime,website:t.WebsiteUrl};e.innerHTML+=f(c)})))}))},u=function(t,e,n){var o="contains(Name,'".concat(null!=t?t:"","')"),r="城市"===e?"":" and City eq '".concat(null!=e?e:"","'"),a="default"===n?"":" and (Class1 eq '".concat(null!=n?n:"","' or Class2 eq '").concat(null!=n?n:"","')");return"".concat("$filter=")+"".concat(o)+"".concat(r)+"".concat(a)},d=function(t){return'\n        <div class="result-card">\n            <a href="./detail.html?id='.concat(t.id,'" key="').concat(t.index,'" >\n                <img class="card-img" id="card-img" src="').concat(t.pictureUrl,'" alt="').concat(t.pictureDescription,'"/>\n            </a> \n            <div class="card-content">\n                <h6 class="card-text">').concat(t.name,'</h6>\n                <i class="fas fa-map-marker-alt"></i>\n                <span class="card-location">').concat(t.city,'</span>\n                <span class="card-like"><i class="fas fa-heart" ></i></span>\n            </div>\n        </div>\n    ')},f=function(t){return'\n        <span class="info-name">'.concat(t.name,'</span>\n            <div class="info-div">\n                <span class="info-location"><i class="fas fa-map-marker-alt"></i>').concat(t.city,'</span>\n                <span class="info-phone"><i class="fas fa-phone"></i><a href="tel:').concat(t.phone,'">').concat(t.phone,'</a></span>\n                <span class="info-time"><i class="fas fa-clock"></i>').concat(t.openTime,'</span>\n                <span class="info-url"><i class="fas fa-link"></i><a href="').concat(t.website,'">官方網站</a></span>\n                <p class="description-detail">\n                    ').concat(t.detail,'\n                </p>\n            <img class="img-div" src="').concat(t.pictureUrl,'" alt="').concat(t.pictureDescription,'" />\n    ')}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var o=n(0),r=function(){var t=document.getElementById("citySelect"),e=document.getElementById("classSelect");Object.values(o.a).forEach((function(e){t.innerHTML+='<option class="selectList" value="">'.concat(e,"</option>")})),Object.values(o.b).forEach((function(t){e.innerHTML+='<option class="selectList" value="">'.concat(t,"</option>")}))},a=function(){var t=document.getElementById("activitySelect");Object.values(o.a).forEach((function(e){t.innerHTML+='<option class="selectList" value="">'.concat(e,"</option>")}))}},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],r=0;r<t.length;r++){var a=t[r],l=e.base?a[0]+e.base:a[0],s=n[l]||0,p="".concat(l," ").concat(s);n[l]=s+1;var u=c(p),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(d)):i.push({identifier:p,updater:m(d,e),references:1}),o.push(p)}return o}function s(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var p,u=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function d(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,x=0;function m(t,e){var n,o,r;if(e.singleton){var a=x++;n=h||(h=s(e)),o=d.bind(null,n,a,!1),r=d.bind(null,n,a,!0)}else n=s(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=l(t,e),s=0;s<n.length;s++){var p=c(n[s]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}n=a}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(16);var o=n(3),r=n(2);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(t){c=!0,r=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}window.addEventListener("load",(function(){Object(o.b)(),Object(r.d)();var t=new URLSearchParams(window.location.search),e=Object.fromEntries(t);Object(r.a)(e.keyword,e.area,e.classFilter),document.getElementById("search-btn").addEventListener("click",(function(){var t=a(Object(r.c)(),3),e=t[0],n=t[1],o=t[2];window.location.href="./scene.html?keyword=".concat(e,"&area=").concat(n,"&classFilter=").concat(o)}))}))},function(t,e,n){var o=n(4),r=n(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);t.exports=r.locals||{}},function(t,e,n){(e=n(5)(!1)).push([t.i,".container{max-width:100vh;overflow-y:scroll;border:1px solid gray;scroll-snap-type:y mandatory}html{color:#000;background:#fff}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0}body{margin:0;padding:0;scroll-behavior:smooth}p{font-family:Noto Sans TC;color:#737373}input,textarea{outline:none;border:none}textarea{resize:none;overflow:auto}h2{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:600;font-size:48px;line-height:65px;color:#769763}@media (max-width: 576px){h2{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:600;font-size:40px;line-height:65px;color:#769763}}h4{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:48px;line-height:70px;letter-spacing:0.15em;color:#737373}@media (max-width: 576px){h4{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:28px;line-height:70px;letter-spacing:0.15em;color:#737373}}h6{position:absolute;width:216px;height:24px;font-family:Noto Sans TC;font-style:normal;font-weight:500;font-size:18px;letter-spacing:0.05em;color:#737373}.navbar-box{position:sticky;left:0%;right:0%;top:0%;height:98.85057067871094px;width:100%;border-radius:0px;background:rgba(255,255,255,0.9);border:1px solid #fafafa;box-sizing:border-box;box-shadow:0px 0.5px 0px rgba(196,196,196,0.3);z-index:5}@media (max-width: 576px){.navbar-box{float:none;position:sticky;left:0%;right:0%;top:0%;height:98.85057067871094px;width:600px;border-radius:0px;background:rgba(255,255,255,0.9);border:1px solid #fafafa;box-sizing:border-box;box-shadow:0px 0.5px 0px rgba(196,196,196,0.3);z-index:5}}.navbar-logo{position:absolute;height:62px;width:107px;left:5%;top:17px;border-radius:0px}@media (max-width: 576px){.navbar-logo{position:absolute;left:20%;right:20%;top:15%;bottom:14.67%}}.navbar-heart{color:#769763;position:absolute;right:5%;top:45px}@media (max-width: 576px){.navbar-heart{display:none}}.navbar-heart:hover{color:#f1d675}.navbar-link1{color:#737373;position:absolute;right:13%;top:30px;text-align:center;letter-spacing:0.2em}@media (max-width: 576px){.navbar-link1{display:none}}.navbar-link1:hover{color:#769763}.myMOUSE{cursor:pointer}.navbar-link2{position:absolute;right:25%;top:30px;text-align:center;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:16px;line-height:23px;text-align:center;letter-spacing:0.2em;color:#737373}@media (max-width: 576px){.navbar-link2{display:none}}.navbar-link2:hover{color:#769763}.navbar-link1-eng{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:10px;line-height:14px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:#737373;padding-bottom:5px;border-bottom:solid 3px #f1d675}.navbar-link2-eng{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:10px;line-height:14px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:#737373}.search-group{display:flex;width:600px;position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;top:20%;z-index:2}.city-select{appearance:none;display:flex;flex-direction:row;align-items:center;padding:0px 24px 0px 32px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px;border:none;flex:none;order:2;flex-grow:1;margin:0px 0px}@media (max-width: 576px){.city-select{appearance:none;position:absolute;width:280px;height:46px;left:47px;top:0px;border-radius:10px}}.class-select{appearance:none;display:flex;flex-direction:row;align-items:center;padding:10px 10px 10px 32px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px;border-left:1px gray;border-right:none;border-top:none;border-bottom:none;flex:none;order:2;flex-grow:1;margin:0px 0px}@media (max-width: 576px){.class-select{appearance:none;position:absolute;width:280px;height:46px;left:47px;top:50px;position:absolute;border-radius:10px}}.search-form{appearance:none;display:flex;flex-direction:row;align-items:center;padding:0px 24px 0px 32px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:5px 0px 0px 5px;border:none;flex:none;order:0;flex-grow:0;margin:0px 0px}.search-form input{height:4rem}@media (max-width: 576px){.search-form input{height:2rem}}@media (max-width: 576px){.search-form{appearance:none;position:absolute;width:180px;height:45px;left:47px;top:100px;border-radius:10px}}.search-btn{appearance:none;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;width:8rem;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px 5px 5px 0px;border:none;flex:none;order:5;flex-grow:0;margin:0px 0px;color:#769763;background-color:#f5f5f5}@media (max-width: 576px){.search-btn{appearance:none;width:50px;height:47px;position:absolute;left:280px;top:100px;border-radius:10px}}.search-btn:hover{color:#f1d675;background-color:#769763}.result-cards{grid-template-columns:repeat(auto-fill);grid-gap:20px;position:absolute;width:100%;left:8%;top:300px;display:flex;flex-wrap:wrap}@media (max-width: 576px){.result-cards{grid-template-columns:repeat(auto-fill);grid-gap:20px;position:absolute;width:100%;height:2000px;left:8%;top:380px;display:flex;flex-wrap:wrap}}.card-content{width:248px;height:80px;display:flex;flex-direction:column;justify-content:center}.result-card{display:grid;width:250px;height:300px;border:0.5px solid #c4c4c4;box-sizing:border-box;border-radius:5px;width:20%;position:relative}.result-card:hover{box-shadow:5px 5px 0px #f1d675}@media (max-width: 576px){.result-card{display:grid;width:250px;height:300px;border:0.5px solid #c4c4c4;box-sizing:border-box;border-radius:5px;width:80%;position:relative}}.card-img{object-fit:cover;aspect-ratio:248 / 168;width:100%;height:66%;border-radius:5px 5px 0px 0px;overflow-x:hidden}.card-text{position:absolute;bottom:10%;display:flex;flex-direction:column;justify-content:center;padding:20px}.card-location{position:absolute;bottom:15px;left:35px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.05em;color:#737373}.fa-map-marker-alt{color:#769763;position:absolute;bottom:17px;left:17px}.fa-heart{color:#769763}.fa-heart:hover{color:#f1d675}.card-like{position:absolute;bottom:17px;right:17px}.footer{position:absolute;top:2850px;width:1440px;height:70px;background-color:#769763;text-align:center}@media (max-width: 576px){.footer{display:none}}.footer-text{color:#fafafa;font-size:14px}@media (max-width: 576px){.footer-text{color:#fafafa;font-size:10px;position:absolute;left:17px}}\n",""]),t.exports=e}]);