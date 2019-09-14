 
 

   var a;
   var b;
   
   function execute(code, variables) {
       var obj = variables;
        a = obj.a;
        b = obj.b; 
    return new Function(code)();
   }
  