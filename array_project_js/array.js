var roster =[];
function add1(){
  var a = prompt("Enter the name");
  roster.push(a)
}
function remove1()
{
  var b =prompt("Enter the name to be removed");
  var t = roster.indexof(b);
  roster.splice(t , 1);
}
function display1()
{
  console.log(roster);
}
var ans ="";
op = prompt("Enter the page with y or n")
if(op==='y')
{
   while (ans!== "quit"){
    ans = prompt("Making a list of students - what would you like to do ? add / remove/ display/ quit")
  if (ans==="add")
  { add1();}
  else if (ans==="remove")
  { remove1();}
  else if (ans ==="display")
   {display1();}
}
else {
  ans = "quit"
}

}
else
{ alert("thanks for using our page")}
