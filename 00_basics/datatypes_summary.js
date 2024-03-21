 /* datatypes are officially categorized into two primitive and non-primitive
based on the they are called or accessed and how they are stored in memory*/
/* non primitive are also called reference
Types:
arrays, objects, function */
/* Primitive types are called by value when we copy them the reference original data is not given it is copied
& 7 types of primitive Types:
String, Number, Null, Boolean, Undefined, Symbol, Bigint */


//primitive
const name = "saad"
const age = 16
let isloggedIn = false
let bignum = 46461316564651646564565564535615512158486263232316n
console.log(bignum);
let ID = Symbol('123')
let A_ID = Symbol('123')
console.log(ID)
console.log(A_ID);
console.log(ID === A_ID);
let outsideTemp = null
let useremail;



//Non-primitive
const heroes =["Ironman" , "Batman" , "Hulk" , "Dr.strange" , "Syntry"]
let object = {
    hero1 : "Hulk",
    hero2 : "DR strange",
    hero3 : "spidey",
}
const myfunc = function name(params) {
    console.log("hello world");
}
console.log(typeof (myfunc));

//all non primitive when typeof is used result is object except func it is objectfunction.
