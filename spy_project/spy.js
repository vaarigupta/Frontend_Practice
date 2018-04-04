var first = prompt("enter the first name");
var last = prompt("enter the last name");
var age = prompt("enter the age");
var height = prompt("enter the height");
var nick = prompt("enter your nickname");
if ((first[0]===last[0]) && age>20 && age<30 && height >=170 && (nick[nick.length-1]=='y'))
{
  console.log("you are a spy");
}
else {
  console.log("sorry !, you are not spy");
}
