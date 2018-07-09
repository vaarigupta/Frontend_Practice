var header = document.querySelector("h1")

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput
}
setInterval("changeHeaderColor()",500);


var restart = document.getElementById("restart");
var squares = document.querySelectorAll('td');


function clear()
{
  for(var i = 0 ; i< squares.length ; i++)
  {
    squares[i].textContent = "";
  }
}

restart.addEventListener('click',clear)

function change()
{
  if(this.textContent === '')
  {
    this.textContent = 'X';
  }
  else if(this.textContent === 'X')
  {
     this.textContent = 'O'
  }
  else
  {
    this.textContent = ''
  }
}


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',change)
}

