const assert = require("chai").assert;
const expect = require("chai").expect;
const calculations = require("../public/calculations");

/**
 * Unit Tests for Backend Functions
 */

describe("Total Amount Calculation Test", function () {
  it("should return the sum of the bill and tip amount as numbers if the input are numbers", function () {
    assert.equal(calculations.calculateTotal(10, 1), 11);
    assert.equal(calculations.calculateTotal(10, 10), 20);
    assert.equal(calculations.calculateTotal(1, 0), 1);
    assert.equal(calculations.calculateTotal(100.5, 10.3), 110.8);
  });

  it("should return an error when given invalid input", function () {
    expect(() => calculations.calculateTotal(0, -1)).to.throw(Error);
    expect(() => calculations.calculateTotal(-11, -121)).to.throw(Error);
    expect(() => calculations.calculateTotal(0, 0)).to.throw(Error);
    expect(() => calculations.calculateTotal(0, 1)).to.throw(Error);
    expect(() => calculations.calculateTotal(1, 0)).to.not.throw(Error);
    expect(() => calculations.calculateTotal(-0.01, 1.0)).to.throw(Error);
    expect(() => calculations.calculateTotal(-0.01, -1.0)).to.throw(Error);
  });
});

describe("Tip Calculation", () => {
  describe("calculateTip", () => {
    it("should calculate the correct tip amount for a given bill and percentage", () => {
      const testCases = [
        { totalBill: 50, tipPercentage: 15, expectedTipAmount: "7.50" },
        { totalBill: 100, tipPercentage: 20, expectedTipAmount: "20.00" },
        { totalBill: 75.5, tipPercentage: 10, expectedTipAmount: "7.55" },
        { totalBill: 100, tipPercentage: 110, expectedTipAmount: "110.00" },
      ];

      testCases.forEach((testCase) => {
        const { totalBill, tipPercentage, expectedTipAmount } = testCase;
        const tipAmount = calculations.calculateTip(totalBill, tipPercentage);
        expect(tipAmount).to.equal(expectedTipAmount);
      });
    });

    it("should throw an error for invalid input", () => {
      const invalidInputs = [
        { totalBill: 0, tipPercentage: 15 },
        { totalBill: 100, tipPercentage: -5 },
      ];

      invalidInputs.forEach((input) => {
        expect(() =>
          calculations.calculateTip(input.totalBill, input.tipPercentage)
        ).to.throw(Error);
      });
    });

    it("should handle edge cases", () => {
      // Test with the minimum bill and tip percentage values
      expect(() => calculations.calculateTip(0.01, 0)).to.not.throw(Error);

      // Test with the maximum bill and tip percentage values
      expect(() =>
        calculations.calculateTip(Number.MAX_SAFE_INTEGER, 100)
      ).to.not.throw(Error);

      // Test with a very high bill and a very low tip percentage
      const totalBill = 1e20; // 1 followed by 20 zeros
      const tipPercentage = 0.00000001; // 0.00000001%
      const expectedTipAmount = "10000000000.00";
      const tipAmount = calculations.calculateTip(totalBill, tipPercentage);
      expect(tipAmount).to.equal(expectedTipAmount);
    });
  });
});

describe("Split Amount Calculation Test", function () {
  it("should return the amount of the bill that each person will pay", function () {
    assert.equal(calculations.calculateSplitAmount(36.9, 3), 12.3);
    assert.equal(calculations.calculateSplitAmount(150, 5), 30.0);
    assert.equal(calculations.calculateSplitAmount(24.3, 6), 4.05);
    assert.equal(calculations.calculateSplitAmount(2500, 4), 625.0);
    assert.equal(calculations.calculateSplitAmount(199.99, 3), 66.66);
  });

  it("should throw an error when given invalid input", function () {
    expect(() => calculations.calculateSplitAmount(0, 1.5)).to.throw(Error);
    expect(() => calculations.calculateSplitAmount(500, -2)).to.throw(Error);
    expect(() => calculations.calculateSplitAmount(0, 0)).to.throw(Error);
    expect(() => calculations.calculateSplitAmount(-0.01, 1.0)).to.throw(Error);
    expect(() => calculations.calculateSplitAmount(345, 1.4)).to.throw(Error);
  });
});
