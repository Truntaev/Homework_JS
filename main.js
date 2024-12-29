// Завдання 1

// function f(number) {
//     if(number % 3 === 0 && number % 5 === 0) {
//          console.log("fizzBuzz");
//     }  else if (number % 3 === 0){
//         console.log ("fizz");
//     } else if (number % 5 ===0) {
//         console.log("buzz");
//     }

// }

// const inputNumber = parseInt(prompt("Введіть число:"));
// f(inputNumber);


//  Задача 2

// function leapYear (year) {
    
//     if(year % 100 === 0 && year % 400 !== 0){
//         console.log('No')

//     } else if (year % 4 === 0) {
//         console.log("Yes");
//     } else {
//         console.log("No")
//     }
// } 

// const year = prompt("Введіть рік:");
// leapYear(parseInt(year));


// Завдання 3 

function printMessage (N) {
    const last = N % 10;
    
    if ( last === 1) {
        console.log(`Вам ${N} рік`)
    } else if (last === 2 || last === 3 || last === 4) {
        console.log(`Вам ${N} роки`)
    } else if (last === 5 || last === 6 ||last === 7 || last === 8 || last === 9 || last === 0 ) {
        console.log (`Вам ${N} років`)
    }

}

const N = prompt ("Введіть вік:");
printMessage(parseInt(N));


