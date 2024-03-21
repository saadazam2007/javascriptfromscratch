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


//Memory are  of two types one is stack and second is heap
/* Stack is used in primitive datatypes and heap is used in non-primitive datatypes*/
/* in primitive types you get the copied version of the original one when changes are made only affect the copied version
like:
let a = 1
let b = a
let b = 2
the result of b will be 2 while a will not be changed and when we take b = a a copy of a
will be given to b not the reference point*/ 
/* in non-primitive the original reference is stored every change will take effect on the original value
like:
let user1 = {
    name: "saad",
    email: "saadazamkhan5900@gmail.com",
}  
let user2 = user1
here copy won't be given instead the reference point will be provided like the real value 
now if we change something
user2.name = "Anas"
it will also take affect on user1*/
