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

  test("1", () => {
    let result = Baskara(3, -5.48, "#FF00FF");
    expect(result).toBe(NaN);
  });

  test("2", () => {
    let result = Baskara(3, -100, "black");
    expect(result).toBe(NaN);
  });

  test("3", () => {
    let result = Baskara(3, 0, "black");
    expect(result).toBe(NaN);
  });

  test("4", () => {
    let result = Baskara(4, -100, "red");
    expect(result).toBe(NaN);
  });

  test("5", () => {
    let result = Baskara(4, 1, "hsl(10%,20%,40%)");
    expect(result).toBe(NaN);
  });

  test("6", () => {
    let result = Baskara(3.0, -100, "#FF00FF");
    expect(result).toBe(NaN);
  });

  test("7", () => {
    let result = Baskara(-Infinity, -Infinity, "");
    expect(result).toBe(NaN);
  });

  test("8", () => {
    let result = Baskara(Infinity, Infinity, "");
    expect(result).toBe(NaN);
  });

  test("9", () => {
    let result = Baskara(5, 0, "red");
    expect(result).toBe(NaN);
  });

  test("10", () => {
    let result = Baskara(4, -100, "hsl(10%,20%,40%)");
    expect(result).toBe(NaN);
  });

  test("12", () => {
    let result = Baskara(4, 0, "#F00");
    expect(result).toBe(NaN);
  });

  test("13", () => {
    let result = Baskara(undefined, undefined, undefined);
    expect(result).toBe(NaN);
  });

  test("13", () => {
    let result = Baskara(2, 2, 2);
    expect(result).toBe(-12);
  });

  test("14", () => {
    let result = Baskara(12, 12, 12);
    expect(result).toBe(-432);
  });
});
