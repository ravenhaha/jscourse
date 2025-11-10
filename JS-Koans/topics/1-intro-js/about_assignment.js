
describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = checkMessage;
    // Присвойте значение переменной temp
    expect(temp).toBe(checkMessage);
  });
  
  it("global variables", function() {
    let temp = checkMessage; // Неиспользование let - это пример. На практике всегда используйте let.
    // глобальные переменные присваиваются объекту window
    expect(window.checkMessage).toBe(temp);
  });
});


