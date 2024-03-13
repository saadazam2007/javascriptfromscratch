//basic arithematic operations
console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(2/3)
console.log(2**3)
console.log(2%3)

//addition of strings
let str1 = "Assalamualaikum"
let str2 = " Saad"
let str3 = str1 + str2
console.log(str3)


//addition of two diff datatypes
let number1 = 1 + "2"
console.log(typeof number1);
console.log(number1);//result is 12
let number2 = "1" + 2
console.log(typeof number2);
console.log(number2);//result is 12
let number3 = "1" + 2 + 5 + 6
console.log(typeof number3)
console.log(number3);//result is 1256
let number4 = 1 + 2 + 5 + "6"
console.log(typeof number4)
console.log(number4);//result is 86

/*JS treats the addition of diff datatypes by the first written datatype like if "1"+2+3
this will be treated as a string while 1+2+"3" will be treated as a number*/

//tricky conversions
console.log(+true);
console.log(+"");
let num1, num2, num3
num1 = num2 = num3 = 44+254
//prefer not to use


let gamecounter = 100
++gamecounter
console.log(gamecounter)


/*for post and pre increment and decrement operators & abstract operations 
visit tc39.es and MDN */