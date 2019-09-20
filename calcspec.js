describe("Add", function() {
  let calculator_instance = new Calculator();
  it("should return 10", function() {
    let result = calculator_instance.add(3, 5, 2);
    expect(result).toBe(10);
  });
});

describe("Multiply", function() {
  let calculator_instance = new Calculator();
  it("should return 60", function() {
    let result = calculator_instance.multiply(30, 2);
    expect(result).toBe(60);
  });
});

//last
describe("last", function() {
  let calculator_instance = new Calculator();

  it("should return 3", function() {
    calculator_instance.add(1, 2);
    let result = calculator_instance.last();
    expect(result).toBe(3);
  });
});

//Memory Slots
describe("Allow the calculator_instanceulator to remember more stuff", function() {
  let calculator_instance = new Calculator();
  it("should return 3", function() {
    calculator_instance.add(1, 2);
    calculator_instance.set_slot(1);
    let result = calculator_instance.get_slot(1);
    expect(result).toBe(3);
  });
  it("should return 30", function() {
    calculator_instance.add(10, 20);
    calculator_instance.set_slot(2);
    let result = calculator_instance.get_slot(2);
    expect(result).toBe(30);
  });
  it("should return 300", function() {
    calculator_instance.add(100, 200);
    calculator_instance.get_slot(1);
    calculator_instance.get_slot(2);
    let result = calculator_instance.last();
    expect(result).toBe(300);
  });
});
