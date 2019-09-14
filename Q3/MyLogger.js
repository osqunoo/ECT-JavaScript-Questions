config = {
    log: true,
    warn: true,
    error: true
   };
class $logger{
 

    static log(desc,value) {
    if(config.log){
        console.log(desc+""+value);
    }
   }
   static warn(desc,value) {
    if(config.warn){
        console.warn(desc+""+value);
    }
   }
   static error(desc,value) {
    if(config.error){
        console.error(desc+""+value);
    }
   }
}