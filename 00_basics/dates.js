//DATES


let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

let Mycreateddate1 = new Date(2024 , 0 , 22)
let Mycreateddate2 = new Date(2024-1-22)
let Mycreateddate3 = new Date(2024 , 5 , 22 , 3 , 15 , 63)
let Mycreateddate4 = new Date('2024-7-22,03:54:00')
let Mycreateddate5 = new Date('December 17, 1995 03:24:00')
let Mycreateddate6 = new Date ("2023-01-14")
let Mycreateddate7 = new Date ("01-14-2023")



// console.log(`First\n${Mycreateddate1.toLocaleString()}`);
// console.log(`Second\n${Mycreateddate2.toLocaleString()}`);
// console.log(`Third\n${Mycreateddate3.toLocaleString()}`);
// console.log(`Fourth\n${Mycreateddate4.toLocaleString()}`);
// console.log(`Fifth\n${Mycreateddate5.toLocaleString()}`);
// console.log(`Sixth\n${Mycreateddate6.toLocaleString()}`);
// console.log(`Seventh\n${Mycreateddate7.toLocaleString()}`);




let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Mycreateddate7.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getFullYear());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());



console.log(newDate.toLocaleString('default', {
    weekday: "long",
    hourCycle:"h24",
    month:"2-digit",
    year:"numeric",
    minute:"2-digit",
    era:"narrow",
    day:"2-digit"
    
}))
