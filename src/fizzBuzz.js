// def fizzbuzz(number)
// 	  if number % 15 == 0
//       'fizzbuzz'
//     elsif number % 3 == 0
// 			'fizz'
// 		elsif number % 5 == 0
// 			'buzz'
// 		else
// 			number
// 		end	
// end    

class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }
  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByThreeAndFive(number) {
    return this._isDivisibleBy(number, 15);
  }

  says(number) {
    if(this.isDivisibleByThreeAndFive(number)) {
      return "Fizzbuzz";
    }

    if(this.isDivisibleByThree(number)) {
      return "Java";
    }

    if(this.isDivisibleByFive(number)) {
      return "Buzz";
    }
  }
}