"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(w,u){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-base-svariancech/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,t){return f(y(p(e,r,a,t)))}u.exports=x
});var q=i(function(z,n){
var j=require('@stdlib/number-float64-base-to-float32/dist'),m=require('@stdlib/stats-base-svariancech/dist').ndarray,F=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,t,l){return j(F(m(e,r,a,t,l)))}n.exports=R
});var d=i(function(A,c){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),_=q();T(o,"ndarray",_);c.exports=o
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=d(),s,h=O(E(__dirname,"./native.js"));b(h)?s=g:s=h;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
