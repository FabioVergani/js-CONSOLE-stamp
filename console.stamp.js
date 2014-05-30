
Object.defineGetter=function(e,s,f){Object.defineProperty(e,s,{get:f})};
//
Object.defineGetter(Array.prototype,'contiguous',function(){return this.join('')});


Array.SliceOn=function(x){return Array.prototype.slice.call(x)};


//console.stamp=function(s){
 var o=console.stamp,t=new Date(),
 z=t.getTime(),m=Array.SliceOn(arguments),l=':',
 f=function(s,i){s=String(t['get'+s]());return s.length===i?'0'+s:s};
 m.unshift([f('Hours',1),l,f('Minutes',1),l,f('Seconds',1),l,f('Milliseconds',2),'|',t-o.t2||0,'\t'].contiguous);
 console.log.apply(this,m);
 o.t2=t;
};
