const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');

/**
 * Unit Tests for Backend Functions
 */

describe('Total Amount Calculation Test', function(){

    it('should return the sum of the bill and tip amount as numbers if the input are numbers', function(){
        assert.equal(app.calculateTotal(10, 1), 11);
        assert.equal(app.calculateTotal(10, 10), 20);
        assert.equal(app.calculateTotal(0, 1), 1);
        assert.equal(app.calculateTotal(100.50, 10.30), 110.80);
    });

    it('should return an error when given invalid input', function(){
        expect(() => calculateTotal(0, -1)).to.throw(Error);
        expect(() => calculateTotal(-11, -121)).to.throw(Error);
        expect(() => calculateTotal(0, 0)).to.throw(Error);
        expect(() => calculateTotal(-0.01, 1.0)).to.throw(Error);
        expect(() => calculateTotal(-0.01, -1.0)).to.throw(Error);
    });

});


describe('Tip Calculation', () => {
    describe('calculateTip', () => {
        it('should calculate the correct tip amount for a given bill and percentage', () => {
        const testCases = [
            { totalBill: 50, tipPercentage: 15, expectedTipAmount: '7.50' },
            { totalBill: 100, tipPercentage: 20, expectedTipAmount: '20.00' },
            { totalBill: 75.5, tipPercentage: 10, expectedTipAmount: '7.55' },
        ];
    
        testCases.forEach((testCase) => {
            const { totalBill, tipPercentage, expectedTipAmount } = testCase;
            const tipAmount = app.calculateTip(totalBill, tipPercentage);
            expect(tipAmount).to.equal(expectedTipAmount);
        });
        });
    
        it('should throw an error for invalid input', () => {
        const invalidInputs = [
            { totalBill: 0, tipPercentage: 15 },
            { totalBill: 100, tipPercentage: -5 },
            { totalBill: 100, tipPercentage: 110 },
        ];
    
        invalidInputs.forEach((input) => {
            expect(() => app.calculateTip(input.totalBill, input.tipPercentage)).to.throw(Error);
        });
        });
    
        it('should handle edge cases', () => {
        // Test with the minimum bill and tip percentage values
        expect(() => app.calculateTip(0.01, 0)).to.not.throw(Error);
        
        // Test with the maximum bill and tip percentage values
        expect(() => app.calculateTip(Number.MAX_SAFE_INTEGER, 100)).to.not.throw(Error);
    
        // Test with a very high bill and a very low tip percentage
        const totalBill = 1e20; // 1 followed by 20 zeros
        const tipPercentage = 0.00000001; // 0.00000001%
        const expectedTipAmount = '10000000000.00';
        const tipAmount = app.calculateTip(totalBill, tipPercentage);
        expect(tipAmount).to.equal(expectedTipAmount);
        });
  });
  
})