module.exports= {
    
    helloWorld: function () {
        return "Hello World!";
    },
    hello: function(name,lang) {
       var greeting;
           //    if(name === undefined || name === "") {
        if(!name){
         greeting = "Hello, what's your name?"
       } else if(lang ==='Italian') {
         greeting = "Ciao, " + name;
       } else {
         greeting =  "Hello, " + name;
       }
       
       return greeting;
    }
}