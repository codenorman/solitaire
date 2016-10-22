var HW=require("../../src/helloWorld.js");

describe("Hello World!", function() {
    it("says hello", function(){
        expect(HW.helloWorld()).toEqual("Hello World!");
    })
    it("hello Brian", function(){
        expect(HW.hello("Brian")).toEqual("Hello, Brian");
    })
    it("hello with no name ", function(){
        expect(HW.hello()).toEqual("Hello, what's your name?");
    });
    it("hello in Italian ", function(){
        expect(HW.hello("Hong", "Italian")).toEqual("Ciao, Hong");
    });
    it("hello with '' name ", function(){
        expect(HW.hello("")).toEqual("Hello, what's your name?");
    });
    it("hello with 123 name ", function(){
        expect(HW.hello(123)).toEqual("Hello, 123");
    });

} )