//this is a excercise about conditinal statement in Javascript

let a = 100
if (a % 2){
	a = 90
}
const b = a+1

// in this part of code because of the false statement in if
// the code will not run

let c = 9 || 10
if (c > 5){
	c = 90
}
const d = a + 1

//now let's introduce the concept of else
//example

const total = 6
let result = ""
if (total < 5){
	result = "fail"
}else{
	result = "pass"
}

//only one of the suitable branch will be operated 
//and once one branch is operated it will ignore the rest
 
