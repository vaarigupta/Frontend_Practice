
// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0



function caught_speeding(speed, is_birthday)
{   

  if (is_birthday) 
   {
     speed -=5
   } 
	

   if(speed<=60)
  {
     return 0
  }
  if(speed<=80 && speed >=61)
  {
  	return 1
  }
  if(speed>=81)
  {
  	return 2
  }
	


	}
  


var x = caught_speeding(65,true)//0
var y = caught_speeding(60,false)//0
var z = caught_speeding(85,true)//1
var w = caught_speeding(85,false)//2
console.log(x + " " + y + ' ' + z + ' ' + w )
console.log(caught_speeding(60, false)) //→ 0
console.log(caught_speeding(65, false)) //→ 1
console.log(caught_speeding(65, true)) //→ 0
console.log(caught_speeding(70,false))//1
console.log(caught_speeding(82,true))//1
console.log(caught_speeding(82,false))//2


