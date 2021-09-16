describe("Testing Calcultor", function () {
  it("checkAddition", () => {
    console.log(`Test Addition: eval(2 + 3) = 5`);
    expect(eval(2 + 3)).toEqual(2 + 3);
  });
  it("checkSubstraction", () => {
    console.log(`Test Substraction: eval(2 - 3) = -1`);
    expect(eval(2 - 3)).toEqual(2 - 3);
  });
  it("checkMultiplication", () => {
    console.log(`Test Multiplication: eval(2 * 3) = 6`);
    expect(eval(2 * 3)).toEqual(2 * 3);
  });
  it("checkDivision", () => {
    console.log(`Test Division: eval(6 / 3) = 2`);
    expect(eval(6 / 3)).toEqual(6 / 3);
  });
});
