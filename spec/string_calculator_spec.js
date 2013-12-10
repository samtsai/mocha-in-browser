// implement chai's should interface
var should = chai.should();

describe("StringCalculator", function() {

  describe('#add()', function() {
    it('should return 0 for an empty string', function() {
      StringCalculator.add('').should.eq(0);
    });

    it('should return the number if only one is passed', function() {
      StringCalculator.add('1').should.eq(1);
    });

    it('should sum the two numbers', function() {
      StringCalculator.add('1,2').should.eq(3);
    });

    // Allow the Add method to handle an unknown amount of numbers
    it('should sum all the numbers passed in', function() {
      StringCalculator.add('1,2,3,4,5').should.eq(1+2+3+4+5);
    });
  });
});
