/*

*/

/*

console.log([1,2,3].contiguous)
*/

/*
console.time('MyScript');
console.timeEnd('MyScript');
*/


/*
(function(o){
 var p=o.prototype;
})(zzz);
*/







//====================================================================================================================================================
/*
Memo Caratteri speciali:

 \u2192 | &rarr;		| â†’
 \u2026 | &hellip;	| â€¦
 \u2003 | &emsp;

*/
//====================================================================================================================================================
(function(o){
 o.defineGetter=function(e,s,f){o.defineProperty(e,s,{get:f})};
})(Object);

//
(function(o){
 var p=o.prototype;
 o.SliceOn=function(x){return p.slice.call(x)};
 Object.defineGetter(p,'contiguous',function(){return this.join('')});
})(Array);

//
(function(o){
 o.repeat=function(s,n){var t='';if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1}}else{t=n<=0?'':s};return t};
 o.padN=function(s,i,t){return i===0||t.length===0?s:o.repeat(t,i-s.length)+s};
})(String);

//
(function(o){
 Object.defineGetter(o,'pick',function(){
  var t=new o(),f=function(s,i){s=String(t['get'+s]());return String.padN(s,i,'0')};
  return{toString:function(){return [f('Hours',2),f('Minutes',2),f('Seconds',2),f('Milliseconds',3)].join(':')},date:t}
 });
})(Date);
//====================================================================================================================================================


console.stamp=function(){
  var o=console.stamp,m=Array.SliceOn(arguments),x=Date.pick,t=x.date;
  m.unshift([x,'|',t-o.t||0,'\t'].contiguous);
  console.log.apply(this,m);
  o.t=t;
};


//====================================================================================================================================================
//console.clear();
(function boot(global){'use strict';
 var undefined=void(0),
 $=global.document,
 $id=function(s){return $.getElementById(s)},
 $name=function(s,i){var m=$.getElementsByName(s);return i===undefined?m:m[i]},
 unid=(function(p){return function(e){var n=e[p]||0;e[p]=++n;return n}})('uid-n'),
 listenOnce=function(e,l,f){var n=unid(e);n='f'+n;e.addEventListener(l,e[n]=(function(x){f(x);e.removeEventListener(l,e[n],0)}),0)},
 whenDomLoaded=function(e,f){listenOnce(e,'DOMContentLoaded',f)},
 whenLoaded=function(e,f){listenOnce(e,'load',f)};
 //

 var init=function(evt){
  console.stamp('document â†’ readyâ€¦');
  var $html=$.documentElement,m=$html.childNodes,$head=m[0],$body=m[1]//$.body||m[0]

	//console.stamp($html,$head,$body);

 };

 var start=function(evt){
  console.stamp('document â†’ loaded!');
  // evt.srcElement === $ â†’true
 };

 //
 whenDomLoaded(global,init);
 whenLoaded(global,start);
})(window);
//---------------------

