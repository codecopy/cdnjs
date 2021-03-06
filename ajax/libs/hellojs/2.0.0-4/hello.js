/*! hellojs v2.0.0-4 | (c) 2012-2017 Andrew Dodson | MIT https://adodson.com/hello.js/LICENSE */!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).hello=e()}}(function(){return function e(t,n,r){function o(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";t.exports=function(e,t){return t.filter(function(t){return-1===e.indexOf(t)})}},{}],2:[function(e,t,n){"use strict";t.exports=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=0;r<e.length;r++){var o=t.call(n,e[r]);if(void 0!==o)return!0===o?e[r]:o}}},{}],3:[function(e,t,n){"use strict";t.exports=function(e){return Array.prototype.slice.call(e)}},{}],4:[function(e,t,n){"use strict";t.exports=function(e){return Array.isArray(e)?e.filter(function(t,n){return e.indexOf(t)===n}):[]}},{}],5:[function(e,t,n){"use strict";function r(e){return this.native=e,s(this.api.bind(this),this)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=e(39),s=e(28);t.exports=r,r.prototype.api=function(e,t){if("object"===(void 0===e?"undefined":o(e)))for(var n in e)this.api(n,e[n]);else{if(!e)throw"agent/store must have a valid name";if(void 0===t)return this.getItem(e);null===t?this.removeItem(e):this.setItem(e,t)}},r.prototype.getItem=function(e){return i(this.native.getItem(e))},r.prototype.setItem=function(e,t){this.native.setItem(e,JSON.stringify(t))},r.prototype.removeItem=function(e){this.native.removeItem(e)}},{28:28,39:39}],6:[function(e,t,n){"use strict";var r=e(2),o=e(5);t.exports=new o({getItem:function(e){var t=e+"=",n=document.cookie.split(";");return r(n,function(e){if((e=e.replace(/(^\s+|\s+$)/,""))&&0===e.indexOf(t))return e.substr(t.length)})||null},setItem:function(e,t){document.cookie=e+"="+t},removeItem:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}})},{2:2,5:5}],7:[function(e,t,n){"use strict";var r=e(8),o=e(5);try{var i="__tricks_temp__",s=window.localStorage;s.setItem(i,1),s.removeItem(i),t.exports=new o(s)}catch(e){t.exports=r}},{5:5,8:8}],8:[function(e,t,n){"use strict";var r=e(6),o=e(5);try{var i="__tricks_temp__",s=window.sessionStorage;s.setItem(i,1),s.removeItem(i),t.exports=new o(s)}catch(e){t.exports=r}},{5:5,6:6}],9:[function(e,t,n){"use strict";function r(e){var t=void 0;try{t=a('<iframe name="'+e+'">')}catch(e){t=a("iframe")}return s(t,{name:e,id:e,style:"display:none;"}),document.body.appendChild(t),t}function o(e){var t=null,n=[],r=0,o=null;if(u("input",e)&&(t=e.form,f(t.elements).forEach(function(t){t!==e&&t.setAttribute("disabled",!0)}),e=t),u("form",e))f((t=e).elements).forEach(function(e){e.disabled||"file"!==e.type||(t.encoding=t.enctype="multipart/form-data",e.setAttribute("name","file"))});else{for(o in e)e.hasOwnProperty(o)&&u("input",e[o])&&"file"===e[o].type&&((t=e[o].form).encoding=t.enctype="multipart/form-data");t?l(t,"submit",function(){h(function(){n.forEach(function(e){e&&(e.setAttribute("disabled",!1),e.disabled=!1)}),n.length=0})}):(t=i("form"),l(t,"submit",function(){h(function(){t.parentNode.removeChild(t)})}));var s=void 0;for(o in e)if(e.hasOwnProperty(o)){var a=u("input",e[o])||u("textArea",e[o])||u("select",e[o]);if(a&&e[o].form===t)a&&e[o].name!==o&&(e[o].setAttribute("name",o),e[o].name=o);else{var c=t.elements[o];if(s)for(p(c,window.NodeList)||(c=[c]),r=0;r<c.length;r++)c[r].parentNode.removeChild(c[r]);s=i("input",{type:"hidden",name:o},t),a?s.value=e[o].value:u(null,e[o])?s.value=e[o].innerHTML||e[o].innerText:s.value=e[o]}}f(t.elements).forEach(function(t){t.name in e||!0===t.getAttribute("disabled")||(t.setAttribute("disabled",!0),n.push(t))})}return t}var i=e(14),s=e(15),u=e(17),a=e(16),c=e(23),f=e(3),p=e(29),l=e(24),d=e(22),h=e(45);t.exports=function(e,t,n,i,u){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:6e4,f=void 0,p=0,l=function(e){return p++||(f&&(clearTimeout(f),f=null),i(e),d(v,"submit"),h(function(){return y.parentNode.removeChild(y)})),!0},y=r(u=c(l,u));n&&n.callbackonload&&(y.onload=l.bind(null,{response:"posted",message:"Content was posted"})),a&&(f=setTimeout(l.bind(null,new Error("timeout")),a));var v=o(t);e=e.replace(new RegExp("=\\?(&|$)"),"="+u+"$1"),s(v,{method:"POST",target:u,action:e}),v.target=u,setTimeout(function(){v.submit()},100)}},{14:14,15:15,16:16,17:17,22:22,23:23,24:24,29:29,3:3,45:45}],10:[function(e,t,n){"use strict";var r=e(16),o=e(21);t.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0,s=void 0,u=document.getElementsByTagName("script")[0].parentNode,a=function(e){!i++&&t&&t(e),s&&clearTimeout(s)};n&&(s=window.setTimeout(function(){a(o("timeout"))},n));var c=r("script",{src:e,onerror:a,onload:a,onreadystatechange:function(){/loaded|complete/i.test(c.readyState)&&a(o("load"))}});return c.async=!0,u.insertBefore(c,u.firstChild),c}},{16:16,21:21}],11:[function(e,t,n){"use strict";var r=e(23),o=e(10),i=/=\?(&|$)/;t.exports=function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6e4,u=void 0;n=r(function(e){return u=e,!0},n),e=e.replace(i,"="+n+"$1");var a=o(e,function(){t(u),a.parentNode.removeChild(a)},s);return a}},{10:10,23:23}],12:[function(e,t,n){"use strict";var r=e(11),o=e(13),i=e(9),s=e(44),u=e(23),a=e(37),c=e(28);t.exports=function(e,t){if("string"==typeof e&&(e={url:e}),e.url=e.url||e.uri,e.query=e.query||e.qs||{},e.method=(e.method||"get").toLowerCase(),e.proxyHandler=e.proxyHandler||function(e,t){t()},s&&("function"==typeof e.xhr?e.xhr(e,e.query):!1!==e.xhr))e.proxyHandler(e,function(){var n=a(e.url,e.query),r=o(e.method,n,e.responseType,e.headers,e.data,t);r.onprogress=e.onprogress||null,r.upload&&e.onuploadprogress&&(r.upload.onprogress=e.onuploadprogress)});else if(e.callbackID=e.query.callback=u(t),!1===e.jsonp||("function"==typeof e.jsonp&&e.jsonp(e,e.query),"get"!==e.method)){if(!1!==e.form){e.query.redirect_uri=e.redirect_uri,e.query.state=JSON.stringify({callback:e.callbackID}),delete e.query.callback;var n=void 0;if("function"==typeof e.form&&(n=e.form(e,e.query)),"post"===e.method&&!1!==n)return void e.proxyHandler(e,function(){var r=a(e.url,e.query);i(r,e.data,n,t,e.callbackID,e.timeout)})}t({error:"invalid_request"})}else e.proxyHandler(e,function(){var n=a(e.url,c(e.query,e.data||{}));r(n,t,e.callbackID,e.timeout)})}},{11:11,13:13,23:23,28:28,37:37,44:44,9:9}],13:[function(e,t,n){"use strict";function r(e){var t=new FormData;for(var n in e)e.hasOwnProperty(n)&&(o(e[n],window.HTMLInputElement)&&"files"in e[n]?e[n].files.length>0&&t.append(n,e[n].files[0]):o(e[n],window.Blob)?t.append(n,e[n],e.name):t.append(n,e[n]));return t}var o=e(29),i=e(38),s=e(39),u=e(35),a=e(34),c=/([a-z0-9-]+):\s*(.*);?/gi;t.exports=a(function(e,t,n,a,f,p){var l=new XMLHttpRequest;if(e=e.toUpperCase(),l.onload=function(){var e=l.response;e||""!==l.responseType&&"text"!==l.responseType||(e=l.responseText),"string"==typeof e&&"json"===n&&(e=l.responseJSON||s(l.responseText||l.response));var t=i(l.getAllResponseHeaders(),c);t.statusCode=l.status,p(e,t)},l.onerror=l.onload,"GET"===e||"DELETE"===e?f=null:!f||"string"==typeof f||o(f,window.FormData)||o(f,window.File)||o(f,window.Blob)||(f=r(f)),l.open(e,t,!0),"responseType"in l?u(function(){l.responseType=n}):"blob"===n&&l.overrideMimeType("text/plain; charset=x-user-defined"),a)for(var d in a)l.setRequestHeader(d,a[d]);return l.send(f),l})},{29:29,34:34,35:35,38:38,39:39}],14:[function(e,t,n){"use strict";var r=e(16);t.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body,o=r(e,t);return n.appendChild(o),o}},{16:16}],15:[function(e,t,n){"use strict";var r=e(18);t.exports=function(e,t){return r(e,function(e){for(var n in t){var r=t[n];"function"==typeof r?e[n]=r:e.setAttribute(n,r)}})}},{18:18}],16:[function(e,t,n){"use strict";var r=e(15);t.exports=function(e,t){var n=document.createElement(e);return r(n,t),n}},{15:15}],17:[function(e,t,n){"use strict";var r=e(29);t.exports=function(e,t){var n="HTML"+(e||"").replace(/^[a-z]/,function(e){return e.toUpperCase()})+"Element";return!!t&&(window[n]?r(t,window[n]):window.Element?r(t,window.Element)&&(!e||t.tagName&&t.tagName.toLowerCase()===e):!(r(t,Object)||r(t,Array)||r(t,String)||r(t,Number))&&t.tagName&&t.tagName.toLowerCase()===e)}},{29:29}],18:[function(e,t,n){"use strict";var r=e(20),o=e(29),i=e(3);t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return r(e)?e=[e]:"string"==typeof e&&(e=document.querySelectorAll(e)),o(e,Array)||(e=i(e)),t&&e.forEach(t),e}},{20:20,29:29,3:3}],19:[function(e,t,n){"use strict";var r=e(14),o=e(40);t.exports=function(e){var t=o({position:"absolute",left:"-1000px",bottom:0,height:"1px",width:"1px"},";",":");return r("iframe",{src:e,style:t})}},{14:14,40:40}],20:[function(e,t,n){"use strict";var r=e(29),o="undefined"!=typeof HTMLElement?HTMLElement:Element,i="undefined"!=typeof HTMLDocument?HTMLDocument:Document,s=window.constructor;t.exports=function(e){return r(e,o)||r(e,i)||r(e,s)}},{29:29}],21:[function(e,t,n){"use strict";var r={bubbles:!0,cancelable:!0},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Event(e,t)};try{o("test")}catch(e){o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=document.createEvent("Event");return n.initEvent(e,!!t.bubbles,!!t.cancelable),n}}t.exports=o},{}],22:[function(e,t,n){"use strict";var r=e(18),o=e(21);t.exports=function(e,t){return r(e,function(e){return e.dispatchEvent(o(t))})}},{18:18,21:21}],23:[function(e,t,n){"use strict";function r(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];t.apply(void 0,r)&&delete window[e]}var o=e(43);t.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_tricks_";return t=t||n+o(),window[t]=r.bind(null,t,e),t}},{43:43}],24:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=e(18),i=/[\s,]+/,s=!1;try{var u=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,u)}catch(e){}t.exports=function(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return"object"===(void 0===u?"undefined":r(u))&&u.passive&&!s&&(u=!1),t=t.split(i),o(e,function(e){return t.forEach(function(t){return e.addEventListener(t,n,u)})})}},{18:18}],25:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.exports=function(e,t){var n={},o=0,i=null,s=null;for(s in e)if(e.hasOwnProperty(s))break;if(1===t.length&&"object"===r(t[0])&&"o!"!==e[s])for(s in t[0])if(e.hasOwnProperty(s)&&s in e)return t[0];for(s in e)if(e.hasOwnProperty(s))if(i=r(t[o]),"function"==typeof e[s]&&e[s].test(t[o])||"string"==typeof e[s]&&(e[s].indexOf("s")>-1&&"string"===i||e[s].indexOf("o")>-1&&"object"===i||e[s].indexOf("i")>-1&&"number"===i||e[s].indexOf("a")>-1&&"object"===i||e[s].indexOf("f")>-1&&"function"===i))n[s]=t[o++];else if("string"==typeof e[s]&&e[s].indexOf("!")>-1)return!1;return n}},{}],26:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=e(30);t.exports=function e(t){if(null===t||"object"!==(void 0===t?"undefined":r(t))||t instanceof Date||"nodeName"in t||o(t)||"function"==typeof FormData&&t instanceof FormData)return t;if(Array.isArray(t))return t.map(e.bind(this));var n={};for(var i in t)n[i]=e(t[i]);return n}},{30:30}],27:[function(e,t,n){"use strict";t.exports=function(e,t){if(e||!t){var n={};for(var r in e)r in t||(n[r]=e[r]);return n}return e}},{}],28:[function(e,t,n){"use strict";var r=e(29);t.exports=function e(t){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return o.forEach(function(n){if(Array.isArray(t)&&Array.isArray(n))Array.prototype.push.apply(t,n);else if(r(t,Object)&&r(n,Object)&&t!==n)for(var o in n)t[o]=e(t[o],n[o]);else t=Array.isArray(n)?n.slice(0):n}),t}},{29:29}],29:[function(e,t,n){"use strict";t.exports=function(e,t){return t&&e instanceof t}},{}],30:[function(e,t,n){"use strict";var r=e(29);t.exports=function(e){return r(e,Object)&&(r(e,"undefined"!=typeof HTMLInputElement?HTMLInputElement:void 0)&&"file"===e.type||r(e,"undefined"!=typeof HTMLInput?HTMLInput:void 0)&&"file"===e.type||r(e,"undefined"!=typeof FileList?FileList:void 0)||r(e,"undefined"!=typeof File?File:void 0)||r(e,"undefined"!=typeof Blob?Blob:void 0))}},{29:29}],31:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.exports=function(e){if(!e)return!0;if(Array.isArray(e))return!e.length;if("object"===(void 0===e?"undefined":r(e)))for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{}],32:[function(e,t,n){"use strict";var r=e(28);t.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.unshift({}),r.apply(void 0,t)}},{28:28}],33:[function(e,t,n){"use strict";function r(e,t){var n=this;return t&&"function"==typeof t&&e.split(f).forEach(function(e){n.events[e]=[t].concat(n.events[e]||[])}),this}function o(e,t){return this.findEvents(e,function(e,n){t&&this.events[e][n]!==t||(this.events[e][n]=null)}),this}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];n.push(e);for(var o=this;o&&o.findEvents;)o.findEvents(e+",*",function(t,r){n[n.length-1]="*"===t?e:t,this.events[t][r].apply(this,n)}),o=o.parent;return this}function s(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return c(function(){e.emit.apply(e,n)}),this}function u(e,t){var n=e.split(f);for(var r in this.events)this.events.hasOwnProperty(r)&&n.indexOf(r)>-1&&this.events[r].forEach(a.bind(this,r,t))}function a(e,t,n,r){n&&t.call(this,e,r)}var c=e(45),f=/[\s,]+/;t.exports=function(){return this.parent={events:this.events,findEvents:this.findEvents,parent:this.parent,utils:this.utils},this.events={},this.off=o,this.on=r,this.emit=i,this.emitAfter=s,this.findEvents=u,this}},{45:45}],34:[function(e,t,n){"use strict";t.exports=function(e){var t=function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.fn.apply(null,n)};return t.fn=e,t}},{}],35:[function(e,t,n){"use strict";t.exports=function(e){try{return e.call(null)}catch(e){}}},{}],36:[function(e,t,n){"use strict";t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(function(n,r){var o=void 0,i=void 0,s=function(e){return function(t){return o&&clearTimeout(o),i=!0,e(t)}},u=s(n),a=s(r);!function n(){try{e(u,a),i||(o=setTimeout(n,t))}catch(e){r(e)}}()})}},{}],37:[function(e,t,n){"use strict";var r=e(42),o=e(31);t.exports=function(e,t,n){var i=void 0;if(t){n=n||encodeURIComponent;for(var s in t){var u="([\\?\\&])"+s+"=[^\\&]*";i=new RegExp(u),e.match(i)&&(e=e.replace(i,"$1"+s+"="+n(t[s])),delete t[s])}}return o(t)?e:e+(e.indexOf("?")>-1?"&":"?")+r(t,n)}},{31:31,42:42}],38:[function(e,t,n){"use strict";t.exports=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r={},o=void 0;o=t.exec(e);)r[o[1]]=n(o[2]);return r}},{}],39:[function(e,t,n){"use strict";var r=e(35);t.exports=function(e){return r(function(){return JSON.parse(e)})}},{35:35}],40:[function(e,t,n){"use strict";t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"=",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return Object.keys(e).map(function(t){var o=r(e[t]);return t+(null!==o?n+o:"")}).join(t)}},{}],41:[function(e,t,n){"use strict";var r=e(38),o=/^[#?]/,i=/([^=/&]+)=([^&]+)/g;t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:decodeURIComponent;return e=e.replace(o,""),r(e,i,t)}},{38:38}],42:[function(e,t,n){"use strict";var r=e(40),o=function(e){return"?"===e?"?":encodeURIComponent(e)};t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return r(e,"&","=",t)}},{40:40}],43:[function(e,t,n){"use strict";t.exports=function(){return parseInt(1e12*Math.random(),10).toString(36)}},{}],44:[function(e,t,n){"use strict";t.exports="withCredentials"in new XMLHttpRequest},{}],45:[function(e,t,n){"use strict";t.exports="function"==typeof setImmediate?setImmediate:function(e){return setTimeout(e,0)}},{}],46:[function(e,t,n){"use strict";t.exports=function(e){if(e.frameElement)e.parent.document.body.removeChild(e.frameElement);else{try{e.close()}catch(e){}e.addEventListener&&e.addEventListener("load",function(){return e.close()})}}},{}],47:[function(e,t,n){"use strict";function r(e){var t=o(e,2),n=t[0],r=t[1],i=n.toLowerCase(),u=r.toLowerCase();if(this[u]&&!(i in this)){var a=void 0!==window["screen"+n]?window["screen"+n]:screen[i],c=screen[u]||window["inner"+r]||s["client"+r];this[i]=parseInt((c-this[u])/2,10)+a}}var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=e(40),s=document.documentElement,u=[["Top","Height"],["Left","Width"]];t.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.forEach(r.bind(n)),window.open(e,t,i(n,","))}},{40:40}],48:[function(e,t,n){"use strict";t.exports=function(e){if(e){if(window.URL&&URL instanceof Function&&0!==URL.length)return new URL(e,window.location);var t=document.createElement("a");return t.href=e,t.cloneNode(!1)}return window.location}},{}],49:[function(e,t,n){"use strict";function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var s=t[o](i),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function i(e,t){return{error:{code:e,message:t}}}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){return void 0===e?"undefined":s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":s(e)},a=e(25),c=e(26),f=e(46),p=e(37),l=e(27),d=e(1),h=e(28),y=e(23),v=e(19),m=e(31),g=e(32),b=e(41),w=e(42),x=e(47),k=e(33),_=e(43),S=e(12),q=e(7),E=e(4),T=e(48),O=e(36),I=function e(t){return e.use(t)};t.exports=I,h(I,{settings:{redirect_uri:"undefined"!=typeof location?location.href.split("#")[0]:null,response_type:"token",display:"popup",state:"",oauth_proxy:"https://auth-server.herokuapp.com/proxy",timeout:2e4,popup:{resizable:1,scrollbars:1,width:500,height:550},scope:["basic"],scope_map:{basic:""},default_service:null,force:null,page_uri:"undefined"!=typeof location?location.href:null},services:{},use:function(e){var t=Object.create(this);return t.settings=Object.create(this.settings),e&&(t.settings.default_service=e),k.call(t),t},init:function(e,t){if(!e)return this.services;for(var n in e)e.hasOwnProperty(n)&&"object"!==u(e[n])&&(e[n]={id:e[n]});return h(this.services,e),t&&(h(this.settings,t),"redirect_uri"in t&&(this.settings.redirect_uri=T(t.redirect_uri).href)),this},login:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return o(regeneratorRuntime.mark(function t(){var r,o,s,u,c,f,h,v,m,b,w,k,S,q,A,R,L,j,C,H;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(H=function(e,t){I.emit(e,t)},j=function(e){return!!e},L=function(e){return e},r=e.utils,o=a({network:"s",options:"o",callback:"f"},n),s=void 0,u=l(o.options,e.settings),c=o.options=g(e.settings,o.options||{}),c.popup=g(e.settings.popup,o.options.popup||{}),o.network=o.network||e.settings.default_service,"string"==typeof o.network&&o.network in e.services){t.next=12;break}throw i("invalid_network","The provided network was not recognized");case 12:if(f=e.services[o.network],h="_hellojs_"+_(),(v=[]).push(new Promise(function(e,t){y(function(n){var o=void 0;(o=n?JSON.parse(n):i("cancelled","The authentication was not completed")).error?t(o):(r.store(o.network,o),e({network:o.network,authResponse:o}))},h)})),m=T(c.redirect_uri).href,b=f.oauth.response_type||c.response_type,/\bcode\b/.test(b)&&!f.oauth.grant&&(b=b.replace(/\bcode\b/,"token")),o.qs=g(u,{client_id:encodeURIComponent(f.id),response_type:encodeURIComponent(b),redirect_uri:encodeURIComponent(m),state:{client_id:f.id,network:o.network,display:c.display,callback:h,state:c.state,redirect_uri:m}}),w=r.store(o.network),k=/[,\s]+/,S=e.settings.scope?[e.settings.scope.toString()]:[],q=g(e.settings.scope_map,f.scope||{}),c.scope&&S.push(c.scope.toString()),w&&"scope"in w&&w.scope instanceof String&&S.push(w.scope),S=S.join(",").split(k),S=E(S).filter(j),o.qs.state.scope=S.join(","),S=S.map(function(e){return e in q?q[e]:e}),S=S.join(",").split(k),S=E(S).filter(j),o.qs.scope=S.join(f.scope_delim||","),!1!==c.force){t.next=38;break}if(!(w&&"access_token"in w&&w.access_token&&"expires"in w&&w.expires>(new Date).getTime()/1e3)){t.next=38;break}if(0!==(A=d((w.scope||"").split(k),(o.qs.state.scope||"").split(k))).length){t.next=38;break}return t.abrupt("return",{unchanged:!0,network:o.network,authResponse:w});case 38:return"page"===c.display&&c.page_uri&&(o.qs.state.page_uri=T(c.page_uri).href),"login"in f&&"function"==typeof f.login&&f.login(o),(!/\btoken\b/.test(b)||parseInt(f.oauth.version,10)<2||"none"===c.display&&f.oauth.grant&&w&&w.refresh_token)&&(o.qs.state.oauth=f.oauth,o.qs.state.oauth_proxy=c.oauth_proxy),o.qs.state=encodeURIComponent(JSON.stringify(o.qs.state)),1===parseInt(f.oauth.version,10)?s=p(c.oauth_proxy,o.qs,L):"none"===c.display&&f.oauth.grant&&w&&w.refresh_token?(o.qs.refresh_token=w.refresh_token,s=p(c.oauth_proxy,o.qs,L)):s=p(f.oauth.auth,o.qs,L),H("auth.init",o),"none"===c.display?r.iframe(s,m):"popup"===c.display?(R=r.popup(s,m,c.popup),v.push(O(function(e,t){if(!R||R.closed){var n=i("cancelled","Login has been cancelled");x||(n=i("blocked","Popup was blocked")),n.network=o.network,t(n)}},100))):window.location=s,(C=Promise.race(v)).then(o.callback,o.callback),C.then(H.bind(e,"auth.login auth"),H.bind(e,"auth.failed auth")),t.abrupt("return",C);case 49:case"end":return t.stop()}},t,e)}))()},logout:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return o(regeneratorRuntime.mark(function t(){var r,o,s,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.utils,o=a({name:"s",options:"o",callback:"f"},n),s=[],o.options=o.options||{},o.name=o.name||e.settings.default_service,o.authResponse=r.store(o.name),!o.name||o.name in e.services){t.next=10;break}throw i("invalid_network","The network was unrecognized");case 10:if(!o.name||!o.authResponse){t.next=15;break}u=new Promise(function(t){var n={};if(o.options.force){var i=e.services[o.name].logout;if(i)if("function"==typeof i&&(i=i(t,o)),"string"==typeof i)r.iframe(i),n.force=null,n.message="Logout success on providers site was indeterminate";else if(void 0===i)return}t(n)}).then(function(e){return r.store(o.name,null),g({network:o.name},e||{})}),s.push(u),t.next=16;break;case 15:throw i("invalid_session","There was no session to remove");case 16:return(c=Promise.race(s)).then(o.callback,o.callback),c.then(function(e){return I.emit("auth.logout auth",e)},function(e){return I.emit("error",e)}),t.abrupt("return",c);case 20:case"end":return t.stop()}},t,e)}))()},getAuthResponse:function(e){return(e=e||this.settings.default_service)&&e in this.services?this.utils.store(e)||null:null},events:{}}),h(I.utils={iframe:v,popup:x,request:S,store:q},{responseHandler:function(e,t){function n(e,t,n){var i=e.callback,s=e.network;if(o.store(s,e),!("display"in e&&"page"===e.display)){if(n&&i&&i in n){try{delete e.callback}catch(e){}o.store(s,e);var u=JSON.stringify(e);try{r(n,i)(u)}catch(e){}}f(t)}}function r(e,t){return 0!==t.indexOf("_hellojs_")?function(){throw"Could not execute callback "+t}:e[t]}var o=this,i=void 0,s=e.location,u=s.assign&&s.assign.bind(s)||function(t){e.location=t};if((i=b(s.search))&&i.state&&(i.code||i.oauth_token)){var a=JSON.parse(i.state);return i.redirect_uri=a.redirect_uri||s.href.replace(/[?#].*$/,""),void u(a.oauth_proxy+"?"+w(i))}if((i=g(b(s.search||""),b(s.hash||"")))&&"state"in i){try{var c=JSON.parse(i.state);h(i,c)}catch(e){I.emit("error","Could not decode state parameter")}if("access_token"in i&&i.access_token&&i.network)i.expires_in&&0!==parseInt(i.expires_in,10)||(i.expires_in=0),i.expires_in=parseInt(i.expires_in,10),i.expires=(new Date).getTime()/1e3+(i.expires_in||31536e3),n(i,e,t);else if("error"in i&&i.error&&i.network)i.error={code:i.error,message:i.error_message||i.error_description},n(i,e,t);else if(i.callback&&i.callback in t){var p=!!("result"in i&&i.result)&&JSON.parse(i.result);r(t,i.callback)(p),f(e)}i.page_uri&&u(i.page_uri)}else if("oauth_redirect"in i)return void u(decodeURIComponent(i.oauth_redirect))}}),k.call(I),function(e){var t={},n={};e.on("auth.login, auth.logout",function(n){n&&"object"===(void 0===n?"undefined":u(n))&&n.network&&(t[n.network]=e.utils.store(n.network)||{})}),function r(){var o=(new Date).getTime()/1e3;for(var i in e.services){(function(r){if(e.services.hasOwnProperty(r)){if(!e.services[r].id)return"continue";var i=e.utils.store(r)||{},s=e.services[r],u=t[r]||{},a=function(t){e.emit("auth."+t,{network:r,authResponse:i})};if(i&&"callback"in i){var c=i.callback;try{delete i.callback}catch(e){}e.utils.store(r,i);try{window[c](i)}catch(e){}}if(i&&"expires"in i&&i.expires<o){var f=s.refresh||i.refresh_token;return!f||r in n&&!(n[r]<o)?f||r in n||(a("expired"),n[r]=!0):(e.emit("notice",r+" has expired trying to resignin"),e.login(r,{display:"none",force:!1}),n[r]=o+600),"continue"}if(u.access_token===i.access_token&&u.expires===i.expires)return"continue";!i.access_token&&u.access_token?a("logout"):i.access_token&&!u.access_token?a("login"):i.expires!==u.expires&&a("update"),t[r]=i,r in n&&delete n[r]}})(i)}setTimeout(r,1e3)}()}(I),I.api=function(){var e=o(regeneratorRuntime.mark(function e(){for(var t=this,n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];var f,p,l,d,y,v,g,w,x,k;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((f=a({path:"s!",query:"o",method:"s",data:"o",timeout:"i",callback:"f"},o))&&f.path){e.next=3;break}throw i("invalid_path","Missing the path parameter from the request");case 3:if(f.method=(f.method||"get").toLowerCase(),f.headers=f.headers||{},f.responseType=f.responseType||"json",f.query=f.query||{},"get"!==f.method&&"delete"!==f.method||(h(f.query,f.data),f.data={}),p=f.data=f.data||{},f.path=f.path.replace(/^\/+/,""),(l=(f.path.split(/[/:]/,2)||[])[0].toLowerCase())in this.services&&(f.network=l,d=new RegExp("^"+l+":?/?"),f.path=f.path.replace(d,"")),f.network=this.settings.default_service=f.network||this.settings.default_service,y=this.services[f.network]){e.next=16;break}throw i("invalid_network","Could not match the service requested: "+f.network);case 16:if(!(f.method in y&&f.path in y[f.method]&&!1===y[f.method][f.path])){e.next=18;break}throw i("invalid_path","The provided path is not available on the selected network");case 18:return f.oauth_proxy||(f.oauth_proxy=this.settings.oauth_proxy),"proxy"in f||(f.proxy=f.oauth_proxy&&y.oauth&&1===parseInt(y.oauth.version,10)),"timeout"in f||(f.timeout=this.settings.timeout),"formatResponse"in f||(f.formatResponse=!0),f.authResponse=this.getAuthResponse(f.network),f.authResponse&&f.authResponse.access_token&&(f.query.access_token=f.authResponse.access_token),v=f.path,g=void 0,f.options=c(f.query),f.data=c(p),w=y[{delete:"del"}[f.method]||f.method]||{},"get"===f.method&&(x=v.split(/[?#]/)[1])&&(h(f.query,b(x)),v=v.replace(/\?.*?(#|$)/,"$1")),(g=v.match(/#(.+)/,""))?(v=v.split("#")[0],f.path=g[1]):v in w?(f.path=v,v=w[v]):"default"in w&&(v=w.default),f.redirect_uri=this.settings.redirect_uri,f.xhr=y.xhr,f.jsonp=y.jsonp,f.form=y.form,f.proxyHandler=I.utils.proxyHandler,k=void 0,k="function"==typeof v?new Promise(function(e){return v(f,e)}):Promise.resolve(v),(k=k.then(function(e){return(e=e.replace(/@\{([a-z_-]+)(\|.*?)?\}/gi,function(e,t,n){var r=n?n.replace(/^\|/,""):"";if(t in f.query)r=f.query[t],delete f.query[t];else if(f.data&&t in f.data)r=f.data[t],delete f.data[t];else if(!n)throw i("missing_attribute","The attribute "+t+" is missing from the request");return r})).match(/^https?:\/\//)||(e=y.base+e),f.url=e,new Promise(function(e){return t.utils.request(f,function(t,n){return e({data:t,headers:n})})})}).then(function(e){var t=e.data,n=e.headers;if(!f.formatResponse){if("object"===(void 0===n?"undefined":u(n))?n.statusCode>=400:"object"===("undefined"==typeof r?"undefined":u(r))&&"error"in t)throw t;return t}if(!0===t&&(t={success:!0}),"delete"===f.method&&(t=!t||m(t)?{success:!0}:t),y.wrap&&(f.path in y.wrap||"default"in y.wrap)){var o=f.path in y.wrap?f.path:"default",i=y.wrap[o](t,n,f);i&&(t=i)}if(t&&"paging"in t&&t.paging.next&&("?"===t.paging.next[0]?t.paging.next=f.path+t.paging.next:t.paging.next+="#"+f.path),!t||"error"in t)throw t;return t})).then(f.callback,f.callback),e.abrupt("return",k);case 41:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),I.utils.proxyHandler=function(e,t){var n=e.authResponse,r="";if(n&&n.oauth&&1===parseInt(n.oauth.version,10)&&(r=e.query.access_token||"",delete e.query.access_token,e.proxy=!0),!e.data||"get"!==e.method&&"delete"!==e.method||(h(e.query,e.data),e.data=null),e.proxy){var o=p(e.url,e.query);e.url=e.oauth_proxy,e.query={path:o,access_token:r,then:e.proxy_response_type||("get"===e.method.toLowerCase()?"redirect":"proxy"),method:e.method.toLowerCase(),suppress_response_codes:!0}}t()},I.utils.responseHandler(window,window.opener||window.parent),t.exports=I},{1:1,12:12,19:19,23:23,25:25,26:26,27:27,28:28,31:31,32:32,33:33,36:36,37:37,4:4,41:41,42:42,43:43,46:46,47:47,48:48,7:7}]},{},[49])(49)});
//# sourceMappingURL=hello.js.map
