const assert = require('chai').assert;
const app = require('../app');

// Tests that check the input validation of our bill input field
describe('Inputs', () => {
    describe('Bill Amount Input Test', function () {

        it('should return false if the bill is not a number ', function () {
            assert.equal(app.validateBillInput('a'), false);
        });
    
        it('should return false if the bill is a negative number ', function () {
            assert.equal(app.validateBillInput(-1), false);
        });
    
        it('should return false if the bill is a zero ', function () {
            assert.equal(app.validateBillInput(0), false);
        });
    
        it('should return true if the bill is a positive number', function () {
            assert.equal(app.validateBillInput(1), true);
        });
    
    });
    
    // Tests that check the input validation of our tip percentage input field
    describe('Tip Percentage Input Test', function () {
    
        it('should return false if the tip is not a number ', function () {
            assert.equal(app.validateTipInput('a'), false);
        });
    
        it('should return false if the tip is a negative number ', function () {
            assert.equal(app.validateTipInput(-1), false);
        });
    
        it('should return false if the tip is a zero ', function () {
            assert.equal(app.validateTipInput(0), false);
        });
    
        it('should return false if the value is greater than 100 ', function () {
            assert.equal(app.validateTipInput(101), false);
        });
    
        it('should return true if the value is between 1 and 100', function () {
            assert.equal(app.validateTipInput(1), true);
        });
    
    });
    
    // Tests that check the input validation of our number of people input field
    describe('Number of People Input Test', function () {
    
        it('should return false if the number of people is not a number ', function () {
            assert.equal(app.validatePeopleInput('a'), false);
        });
    
        it('should return false if the number of people is a negative number ', function () {
            assert.equal(app.validatePeopleInput(-1), false);
        });
    
        it('should return false if the number of people is a zero ', function () {
            assert.equal(app.validatePeopleInput(0), false);
        });
    
        it('should return false if the number of people is a decimal ', function () {
            assert.equal(app.validatePeopleInput(1.5), false);
        });
    
        it('should return true if the number of people is a positive integer', function () {
            assert.equal(app.validatePeopleInput(2), true);
        });
    
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
            const tipAmount = calculateTip(totalBill, tipPercentage);
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
            expect(() => calculateTip(input.totalBill, input.tipPercentage)).to.throw(Error);
        });
        });
    
        it('should handle edge cases', () => {
        // Test with the minimum bill and tip percentage values
        expect(() => calculateTip(0.01, 0)).to.not.throw(Error);
        
        // Test with the maximum bill and tip percentage values
        expect(() => calculateTip(Number.MAX_SAFE_INTEGER, 100)).to.not.throw(Error);
    
        // Test with a very high bill and a very low tip percentage
        const totalBill = 1e20; // 1 followed by 20 zeros
        const tipPercentage = 0.00000001; // 0.00000001%
        const expectedTipAmount = '0.01';
        const tipAmount = calculateTip(totalBill, tipPercentage);
        expect(tipAmount).to.equal(expectedTipAmount);
        });
  });
  
})