//====================================================================================================================================================
/*
Memo Caratteri speciali:

 \u2192 | &rarr;		| →
 \u2026 | &hellip;	| …
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
 Object.defineGetter(o,'pick',function(){
  var t=new o(),f=function(s,i){s=String(t['get'+s]());return s.length===i?'0'+s:s};
  return{toString:function(){return [f('Hours',1),f('Minutes',1),f('Seconds',1),f('Milliseconds',2)].join(':')},date:t}
 });
})(Date);
//====================================================================================================================================================


console.stamp=function(){
  var o=console.stamp,m=Array.SliceOn(arguments),x=Date.pick,t=x.date;
  m.unshift([x,'|',t-o.t||0,'\t'].contiguous);
  console.log.apply(this,m);
  o.t=t;
};
