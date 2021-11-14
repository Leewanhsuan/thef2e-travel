!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=6)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o={default:"城市",Taipei:"臺北市",NewTaipei:"新北市",Taoyuan:"桃園市",Taichung:"臺中市",Tainan:"臺南市",Kaohsiung:"高雄市",Keelung:"基隆市",Hsinchu:"新竹市",HsinchuCounty:"新竹縣",MiaoliCounty:"苗栗縣",ChanghuaCounty:"彰化縣",NantouCounty:"南投縣",YunlinCounty:"雲林縣",ChiayiCounty:"嘉義縣",Chiayi:"嘉義市",PingtungCounty:"屏東縣",YilanCounty:"宜蘭縣",HualienCounty:"花蓮縣",TaitungCounty:"臺東縣",KinmenCounty:"金門縣",PenghuCounty:"澎湖縣",LienchiangCounty:"連江縣"},i={default:"類型","文化類":"文化類","觀光工廠類":"觀光工廠類","自然風景類":"自然風景類","生態類":"生態類","國家風景區類":"國家風景區類","遊憩類":"遊憩類","其他":"其他","廟宇類":"廟宇類","體育健身類":"體育健身類","林場類":"林場類","休閒農業類":"休閒農業類","溫泉類":"溫泉類","古蹟類":"古蹟類","特產類":"小吃/特產類","藝術類":"藝術類","森林遊樂區類":"森林遊樂區類","國家公園類":"國家公園類","都會公園類":"都會公園類"}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return a}));var o="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?",i="https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/",a=function(){var t=(new Date).toGMTString(),e=new jsSHA("SHA-1","TEXT");return e.setHMACKey("i7UmCAqBwc6Bj9n1Jy6AHgMv6SI","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="2db62364b8cc45119ba7a9c97c74cfe0", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var o=n(0),i=function(){var t=document.getElementById("citySelect"),e=document.getElementById("classSelect");Object.values(o.a).forEach((function(e){t.innerHTML+='<option class="selectList" value="">'.concat(e,"</option>")})),Object.values(o.b).forEach((function(t){e.innerHTML+='<option class="selectList" value="">'.concat(t,"</option>")}))},a=function(){var t=document.getElementById("activitySelect");Object.values(o.a).forEach((function(e){t.innerHTML+='<option class="selectList" value="">'.concat(e,"</option>")}))}},function(t,e,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function c(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],i=0;i<t.length;i++){var a=t[i],l=e.base?a[0]+e.base:a[0],s=n[l]||0,p="".concat(l," ").concat(s);n[l]=s+1;var d=c(p),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(r[d].references++,r[d].updater(f)):r.push({identifier:p,updater:m(f,e),references:1}),o.push(p)}return o}function s(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var p,d=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function f(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function u(t,e,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var x=null,h=0;function m(t,e){var n,o,i;if(e.singleton){var a=h++;n=x||(x=s(e)),o=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=s(e),o=u.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=c(n[o]);r[i].references--}for(var a=l(t,e),s=0;s<n.length;s++){var p=c(n[s]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}n=a}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([i]).join("\n")}var r,c,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";n.r(e);n(7);var o=n(0),i=n(3),a=n(1);window.addEventListener("load",(function(){Object(i.a)(),document.getElementById("activity-search-btn").addEventListener("click",(function(e){var n=document.getElementById("activitySelect").selectedIndex,i=Object.keys(o.a)[n];console.log(i),t(i)}));var t=function(t){var n=document.getElementById("result-activity");fetch("".concat(a.a).concat(t,"?&$top=30&$format=JSON"),{headers:Object(a.c)()}).then((function(t){return t.json().then((function(e){return{status:t.status,body:e}}))})).then((function(t){200===t.status&&n&&(console.log(t.body),n.innerHTML="",t.body.forEach((function(t,o){var i,a,r,c,l={pictureUrl:null!==(i=null===(a=t.Picture)||void 0===a?void 0:a.PictureUrl1)&&void 0!==i?i:"./img/notfound002.jpeg",pictureDescription:null!==(r=null===(c=t.Picture)||void 0===c?void 0:c.PictureDescription1)&&void 0!==r?r:"目前該景點沒有照片",name:t.Name,location:t.Location,id:t.ID,startTime:t.StartTime.slice(0,10),endTime:t.EndTime.slice(0,10),website:t.WebsiteUrl};n.innerHTML+=e(l)})))}))},e=function(t){return'\n        <div class="result-card">\n                <img class="card-img" src="'.concat(t.pictureUrl,'" alt="').concat(t.pictureDescription,'" />\n                <div class="card-content">\n                    <h6 class="card-text">').concat(t.name,'</h6>\n                    <i class="fas fa-map-marker-alt"></i>\n                <span class="card-location">').concat(t.location,'</span>\n                <i class="far fa-calendar-alt"></i>\n                <span class="card-time">').concat(t.startTime,"<span>～</span>").concat(t.endTime,'</span>\n                <i class="fas fa-link"></i>\n                <span class="card-website"><a href="').concat(t.website,'">官方網站</a></span>\n                <span class="card-like"><i class="fas fa-heart"></i></span>\n                </div>\n            </div>\n    ')}}))},function(t,e,n){var o=n(4),i=n(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},function(t,e,n){(e=n(5)(!1)).push([t.i,".container{max-height:100vh;overflow-y:scroll;border:1px solid gray;scroll-snap-type:y mandatory}a{appearance:none;text-decoration:none;color:#737373}html{color:#000;background:#fff}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0}body{margin:0;padding:0;scroll-behavior:smooth}p{font-family:Noto Sans TC;color:#737373}input,textarea{outline:none;border:none}textarea{resize:none;overflow:auto}h2{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:600;font-size:48px;line-height:65px;color:#769763}@media (max-width: 576px){h2{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:600;font-size:40px;line-height:65px;color:#769763}}h4{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:48px;line-height:70px;letter-spacing:0.15em;color:#737373}@media (max-width: 576px){h4{margin:0px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:28px;line-height:70px;letter-spacing:0.15em;color:#737373}}h6{position:absolute;width:216px;height:24px;font-family:Noto Sans TC;font-style:normal;font-weight:500;font-size:18px;letter-spacing:0.05em;color:#737373}.navbar-box{position:sticky;left:0%;right:0%;top:0%;height:98.85057067871094px;width:1440px;border-radius:0px;background:rgba(255,255,255,0.9);border:1px solid #fafafa;box-sizing:border-box;box-shadow:0px 0.5px 0px rgba(196,196,196,0.3);z-index:5}@media (max-width: 576px){.navbar-box{float:none;position:sticky;left:0%;right:0%;top:0%;height:98.85057067871094px;width:600px;border-radius:0px;background:rgba(255,255,255,0.9);border:1px solid #fafafa;box-sizing:border-box;box-shadow:0px 0.5px 0px rgba(196,196,196,0.3);z-index:5}}.navbar-logo{position:absolute;height:62px;width:107px;left:5%;top:17px;border-radius:0px}@media (max-width: 576px){.navbar-logo{position:absolute;left:20%;right:20%;top:15%;bottom:14.67%}}.navbar-heart{color:#769763;position:absolute;right:5%;top:45px}@media (max-width: 576px){.navbar-heart{display:none}}.navbar-heart:hover{color:#f1d675}.navbar-link1{color:#737373;position:absolute;right:13%;top:30px;text-align:center;letter-spacing:0.2em}@media (max-width: 576px){.navbar-link1{display:none}}.navbar-link1:hover{color:#769763}.myMOUSE{cursor:pointer}.navbar-link2{position:absolute;right:25%;top:30px;text-align:center;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:16px;line-height:23px;text-align:center;letter-spacing:0.2em;color:#737373}@media (max-width: 576px){.navbar-link2{display:none}}.navbar-link2:hover{color:#769763}.navbar-link1-eng{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:10px;line-height:14px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:#737373}.navbar-link2-eng{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:10px;line-height:14px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:#737373;padding-bottom:5px;border-bottom:solid 3px #f1d675}.activity-search-group{justify-content:center;position:static;left:0px;top:0px;z-index:2}.activity-select{appearance:none;display:flex;flex-direction:row;align-items:center;padding:0px 24px 0px 32px;position:absolute;width:300px;height:66px;left:450px;top:150px;background:#ffffff;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px;border:none;flex:none;order:2;flex-grow:1;margin:0px 0px}@media (max-width: 576px){.activity-select{appearance:none;position:absolute;width:230px;height:46px;left:47px;top:150px;border-radius:10px}}.search-btn{appearance:none;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;position:absolute;width:160px;height:66px;left:750px;top:150px;box-shadow:0px 2px rgba(0,0,0,0.25);border-radius:0px 5px 5px 0px;border:none;flex:none;order:5;flex-grow:0;margin:0px 0px;color:#769763;background-color:#f5f5f5}@media (max-width: 576px){.search-btn{appearance:none;width:50px;height:47px;position:absolute;left:280px;top:150px;border-radius:10px}}.search-btn:hover{color:#f1d675;background-color:#769763}.result-cards{grid-template-columns:repeat(auto-fill);grid-gap:25px;position:absolute;width:100%;left:8%;top:300px;display:flex;flex-wrap:wrap}@media (max-width: 576px){.result-cards{grid-template-columns:repeat(auto-fill);grid-gap:20px;position:absolute;width:100%;height:2000px;left:8%;top:300px;display:flex;flex-wrap:wrap}}.card-content{width:248px;height:80px;display:flex;flex-direction:column;justify-content:center}.result-card{display:grid;width:250px;height:350px;border:0.5px solid #c4c4c4;box-sizing:border-box;border-radius:5px;width:20%;position:relative}@media (max-width: 576px){.result-card{display:grid;width:250px;height:350px;border:0.5px solid #c4c4c4;box-sizing:border-box;border-radius:5px;width:80%;position:relative}}.card-img{width:100%;height:66%;border-radius:5px 5px 0px 0px;aspect-ratio:248 / 168;object-fit:cover;overflow-x:hidden}.card-text{position:absolute;top:100px;display:flex;flex-direction:column;justify-content:center;top:160px;right:0;bottom:0;left:0;padding:20px}.card-location{position:absolute;bottom:73px;left:45px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.05em;color:#737373}.card-website{position:absolute;bottom:17px;left:45px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.05em;color:#737373}.card-time{position:absolute;bottom:42px;left:45px;font-family:Noto Sans TC;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.05em;color:#737373}.fa-link{color:#769763;position:absolute;bottom:17px;left:17px}.fa-map-marker-alt{color:#769763;position:absolute;bottom:75px;left:17px}.fa-calendar-alt{color:#769763;position:absolute;bottom:45px;left:17px}.fa-heart{color:#769763}.fa-heart:hover{color:#f1d675}.card-like{position:absolute;bottom:17px;right:17px}.footer{position:absolute;top:2850px;width:1440px;height:70px;background-color:#769763;text-align:center}@media (max-width: 576px){.footer{display:none}}.footer-text{color:#fafafa;font-size:14px}@media (max-width: 576px){.footer-text{color:#fafafa;font-size:10px;position:absolute;left:17px}}\n",""]),t.exports=e}]);