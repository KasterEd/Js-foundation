//practice of the function used in the javascript

//there is 2 way of creating a function
//example
greet = function(a,b) {
	return a+ " says, hello "+b
}

secret = function(a,b){
	a=a+9
	return a+b
}

console.log(secret(10,15))
//like this we can now on directly use the variable name to call function 

//another one is Arrow function 
//use arrow as a tool 

const makeBasket = () => {
	//statement
	const b = 500
	return b
}

ace = makeBasket
ice = makeBasket

//what we got here are not the value of b, but a function named makeBasket
//this means that what stored in lhs is a function on rhs
//in order to run function we need to...
//we run it by adding () after the function name
const result = makeBasket(70)
console.log(result)

//example
const fn = (a,b) => {
	let c = a+b
	if(c>2){
		c = 0
	}
	return c + 1
}
const ans = fn(12,11)
console.log(ans)

//excercise

//return value
const calculate = () =>{
	return "hello" + !"hello"
}
console.log(calculate())

//here comes the question of what if we add ; after statement
const keeper = () => {
	return 5;
}
let snitch = keeper
snitch = !keeper
snitch = !keeper()
console.log(keeper())

//we see it works



