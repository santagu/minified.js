/^u/.test(typeof define)&&function(a){this.define=function(b,c){a[b]=c()},this.require=function(b){return a[b]}}({}),define("minified",function(){function C(a){return a!=g?""+a:""}function v(a){return"string"==typeof a}function z(a){return a&&a.nodeType}function aa(a){return a}function A(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function M(a,b){var c=[];return h(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function x(a,b,c){var d=[];return a(b,function(a,e){h(c.call(b,a,e),function(a){d.push(a)})}),d}function n(a,b,c){return C(a).replace(b,c||"")}function h(a,b){if(F(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function W(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function w(a){return"function"==typeof a&&!a.item}function F(a){return a&&a.length!=g&&!v(a)&&!z(a)&&!w(a)&&a!==t}function N(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):s}}function O(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function I(a,b){setTimeout(a,b||0)}function H(a){return parseFloat(n(a,/^[^\d-]+/))}function J(a){return a.Mid=a.Mid||++ba}function P(a,b){var c,d=[],e={};return h(a,function(a){h(b(a),function(a){z(a)&&!e[c=J(a)]&&(d.push(a),e[c]=s)})}),d}function X(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},c=a.get(b);return a.set(b),b=a.get("$height",s),a.set(c),b}function ca(a,b,c,d,e,f){return function(g,h){for(var i,j=g||t.event,k=!f,l=h||j.target;l&&l!=b&&!k;)f(l)?k=s:l=l.parentNode;return k&&(i=(!a.apply(r(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.stopPropagation&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=s),!i}}function Y(a){a()}function Q(a,b){h(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function R(){h(K,Y),K=g}function Z(a){K?K.push(a):I(a)}function S(a){return x(h,a,function(a){return v(a)?a:F(a)?S(a):z(a)?(a=a.cloneNode(s),a.removeAttribute("id"),a):g})}function r(a,b,c){return w(a)?Z(a):new G(D(a,b,c))}function D(a,b,c){function d(a){return a=x(h,a,function b(a){return F(a)?x(h,a,b):a}),e?M(a,function(a){for(;a=a.parentNode;)if(a==e||c)return a==e}):a}var e,f,g,i;return b&&1!=(b=D(b)).length?P(b,function(b){return D(a,b,c)}):(e=b&&b[0],v(a)?1<(b=a.split(/\s*,\s*/)).length?P(b,function(a){return D(a,e,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?D(b[2],D(b[1],e),c):a!=(b=n(a,/^#/))?d(q.getElementById(b)):(f=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(g=q.getElementsByClassName&&i)?(e||q).getElementsByClassName(i):(e||q).getElementsByTagName(f||"*"),(f=g?f:i)&&(b=M(b,N(f,g?"nodeName":"className"))),c?d(b):b):d(a))}function L(a,b){var c,d,e={},f=e;return w(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||v(a)&&(f=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(c=N(f[1],"nodeName"),d=N(f[2],"className"),function(a){return 1==z(a)&&c(a)&&d(a)}):b?function(c){return r(a,b).find(c)!=g}:(r(a).each(function(a){e[J(a)]=s}),function(a){return e[J(a)]})}function $(a){var b=L(a);return function(a){return b(a)?g:s}}function T(){function a(a,e){b==g&&(b=a,c=e,I(function(){h(d,Y)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,w(d)?(f=d.apply(U,c),f&&w(f.then)?f.then(function(a){h(s,[a])},function(a){h(y,[a])}):h(s,[f])):h(b,c)}catch(g){h(y,[g])}}var h=T();return b!=g?I(f):d.push(f),h};return a.error=function(a){return e(0,a)},a}function G(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var g=null,s=!0,y=!1,U,t=this,q=document,ba=1,E={},K=/^[ic]/.test(q.readyState)?g:[],V=[],da=t.requestAnimationFrame||function(a){I(a,33)},B=!!q.all&&!q.addEventListener;return A({each:function(a){return h(this,a)},filter:function(a){return new G(M(this,a))},collect:function(a){return new G(x(h,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=w(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){h(this,function(a){B&&1==z(a)&&(h(D("*",a),function(a){Q(0,E[a.Mid]),delete E[a.Mid]}),Q(0,E[a.Mid]),delete E[a.Mid]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=z(b);return 1==c?x(h,b.childNodes,a):5>c?b.data:g}return x(h,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=L(d?g:b),f=d?b:c;return new G(P(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},next:function(a,b){return this.trav("nextSibling",a,b||1)},select:function(a,b){return r(a,this,b)},is:function(a){return!this.find($(a))},only:function(a){return this.filter(L(a))},not:function(a){return this.filter($(a))},get:function(a,b){var c,d,e,f=this,i=f[0];return i?v(a)?(d=n(n(a,/^%/,"data-"),/^[$@]+/),c="$"==a?i.className:"$$"==a?B?i.style.cssText:i.getAttribute("style"):"$$fade"==a||"$$slide"==a?"hidden"==i.style.visibility||"none"==i.style.display?0:"$$fade"==a?isNaN(c=B?H(i.style.filter)/100:H(i.style.opacity))?1:c:f.get("$height"):"$$scrollX"==a?t.pageXOffset!=g?t.pageXOffset:(q.documentElement||q.body.parentNode||q.body).scrollLeft:"$$scrollY"==a?t.pageXOffset!=g?t.pageYOffset:(q.documentElement||q.body.parentNode||q.body).scrollTop:/^\$[^$]/.test(a)?t.getComputedStyle?t.getComputedStyle(i,g).getPropertyValue(n(d,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(i.currentStyle||i.style)[n(d,/^float$/,"cssFloat")]:/^[@%]/.test(a)?i.getAttribute(d):i[d],b?H(c):c):(e={},(F(a)?h:A)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){function c(a,b,c){c!=g?a.setAttribute(b,c):a.removeAttribute(b)}var d,e=this;return b!==U?"$$fade"==a||"$$slide"==a?e.set({$visibility:0<(d=H(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?B?1>d?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$filter:""}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&X(r(c)))+"px"},$overflow:"hidden"}):h(e,function(d,e){var f=n(n(n(a,/^\$float$/,"cssFloat"),/^%/,"data-"),/^[@$]+/),i=d.className||"",j=/^\$/.test(a)?d.style:d,k=w(b)?b(r(d).get(a),e,d):b;"$"==a?k!=g&&(h(k.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=i;i=n(i,RegExp("(^|\\s)"+b+"(?=$|\\s)","i")),(/^\+/.test(a)||b==a&&c==i)&&(i+=" "+b)}),d.className=n(i,/^\s+|\s+(?=\s|$)/g)):"$$"==a?B?j.cssText=k:c(d,"style",k):"$$scrollX"==a?d.scroll(k,r(d).get("$$scrollY")):"$$scrollY"==a?d.scroll(r(d).get("$$scrollX"),k):/^[@%]/.test(a)?c(j,f,k):j[f]=k}):v(a)||w(a)?e.set("$",a):A(a,function(a,b){e.set(a,b)}),e},add:function(a,b){return this.each(function(c,d){var e;!function f(a){F(a)?h(a,f):w(a)?f(a(c,d)):a!=g&&(a=z(a)?a:q.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)}(d&&!w(a)?S(a):a)})},fill:function(a){return this.each(function(a){r(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new G(S(this))},animate:function(a,b,c){var d,e=this,f=[],g=T(),i=0;return g.stop=function(){return g(y),d(),i},b=b||500,h(e,function(b,d){var e,g=r(b),h={};A(e=g.get(a),function(c,e){var f=a[c];h[c]=w(f)?f(e,d,b):"$$slide"==c?a[c]*X(g)+"px":f}),f.push(g.dial(e,h,c))}),d=r.loop(function(a){a>=b||0>a?(i=b,d(),g(s,[e])):i=a,h(f,function(a){a(i/b)})}),g},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(n(a,/[^\d,]+/g).split(",")[b])}var e=this,f=w(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};return c=c||0,function(c){A(a,function(a,g){var h=b[a],i=0;e.set(a,0>=c?g:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+")":n(h,/-?[\d.]+/,C(f(H(g),H(h),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=y,j=/\b(?=\w)/g;return b?h.set(a)&&function(j){j!==i&&(f=(i=j===s||j===y?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f)&&U)}:h.toggle(n(a,j,"-"),n(a,j,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name,d=C(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)r(a.elements[c]).values(b);else!c||/kbox|dio/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:x(h,[b[c],d],aa))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return w(b)?this.on(g,a,b,c,e):v(d)?this.on(a,b,c,g,d):this.each(function(f,g){h(a?D(a,f):f,function(a){h(C(b).split(/\s/),function(b){var f=n(b,/[?|]/),h=ca(c,a,d,g,n(b,/[^?|]/g),e&&L(e,a));b={e:a,h:h,n:f},(c.M=c.M||[]).push(b),B?(a.attachEvent("on"+f,h),f=J(a),(E[f]=E[f]||[]).push(b)):(a.addEventListener(f,h,y),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||r(g).up(c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(g,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[s]).on(a,"|blur",b,[y]):this.onFocus(g,a)},onChange:function(a,b){var c=[];return b?this.each(function(d,e){function f(f,g){c[e]=d[g],r(d).on(a,f,function(){var a=d[g];a!=c[e]&&(b.call(this,a,e),c[e]=a)})}/kbox|dio/i.test(d.type)?f("|click","checked"):f(B?"|propertychange":"|input |change |keyup","value")}):this.onChange(g,a)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)h(B?E[e.Mid]:e.M,function(e){e.n==a&&(d=d||!e.h(b,c))}),e=e.parentNode})}},function(a,b){G.prototype[a]=b}),A({request:function(a,b,c,d){d=d||{};var e,f=0,i=T(),j=c!=g&&!z(c)&&!v(c);try{e=t.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),j&&(c=x(A,c,function(a,b){return x(h,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,s,d.user,d.pass),j&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),A(d.headers,function(a,b){e.setRequestHeader(a,b)}),A(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?i(s,[e.responseText,e.responseXML]):i(y,[e.status,e.statusText,e.responseText]))},e.send(c)}catch(k){f||i(y,[0,g,C(k)])}return i},toJSON:function a(b){return b==g?""+b:v(b=b.valueOf())?'"'+n(b,/[\\\"\x00-\x1f\x22\x5c\u2028\u2029]/g,W)+'"':F(b)?"["+x(h,b,a).join()+"]":"object"==typeof b?"{"+x(A,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":C(b)},parseJSON:t.JSON?t.JSON.parse:function(b){return b=n(b,/[\x00\xad\u0600-\uffff]/g,W),/^[[\],:{}\s]*$/.test(n(n(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Z,loop:function(a){var b={b:a,c:+new Date,a:function(){O(V,b)}};return 2>V.push(b)&&function c(){h(V,function(a){a.b(Math.max(0,+new Date-a.c),a.a)}).length&&da(c)}(),b.a},off:function(a){h(a.M,function(a){B?(a.e.detachEvent("on"+a.n,a.h),O(E[a.e.Mid],a)):(a.e.removeEventListener(a.n,a.h,y),O(a.e.M,a))}),a.M=g}},function(a,b){r[a]=b}),B?(q.attachEvent("onreadystatechange",function(){/^[ic]/.test(q.readyState)&&R()}),t.attachEvent("onload",R)):q.addEventListener("DOMContentLoaded",R,y),t.d=function(){h(E,Q)},{$:r,$$:function(a){return D(a)[0]},EE:function(a,b,c){return a=r(q.createElement(a)),F(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:G}});