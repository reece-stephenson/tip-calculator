const assert = require('chai').assert;
const app = require('../app');

/**
 * Unit Tests for Backend Functions
 */

describe('Total Amount Calculation Test', function(){

    it('should return the sum of the bill and tip amount as numbers if the input are numbers', function(){
        assert.equal(app.calculateTotal(10,10), 20);
    });

    it('should return the sum of the bill and tip amount as numbers if the input are strings', function(){
        assert.equal(app.calculateTotal('10','10'), 20);
    });

});