const A_num = 123456
console.log(A_num);

const B_num = new Number (285681)
console.log(B_num);

console.log(B_num.toString().length);
console.log(B_num.toFixed(2));


const another_num = 1229.8287
console.log(another_num.toPrecision(4));


const $num = 100000000000
console.log($num.toLocaleString());// Paranthesis are used to execute methods


//+++++++++++++++++++++++++++ MATH's +++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-29));// Take absolute value like if a neg value is given using "abs" will change the value to positive
console.log(Math.round(59.099))// round off the value
console.log(Math.ceil(4.0123));// It takes the next value no matter how little the increment is after decimal
console.log(Math.floor(4.999));// It works same but opposite to ceil like if we take the highest value in decimal it won't be roundoff
console.log(Math.min(4, 5, 0.9 , 0.7 , 0.3331 , 0.88910 , 0.099 , 0.089));
console.log(Math.max(4, 5, 0.9 , 0.7 , 0.3331 , 0.88910 , 0.099 , 0.089));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1) + 10));

