
function compare(a,b)
{
	if(a>b)
	{   console.log(a ,"is greater than", b)
		console.log(true)
	}
	else if (a<b) {
		console.log(a ,"is less than", b)
		console.log(true)
	}
	else if (a==b) {
		console.log(a ,"is equal to(only value same) ", b)
		console.log(true)
	}
	else if (a===b) {
		console.log(a ,"is equal equal to (type and value same)", b)
		console.log(true)
	}
	else
	{   console.log("not an issue")
		console.log(false)
	}
}
compare(2,3)
compare(4,3)
compare(2,2)
compare(2,"2")
compare(2,"3")