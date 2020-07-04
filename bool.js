compare = "hello"==="hi"
//console.log(compare)
const lupin = 5 === 5
const harry = 2
const ron = 4
const ginny = (harry + 2) === ron
const dumbledore = ginny + "hello"
const sth = harry !== "harry"

//expressing false in number
num0 = 0
num1 = NaN

//exprsiing false in string
string = ""//(empty string)

//expressing false in boolean
bool = false

//examine
/* 
console.log(num0)
console.log(num1)
console.log(string)
console.log(bool)
*/

//! (not) operator show the opposite boolean

//what does &&operator do? 
//let's examine
const leftFalse = false && true
const bothFalse = false && false
const leftTrue = true && false
const bothTrue = true && true

const print_andOp = `And operator \n\nleft side false : ${leftFalse}\nboth side false : ${bothFalse}\nleft side true : ${leftTrue}\nboth side true : ${bothTrue} \n\n`

console.log(print_andOp)

//we found that on And operator if left side is false then return left side
//if the left side is true then return the right side

//what does the Or operator do?
//let's examine

const left_false = false || true
const both_false = false || false
const left_true = true || false
const both_true = "hi" || true

const print_orOp = `Or operator \n\nleft side false : ${left_false}\nboth side false : ${both_false}\nleft side true : ${left_true}\nboth side true : ${both_true} `

console.log(print_orOp)

//we found that it is similar to the and operator, the only diference is
//if the left is true we return left
//if the left is false we return right

//in sum we found that both AND and OR operator look at the left side
//and decide if it is true or not















