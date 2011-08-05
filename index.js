(function(){

var prop = '__Chain__',
    overriden,
    root = this,
    slice = Array.prototype.slice,
    exit;

var Chain = function(fn,opt_fn_or_bool){
  if(opt_fn_or_bool===true){
    fn.toString = function(){
      prototype['Chain'].fn = function(){
        var arg = slice.call(arguments,0);
        arg.unshift(this);
        return fn.apply(root,arg);
      }
      return prop;
    }
  }else{
    fn.toString = function(){
      prototype['Chain'].fn = opt_fn_or_bool || fn;
      return prop;
    }
  }
  return fn;
}
Chain.version = .01;

overriden = Object.prototype[prop] || Object.prototype.isPrototypeOf || function(){};

// If Chain versio => has been loaded, exit
if(typeof overriden['Chain'] == 'funciton' && overriden['Chain'].version >= Chain.version){
  Chain = overriden['Chain'];
  exit = true;
}

// Server side support along with browser
if(typeof module != 'undefined' && module.exports) {
  module.exports = Chain;
}else{
  root['Chain'] = Chain;
}
// Exit if Chainy has been included before
if(exit)return;
console.log('loaded');
function prototype(object){
  if(prototype['Chain'].fn){
    var ret = prototype['Chain'].fn.apply(this,arguments);
    prototype['Chain'].fn = undefined;
    return ret;
  }
  return overriden.call(this,object);
}

try{
  Object.defineProperty(Object.prototype,prop,{value:prototype,writable:true,configurable:true});
  for(var i in {})if(i===prototypeprop) throw 0;
}catch(error){
  // fallback for old IEs
  delete Object.prototype[prop];
  overriden = Object.prototype[prop = 'isPrototypeOf'];
  Object.prototype[prop] = prototype;
}
Object.prototype[prop]['Chain'] = Chain;
Chain(Chain,true);

})()
