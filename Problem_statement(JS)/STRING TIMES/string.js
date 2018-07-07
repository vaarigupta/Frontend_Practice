// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(st, n) {
	i =0;
 var str =""
   while(i<n)
   { 
   	 str =  str + st
   	 i++
   }
   console.log(str)
}

stringTimes("Hi",6)