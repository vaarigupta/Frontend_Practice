// PROBLEM 2: MONKEY TROUBLE
//
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkey( asmile , bsmile)
{
  if (asmile ==true && bsmile== true)
  {
    return true
  }
  if (asmile ==false && bsmile== false)
  {
    return true
  }
  else {
    return false
  }
}
