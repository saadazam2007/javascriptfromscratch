//Array 

//defining an array
const myArr = [1,2,3,4]
const myArr1 = [1,true,"hitesh"]
const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10)

//arrays elements can be called by their index like:
// console.log(myArr[0]);


//Here the index starts from 0



//Array Methods:


myArr.push(11,12)// To insert a new element in an array
myArr.pop()// It removes the last element of an array 
// console.log(myArr);



myArr1.unshift("Saad",1)// to insert an element at the start but not well in optimization aspect it put load because the indexing is changed
// console.log(myArr1);
myArr1.shift()
myArr1.shift()// It is same as pop but it removes the element from the start
// console.log(myArr1);

// console.log(myArr.includes(7));
// console.log(myArr1.indexOf("hitesh"));


const myArr3 = myArr2.join()// It changes the datatype to string and joins
// console.log(myArr3)
// console.log(typeof myArr3);



//SLICE & SPLICE



console.log("A " ,myArr );
const myn1 = myArr.slice(1,3)// Slice just includes the first term of the range and last just before the range means doesn't includes the end defining index of range
console.log("SLICED \n",myn1 );
console.log("B " ,myArr );
const myn2 = myArr.splice(1,3)// Splice also includes the range in the result
console.log("SPLICED \n",myn2 );
console.log("C " ,myArr );

// but the major difference between slice & splice is that slice doesn't effect the original array while splice do have effect on the original array













