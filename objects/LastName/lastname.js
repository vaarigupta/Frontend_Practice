///////////////////
// PROBLEM 3 /////
/////////////////
// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName : function() {
  	// body...
  	console.log(this.name.split(" ")[1])
  }
}

employee.lastName()
/// split function is basically used for splitting of string at some of the points and convert into array of substrings