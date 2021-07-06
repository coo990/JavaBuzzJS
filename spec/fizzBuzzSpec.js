describe('fizzbuzz', function() {
  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Javabuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Javabuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
    });

    it('is divisible by both 3 and 5', function() {
      fizzbuzz = new Javabuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      fizzbuzz = new Javabuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Javabuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });
});