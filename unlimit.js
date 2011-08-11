(function(){
var prop = '__Unlimit__',
    overriden,
    root = this,
    slice = Array.prototype.slice,
    exit;

var Unlimit = function(fn,opt_fn_or_bool){
  if(opt_fn_or_bool===true){
    fn.toString = function(){
      prototype['Unlimit'].fn = function(){
        return fn.apply(root,[].concat([this],slice.call(arguments,0)));
      }
      return prop;
    }
  }else{
    fn.toString = function(){
      prototype['Unlimit'].fn = opt_fn_or_bool || fn;
      return prop;
    }
  }
  return fn;
}
Unlimit.version = 0.5;

overriden = Object.prototype[prop] || Object.prototype.isPrototypeOf || function(){};

// If Unlimit version has been loaded, exit
if(typeof overriden['Unlimit'] == 'function' && overriden['Unlimit'].version >= Unlimit.version){
  Unlimit = overriden['Unlimit'];
  exit = true;
}
// Expose Unlimit() server side support along with browser
if(typeof module != 'undefined' && module.exports) {
  module.exports = Unlimit;
}else{
  root['Unlimit'] = Unlimit;
}
// Exit if Unlimit has been included before
if(exit)return;

function prototype(object){
  if(prototype['Unlimit'].fn){
    var ret = prototype['Unlimit'].fn.apply(this,arguments);
    prototype['Unlimit'].fn = undefined;
    return ret;
  }
  return overriden.call(this,object);
}

try{
  Object.defineProperty(Object.prototype,prop,{value:prototype,writable:true,configurable:true});
  for(var i in {})if(i===prop) throw 0;
}catch(error){
  // fallback for people supporting old IEs
  delete Object.prototype[prop];
  overriden = Object.prototype[prop = 'isPrototypeOf'];
  Object.prototype[prop] = prototype;
}
Object.prototype[prop]['Unlimit'] = Unlimit;
Unlimit(Unlimit,true);

})()
