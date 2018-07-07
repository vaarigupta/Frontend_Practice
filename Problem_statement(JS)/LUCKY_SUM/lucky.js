// PROBLEM 4: LUCKY SUM

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){

  if(a==13)
  {
  	return 0
  }
  else if(b == 13)
  {
  	return a
  }
  else if (c==13) 
  {
    return a+b
  }
  else
  {
  	return a +b +c
  }

}


var x = luckySum(1,2,3)
var y = luckySum(13,1,3)
var z = luckySum(1,13,3)
var a = luckySum(1,2,13)
var b = luckySum(1,2,5)
console.log(x + " " + y + " " + z + " " + a +" " +b )

