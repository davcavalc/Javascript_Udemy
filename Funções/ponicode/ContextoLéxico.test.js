const rewire = require("rewire");

const ContextoL_xico = rewire("..\\ContextoLéxico");

const exec = ContextoL_xico.__get__("exec");

const Baskara = ContextoL_xico.__get__("Baskara");

// @ponicode
describe("Baskara", () => {
  test("0", () => {
    let result = Baskara(55, 11, 1);
    expect(result).toBe(-99);
  });
});
