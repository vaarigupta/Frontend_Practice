function compare(a,b ,c ,d)
{
	if(a>b && c>d)
	{   console.log(a ,"is greater than", b ,"and",c,"is greater than",d)
		console.log(true)
	}
	else if (a<b && c<d) {
		console.log(a ,"is less than", b ,"and",c,"is less than",d )
		console.log(true)
	}
	else if (a==b || c>d) {
		console.log(a ,"is equal to(only value same) ", b ,"or", c, "is greater than" ,d)
		console.log(true)
	}
	else if (a===b || c<d) {
		console.log(a ,"is equal equal to (type and value same)", b , "or",c,"is less than " , d)
		console.log(true)
	}
	else
	{   console.log("not an issue")
		console.log(false)
	}
}
compare(2,3 , 5,6)
compare(4,3 , 8,7)
compare(2,2 ,2,4)
compare(2,"1",4,5)
compare(2,"3",8,9)