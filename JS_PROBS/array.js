var a = [ 1 , 2,3 ,"vaari" , true , 5.6]
console.log( a[2] ,"is present at index 2")
console.log("Before any changes" ,a)
a.push("345")
console.log("after push" ,a)
a.push("*")
console.log("after push" ,a)
a.pop()
console.log("after pop" ,a)
a.splice(4,0,"hello")
console.log("after splice" ,a)
a.splice(4,2,"hyy") 
/// there are 3 arguments in splice 
// 1-> specifying the index from where to start adding and deleting 
// 2-> no of elements to be deleted from the specfied index
// 3-> element to be added
console.log("after splice" ,a)
