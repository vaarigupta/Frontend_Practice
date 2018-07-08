// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:

// Add a method called nameLength that prints out the
// length of the employees name to the console.


var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function()
  {
  	return this.name.length
  }
}
 // var ans = employee.nameLength()
console.log(employee.nameLength())
