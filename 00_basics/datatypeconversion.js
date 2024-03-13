//string to number conversion with one string and other an impure number
let my_name = "Saad"
let  nummy_name = Number(my_name)
let my_age = "16ab"
let  nummy_age = Number(my_name)
console.log("my_name",nummy_name);  // the result is NaN
console.log(typeof nummy_name);  //number
console.log(typeof (nummy_name));
console.log("my_age",nummy_age);// the result is NaN
console.log(typeof nummy_age);//number
console.log(typeof (nummy_age));


//Number to string conversion
let $Number = 33
console.log(typeof $Number);
let stringNumber = String($Number)
console.log("$Number",stringNumber);//the result in string is also 33
console.log(typeof (stringNumber));//string



//Number to boolean conversion with three diff numbers 
let _number = 1
console.log(typeof _number);
let boolean_number = Boolean(_number)
let S_number = 0
console.log(typeof S_number);
let booleanS_number = Boolean(S_number)
let T_number = 33
console.log(typeof T_number);
let booleanT_number = Boolean(T_number)
console.log("_number",boolean_number);//the result is true
console.log(typeof (boolean_number));//boolean
console.log("S_number",booleanS_number);//the result is false
console.log(typeof (booleanS_number));//boolean
console.log("T_number",booleanT_number);//the result is true
console.log(typeof (booleanT_number));//boolean





//String to boolean conversion with an empty and a filled string
let name_string = ""
console.log(typeof name_string);
let boolname_string = Boolean(name_string)
let Sname_string = "Saad"
console.log(typeof Sname_string);
let booleanSname_string = Boolean(Sname_string)
console.log("name_string",boolname_string);//the result is false
console.log(typeof (boolname_string));// boolean
console.log("Sname_string",booleanSname_string);//the result is true
console.log(typeof (booleanSname_string));//boolean





//Boolean into number conversion
let bool12 = true
console.log(typeof bool12);
let bool12_num = Number (bool12)
let bool14 = false
console.log(typeof bool14);
let bool14_num = Number (bool14)
console.log("bool12",bool12_num);//the result is 1
console.log(typeof (bool12_num));//number
console.log("bool14",bool14_num);//the result is 0
console.log(typeof (bool14_num));//number




//Boolean into string conversion
let bool16 = true
console.log(typeof bool16);
let bool16_str = String (bool16)
let bool18 = false
console.log(typeof bool18);
let bool18_str = String (bool18)
console.log("bool16",bool16_str);//the result is "true"
console.log(typeof (bool16_str));//string
console.log("bool18",bool18_str);//the result is "false"
console.log(typeof (bool18_str));//string


//null&undefined into num string and boolean
let score = null
console.log(typeof score);
let score_num = Number (score)
console.log(typeof (score_num));//number
console.log("score",score_num);//the result is 0
let score1 = null
console.log(typeof score1);
let score1_num = String (score)
console.log(typeof (score1_num));// string
console.log("score1",score1_num);//the result is "null"
let score2 = null
console.log(typeof score2);
let score2_num = Boolean (score)
console.log(typeof (score2_num));//boolean
console.log("score2",score2_num);//the result is false

let score3 = undefined
console.log(typeof score3);
let score3_num = Number (score3)
console.log(typeof (score3_num));//number
console.log("score3",score3_num);//the result is NaN
let score4 = undefined
console.log(typeof score4);
let score4_num = String (score4)
console.log(typeof (score4_num));//string
console.log("score4",score4_num);//the result is "undefined"
let score5 = undefined
console.log(typeof score5);
let score5_num = Boolean (score5)
console.log(typeof (score5_num));//boolean
console.log("score5",score5_num);//the result is false



/* self analysis

in string,number,null,undefined into boolean conversion if there is any 
value in num and str it will give true and if num and str are empty then the 
result will be false since undefined is the absencse of assigning a var 
and null is nothing,empty or 0 the result of both when converted into boolean 
is false, where false shows absence 0 and true shows presence 1 to ...*/

//true => 1; false => 0
