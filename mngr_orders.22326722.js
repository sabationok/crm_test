!function(){function o(o){return o&&o.__esModule?o.default:o}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},c={},e=t.parcelRequired7c6;null==e&&((e=function(o){if(o in l)return l[o].exports;if(o in c){var t=c[o];delete c[o];var e={id:o,exports:{}};return l[o]=e,t.call(e.exports,e,e.exports),e.exports}var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(o,t){c[o]=t},t.parcelRequired7c6=e),e.register("cZ2Ha",(function(o,t){"use strict";Object.defineProperty(o.exports,"__esModule",{value:!0}),o.exports.default=function(o,t){if(null==o)return{};var l,c,e={},r=Object.keys(o);for(c=0;c<r.length;c++)l=r[c],t.indexOf(l)>=0||(e[l]=o[l]);return e}}));var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(o,t){if(null==o)return{};var l,c,e=n.default(o,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(c=0;c<r.length;c++)l=r[c],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(o,l)&&(e[l]=o[l])}return e};var d,n=(d=e("cZ2Ha"))&&d.__esModule?d:{default:d};var a=document.querySelector(".block.--orders ");console.log(a);var i=document.querySelector(".--orders .block__overflow");console.log(i);var s=document.querySelector(".table.--orders .tbody");console.log(s);var u=[{date:"01.05.2021",orderNum:"002025",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"02.05.2021",orderNum:"002425",ttnList:[46513215,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"06.05.2021",orderNum:"002225",ttnList:[456256123,123454132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"01.05.2021",orderNum:"005025",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"02.05.2021",orderNum:"002425",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"06.05.2021",orderNum:"002525",ttnList:[128456123,123454132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"01.05.2021",orderNum:"002025",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"02.05.2021",orderNum:"002425",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"06.05.2021",orderNum:"002225",ttnList:[128456123,123454132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"01.05.2021",orderNum:"002025",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"02.05.2021",orderNum:"002425",ttnList:[123456123,123456132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"},{date:"06.05.2021",orderNum:"002225",ttnList:[128456123,123454132],col4:"---",col5:"---",col6:"---",col7:"---",col8:"---",col9:"---",col10:"---"}].map((function(t,l,c){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=t.date,c=void 0===l?"---":l,e=t.orderNum,d=void 0===e?"---":e,n=t.ttnList,a=void 0===n?"---":n,i=t.col4,s=void 0===i?"---":i,u=t.col5,f=void 0===u?"---":u,v=t.col6,m=void 0===v?"---":v,p=t.col7,b=void 0===p?"---":p,g=t.col8,y=void 0===g?"---":g,L=t.col9,N=void 0===L?"---":L,O=t.col10,_=void 0===O?"---":O,j=(o(r)(t,["date","orderNum","ttnList","col4","col5","col6","col7","col8","col9","col10"]),a.join(", "));return'\n  <tr class="row">\n    <td class="col --1" data-tittle="date">'.concat(c,'</td>\n    <td class="col --2" data-tittle="orderNum">').concat(d,'</td>\n    <td class="col --3" data-tittle="ttnList">').concat(j,'</td>\n    <td class="col --4" data-tittle="">').concat(s,'</td>\n    <td class="col --5" data-tittle="">').concat(f,'</td>\n    <td class="col --6" data-tittle="">').concat(m,'</td>\n    <td class="col --7" data-tittle="">').concat(b,'</td>\n    <td class="col --8" data-tittle="">').concat(y,'</td>\n    <td class="col --9" data-tittle="">').concat(N,'</td>\n    <td class="col --10" data-tittle="">').concat(_,"</td>\n  </tr>")}(t)}));console.log(u),console.log(u.join("")),s.insertAdjacentHTML("afterbegin",u.join(""))}();
//# sourceMappingURL=mngr_orders.22326722.js.map