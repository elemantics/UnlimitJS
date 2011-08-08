(function(){//try{

// Browser
if(typeof document != 'undefined' && document.write){
  var console = {};
  console.log = function(i){
    if(i.match(/Pass$/))document.write('<div style="background:lime">'+i+'</div>');
    else if(i.match(/Fail$/))document.write('<div style="background:lime">'+i+'</div>');
    else document.write(i);
  }
}else{
// Server
  _ = require('underscore');
  Unlimit = require('./unlimit.js');
}

var assert = {};
assert.ok = function(value,message){
  if(value===true)console.log(message+' - Pass');
  else document.write(message+' - Fail');
}

_.isEqual[Unlimit](true);

var args = function(){
  return arguments;
}[Unlimit]();

assert.ok(
   'noop'[args](1,2,3,4 ) [_.isEqual]( [1,2,3,4] )
  ,'arguments receive correct value'
);

var thisvalue = function(){
  return this;
}[Unlimit]()
assert.ok(
    Object[thisvalue]() === Object
   ,'Correct this value'
);


var custom = function(){}
  [Unlimit](function(){
    return 'custom'
  })
assert.ok(
    Object[custom]() === 'custom'
   ,'Allows custom function'
);


var this_1st_arg = function(first){return first}[Unlimit](true)

assert.ok(
    Object[this_1st_arg]() === Object
   ,'Allows custom function'
);


//}catch(e){console.log('<h1>'+e+'</h1>')}
})()
