var greeting = require('../src/greeting');
describe("greeting", function () {
  it("says helloWorld", function () {
    expect(greeting.helloWorld()).toEqual("Hello world!");
  });
  it("says Hello, Brian", function () {
    expect(greeting.hello('Brian')).toEqual("Hello, Brian");
  });
  it("should say Goodbye, Brian", function(){
    expect(greeting.goodbye('Brian')).toEqual("Good Bye, Brian");
  })

});
