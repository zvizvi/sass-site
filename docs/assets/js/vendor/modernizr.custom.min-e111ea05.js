/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function i(e,t){return typeof e===t}function s(){var e,t,n,s,o,r,a;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],t=_[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)r=e[o],a=r.split("."),1===a.length?w[a[0]]=s:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var t=k.className,n=w._config.classPrefix||"";if(T&&(t=t.baseVal),w._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?k.className.baseVal=t:k.className=t)}function r(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&r(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),s=w[i[0]];if(2==i.length&&(s=s[i[1]]),"undefined"!=typeof s)return w;t="function"==typeof t?t():t,1==i.length?w[i[0]]=t:(!w[i[0]]||w[i[0]]instanceof Boolean||(w[i[0]]=new Boolean(w[i[0]])),w[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),w._trigger(e,t)}return w}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function u(e,n,i,s){var o,r,u,c,h="modernizr",d=a("div"),p=l();if(parseInt(i,10))for(;i--;)u=a("div"),u.id=s?s[i]:h+(i+1),d.appendChild(u);return o=a("style"),o.type="text/css",o.id="s"+h,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=h,p.fake&&(p.style.background="",p.style.overflow="hidden",c=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),r=n(d,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=c,k.offsetHeight):d.parentNode.removeChild(d),!!r}function c(e,t){return!!~(""+e).indexOf(t)}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,i){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)i&&(s=s.getPropertyValue(i));else if(o){var r=o.error?"error":"log";o[r].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[i];return s}function p(t,i){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(h(t[s]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+h(t[s])+":"+i+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,s,o){function r(){u&&(delete I.style,delete I.modElem)}if(o=i(o,"undefined")?!1:o,!i(s,"undefined")){var l=p(e,s);if(!i(l,"undefined"))return l}for(var u,h,d,m,g,v=["modernizr","tspan","samp"];!I.style&&v.length;)u=!0,I.modElem=a(v.shift()),I.style=I.modElem.style;for(d=e.length,h=0;d>h;h++)if(m=e[h],g=I.style[m],c(m,"-")&&(m=f(m)),I.style[m]!==n){if(o||i(s,"undefined"))return r(),"pfx"==t?m:!0;try{I.style[m]=s}catch(y){}if(I.style[m]!=g)return r(),"pfx"==t?m:!0}return r(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],i(s,"function")?g(s,n||t):s);return!1}function y(e,t,n,s,o){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+M.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?m(a,t,s,o):(a=(e+" "+D.join(r+" ")+r).split(" "),v(a,t,n))}function b(e,t,i){return y(e,n,n,t,i)}var _=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){_.push({name:e,fn:t,options:n})},addAsyncTest:function(e){_.push({name:null,fn:e})}},w=function(){};w.prototype=x,w=new w;var C=[],k=t.documentElement,T="svg"===k.nodeName.toLowerCase(),S="Moz O ms Webkit",D=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=D;var N=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=N;var E;!function(){var e={}.hasOwnProperty;E=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout(function(){w._trigger(e,w[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},w._q.push(function(){x.addTest=r});var A=function(){function e(e,t){var s;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,s=e in t,!s&&i&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),s="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),s):!1}var i=!("onblur"in t.documentElement);return e}();x.hasEvent=A;var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=j;var L=function(e,t){var n=!1,i=a("div"),s=i.style;if(e in s){var o=D.length;for(s[e]=t,n=s[e];o--&&!n;)s[e]="-"+D[o]+"-"+t,n=s[e]}return""===n&&(n=!1),n};x.prefixedCSSValue=L;var M=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=M;var P={elem:a("modernizr")};w._q.push(function(){delete P.elem});var I={style:P.elem.style};w._q.unshift(function(){delete I.style}),x.testAllProps=y,x.testAllProps=b,x.testProp=function(e,t,i){return m([e],n,t,i)},x.testStyles=u,w.addTest("customelements","customElements"in e),w.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),w.addTest("pointerevents",function(){var e=!1,t=D.length;for(e=w.hasEvent("pointerdown");t--&&!e;)A(D[t]+"pointerdown")&&(e=!0);return e}),w.addTest("postmessage","postMessage"in e),w.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var O=!1;try{O="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(H){}w.addTest("websockets",O),w.addTest("cssanimations",b("animationName","a",!0)),function(){w.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=b("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[i])),w.addTest("csscolumns."+e,t)}(),w.addTest("flexbox",b("flexBasis","1px",!0)),w.addTest("picture","HTMLPictureElement"in e),w.addAsyncTest(function(){var e,t,n,i=a("img"),s="sizes"in i;!s&&"srcset"in i?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){r("sizes",2==i.width)},i.onload=n,i.onerror=n,i.setAttribute("sizes","9px"),i.srcset=e+" 1w,"+t+" 8w",i.src=e):r("sizes",s)}),w.addTest("srcset","srcset"in a("img")),w.addTest("webworkers","Worker"in e),s(),o(C),delete x.addTest,delete x.addAsyncTest;for(var F=0;F<w._q.length;F++)w._q[F]();e.Modernizr=w}(window,document);