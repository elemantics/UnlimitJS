**UnlimitJS brings chaining to native JavaScript objects without extending objects' `prototype`s.**  It has a simply [API](index.htm#API) and increases the readability of common code.

1.  `for in` loops are safe to use
2.  Chaining is super easy `obj[fun]()[fun]()`
3.  Unlimitjs **is** Javascript, no compiling

UnlimitJS intends to bring chaining and readability to Javascript.  
Instead of writing:`trim(' string ')` you write `' string  '[trim]()`

    var trim = function(){
      return this.replace(/^\s+|\s+$/g,'');
    }[Unlimit]();
    
    ' string '[trim]();


UnlimitJS is 436 bytes gzipped and compressed.  UnlimitJs has been tested and works in IE6+, Firefox 3.0+, Safari 3.0+, Chrome and Opera.

##API
**Calling `[Unlimit]()` binds the this context to the object you are calling on.**

    var yell = function(){
      return alert(''+this);
    }[Unlimit]();
    
    'This string is bond to "this" in function.'[yell]()

**Calling `[Unlimit](true)` tells the object your calling on to be passed as the first argument to the function.** 

    var yell = function(obj){
      return alert(''+obj);
    }[Unlimit](true);
    
    '1st argument is bound to this string.'[yell]()

**Calling `object[Unlimit](function(){})` allows you to unlimit objects other then `Function`. 
s.** 

    var yell = {};
    yell[Unlimit](function(){
      alert(''+this);
    });
     
    'This string is bond to the attached function.'[yell]()


Checkout [the site](http://limeblack.github.com/UnlimitJS/) for more info and examples.
