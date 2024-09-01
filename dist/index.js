"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(w,s){
var y=require('@stdlib/stats-base-dnanvariancech/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,n){return x(y(e,r,a,n))}s.exports=f
});var d=i(function(z,v){
var j=require('@stdlib/stats-base-dnanvariancech/dist').ndarray,m=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,n,p){return m(j(e,r,a,n,p))}v.exports=l
});var o=i(function(A,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=u(),_=d();R(c,"ndarray",_);q.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),t,h=O(E(__dirname,"./native.js"));b(h)?t=g:t=h;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
