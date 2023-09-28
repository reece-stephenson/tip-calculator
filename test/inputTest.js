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