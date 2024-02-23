// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,b,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,u,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,g,"$1."),i=f.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,i,a,o,s,l,p,f,u,d,g,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if("string"==typeof(i=e[p]))s+=i;else{if(r=void 0!==i.precision,!(i=x(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,d=i.width,g=i.padRight,h=void 0,(h=d-u.length)<0?u:u=g?u+m(h):m(h)+u)),s+=i.arg||"",l+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(j(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var I=Object.prototype,V=I.toString,$=I.__defineGetter__,N=I.__defineSetter__,O=I.__lookupGetter__,C=I.__lookupSetter__,P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(O.call(e,r)||C.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function R(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z="function"==typeof Math.fround?Math.fround:null,G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,W=Object.prototype.hasOwnProperty,L="function"==typeof Symbol?Symbol:void 0,U="function"==typeof L?L.toStringTag:"",X=G&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return M.call(e);t=e[U],a=U,r=null!=(n=e)&&W.call(n,a);try{e[U]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[U]=t:delete e[U],i}:function(e){return M.call(e)},q="function"==typeof Float32Array,z=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null,B="function"==typeof Float32Array?Float32Array:void 0,D=new(function(){var e,r,t;if("function"!=typeof Y)return!1;try{r=new Y([1,3.14,-3.14,5e40]),t=r,e=(q&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===z}catch(r){e=!1}return e}()?B:function(){throw new Error("not implemented")})(1),H="function"==typeof Z?Z:function(e){return D[0]=e,D[0]};function J(e,r,t,i){var n,a,o,c,s,l,p;if(l=e-r,e<=0||l<=0)return NaN;if(1===e||0===i)return 0;for(n=t[a=i<0?(1-e)*i:0],a+=i,o=0,c=0,p=1;p<e;p++)s=H(t[a]-n),o=H(o+H(s*s)),c=H(c+s),a+=i;return H(H(o/l)-H(H(c/e)*H(c/l)))}function K(e,r,t,i,n){var a,o,c,s,l,p,f;if(p=e-r,e<=0||p<=0)return NaN;if(1===e||0===i)return 0;for(a=t[o=n],o+=i,c=0,s=0,f=1;f<e;f++)l=H(t[o]-a),c=H(c+H(l*l)),s=H(s+l),o+=i;return H(H(c/p)-H(H(s/e)*H(s/p)))}R(J,"ndarray",K);var Q=Math.sqrt;function ee(e,r,t,i){return H(Q(J(e,r,t,i)))}return R(ee,"ndarray",(function(e,r,t,i,n){return H(Q(K(e,r,t,i,n)))})),ee},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sstdevch=r();
//# sourceMappingURL=browser.js.map
