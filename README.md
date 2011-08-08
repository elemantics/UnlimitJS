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


UnlimitJS is 436 bytes gzipped and compressed.  Checkout [the site](http://limeblack.github.com/UnlimitJS/) for more info and examples.
