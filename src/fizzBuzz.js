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
  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }

  isDivisibleByFive(number) {
    return (number % 5 === 0);
  }

  isDivisibleByThreeAndFive(number) {
    return (number % 15 === 0)
  }
}