let assert = require('assert');
let calculator = require('../calculator.js');

describe('My calculator', function() {
	describe('getResult', function() {
      //Test for + operator
    		it('2 + 3 should return 5', function() {
      			assert.equal(5, calculator.getResult('+',2,3));
		      });
        it('-4 + 2 should return -2', function() {
            assert.equal(-2, calculator.getResult('+',-4,2));
          });
        it('4 + -2 should return 2', function() {
            assert.equal(2, calculator.getResult('+',4,-2));
          });
        it('-4 + -2 should return -6', function() {
            assert.equal(-6, calculator.getResult('+',-4,-2));
          });
        it('0.5 + 0.2 should return 0.7', function() {
            assert.equal(0.7, calculator.getResult('+',0.5,0.2));
          });
      //Test for - operator
    		it('5 - 3 should return 2', function() {
      			assert.equal(2, calculator.getResult('-',5,3));
        	});
        it('5.5 - 3.3 should return 2.2', function() {
            assert.equal(2.2, calculator.getResult('-',5.5,3.3));
          });
        it('0 - 3 should return -3', function() {
            assert.equal(-3, calculator.getResult('-',0,3));
          });
        it('10 - 30 should return -20', function() {
            assert.equal(-20, calculator.getResult('-',10,30));
          });
      //Test for * operator
    		it('5 * 3 should return 15', function() {
      			assert.equal(15, calculator.getResult('*',5,3));
        	});
        it('-5 * 4 should return -20', function() {
            assert.equal(-20, calculator.getResult('*',-5,4));
          });
        it('-5 * -4 should return 20', function() {
            assert.equal(20, calculator.getResult('*',-5,-4));
          });
        it('2.2 * 2 should return 4.4', function() {
            assert.equal(4.4, calculator.getResult('*',2.2,2));
          });
        it('0 * 4 should return 0', function() {
            assert.equal(0, calculator.getResult('*',0,4));
          });
      //Test for / operator
    		it('100 / 5 should return 20', function() {
      			assert.equal(20, calculator.getResult('/',100,5));
        	});
    		it('any number / by 0 should return Infinity', function() {
      			assert.equal('Infinity', calculator.getResult('/',2,0));
        	});
        it('0 / any number should return 0', function() {
            assert.equal(0, calculator.getResult('/',0,20));
          });
    		it('10 / 50 should return 0.2', function() {
      			assert.equal(0.2, calculator.getResult('/',10,50));
        	});
        it('-10 / 5 should return -2', function() {
            assert.equal(-2, calculator.getResult('/',-10,5));
          });
        it('-10 / -5 should return 2', function() {
            assert.equal(2, calculator.getResult('/',-10,-5));
          });
        it('10 / -5 should return -2', function() {
            assert.equal(-2, calculator.getResult('/',10,-5));
          });
        it('10.5 / 5 should return 2.1', function() {
            assert.equal(2.1, calculator.getResult('/',10.5,5));
          });
      //Test for invalid input
    		it('Invalid operator should return - Not a valid operator message', function() {
      			assert.equal('Not a valid operator', calculator.getResult('||',100,5));
        	});
    		it('num2 with string value - Not a valid input message', function() {
      			assert.equal('Not a valid input', calculator.getResult('-',100,'x'));
        	});
        it('num1 with string value - Not a valid input message', function() {
            assert.equal('Not a valid input', calculator.getResult('+','y',10));
          });
        it('num1 and num2 with string values - Not a valid input message', function() {
            assert.equal('Not a valid input', calculator.getResult('/','x','x'));
          });
    		
 	 });
});
