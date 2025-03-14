"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(w,u){
var h=require('@stdlib/stats-base-dnanvariancech/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,n,a,f){return p(h(e,r,n,a,f))}u.exports=x
});var d=i(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=t();function l(e,r,n,a){return m(e,r,n,a,j(e,a))}v.exports=l
});var o=i(function(A,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=t();R(q,"ndarray",_);c.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),s,y=O(E(__dirname,"./native.js"));b(y)?s=g:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
