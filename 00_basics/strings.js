const name = "SaadAzamKhan"
const age = 16

//console.log(name + age + "anyvalue") but it's not moderate nor it is quite readable
//here we can use string interpolation

console.log(`My name is ${name.toUpperCase()} and my age is ${age}`);

const gameName = new String("SaadAzamKhan")
console.log(gameName.__proto__);
console.log(gameName[0]);
console.log(gameName.toLocaleLowerCase());// to change a gamename to lowercase
console.log(gameName.toLocaleUpperCase());// to change a gamename to uppercase
console.log(gameName.charAt(3));// this method is use to find out which character is at the defined index
console.log(gameName.indexOf('n')); // this method is use to find out at which index our character lies


const slicegameName = gameName.substring(4,8)// it is a method for slicing
console.log(slicegameName);

const slice2 = gameName.slice(-8,8)// it is also a method for slicing but with more advanced features
console.log(slice2);


const fortrim = "      SaadAzam     "
console.log(fortrim);
console.log(fortrim.trim(),"is me");



const forreplace = "SaadAzam"
console.log(forreplace);
console.log(forreplace.replace('Saad','Hammas'));// this method is used to replace something from the variable


console.log(forreplace.includes("Khan"))// it is used to find out whether somethin is present or not in the variable


const gamer = "the-Rad-Brad/Hollow/Zwormeez-gaming/techno-gamerz"
console.log(gamer.split("/"));//this method is used to split a string using any component inthe string


