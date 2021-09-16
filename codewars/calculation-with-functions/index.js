/* 
each number can take in an opration, if no operation if present then it will return the number that matches its name

const zero = 0 unles given an operation to work with first. etc..

the operator functions will do their operation on a nunmber given and a number passed
time(5) will return a function that will multiply 5 to a number that is passed in

seven(times(five())) will pass the number 7 into the times(five) function which will then takes 5, and the original 7 and multiplies them together.
*/

const zero = (operation) => (!operation ? 0 : operation(0));
const one = (operation) => (!operation ? 1 : operation(1));
const two = (operation) => (!operation ? 2 : operation(2));
const three = (operation) => (!operation ? 3 : operation(3));
const four = (operation) => (!operation ? 4 : operation(4));
const five = (operation) => (!operation ? 5 : operation(5));
const six = (operation) => (!operation ? 6 : operation(6));
const seven = (operation) => (!operation ? 7 : operation(7));
const eight = (operation) => (!operation ? 8 : operation(8));
const nine = (operation) => (!operation ? 9 : operation(9));

const plus = (number) => (otherNumber) => otherNumber + number;
const minus = (number) => (otherNumber) => otherNumber - number;
const times = (number) => (otherNumber) => otherNumber * number;
const dividedBy = (number) => (otherNumber) => Math.floor(otherNumber / number);

/* 
different solution using the function declaration syntax

function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };
*/
