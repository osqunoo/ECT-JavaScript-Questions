var config = {
    log: true,
    warn: true,
    error: true
   };

   function log(desc,value) {
    if(config.log){
        console.log(value);
    }
   }
   function warn(desc,value) {
    if(config.warn){
        console.warn(value);
    }
   }
   function error(desc,value) {
    if(config.error){
        console.error(value);
    }
   }

   function printGeneral(type,value){
       switch(type){
           case "Logging":
                config.log ? console.log(value): '';
               break;
            case "Warning":
                config.warn ? console.warn(value): '';
               break;
            case "Error":
                config.error ? console.error(value): '';
                break;
            default:
                console.log(value);
                break;
       }
   }
   
   log('Logging', { b: 213 });
   warn('Warning', { a: 17 });
   error('Error', { c: 37 });


   printGeneral('Logging', { b: 213 });
   printGeneral('Warning', { a: 17 });
   printGeneral('Error', { c: 37 });