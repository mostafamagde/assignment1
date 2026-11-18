const readline = require("readline");
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//------------------------------------------------------------------------
// 1
// let numbersText = "123"
// let number = Number(numbersText)
// number = number + 7
// console.log(number)


//------------------------------------------------------------------------
// 2
// userInput.question("Enter a Value: ", (input) => {
//     const value = Number(input);
//     if (!value) {
//         console.log("Invalid");
//     }
//     userInput.close()
// })


//------------------------------------------------------------------------
// 3
// for (let i = 1; i < 10; i++) {
//     if (i % 2 == 0) {
//         continue
//     } else {
//         console.log(i);
//     }
// }


//------------------------------------------------------------------------
// 4
// let arrayNumbers = [1, 2, 3, 4, 5]
// let filteredArr = arrayNumbers.filter((value, index, array) => {
//     if (value % 2 == 0) {
//         return true
//     }
// })
// console.log(filteredArr);


//------------------------------------------------------------------------
// 5
// let firstArr = [1, 2, 3]
// let secondArr = [4, 5, 6]
// let mirgedArr = [...firstArr, ...secondArr]
// console.log(mirgedArr);


//------------------------------------------------------------------------
// 6
// userInput.question("Enter a number (1-7): ", (input) => {
//     let day = Number(input);
//     switch (day) {
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid Number");
//     }
//     userInput.close();
// });


//------------------------------------------------------------------------
// 7
// let stringsArr = ["a", "ab", "abc"]
// let stringsLen = stringsArr.map((value, index, array) => {
//     return value.length
// })
// console.log(stringsLen);


//------------------------------------------------------------------------
// 8
// function DivisibleByBoth(number) {
//     if (number % 3 == 0 & number % 5 == 0) {
//         console.log("Divisible by both");
//     }
//     else if (number % 3 == 0) {
//         console.log("Divisible by 3 only");
//     } else if (number % 5 == 0) {
//         console.log("Divisible by 5 only");
//     }
//     else {
//         console.log("Isn't divisible by both");
//     }
// }
// userInput.question("Enter a Value: ", (input) => {
//     DivisibleByBoth(Number(input))
//     userInput.close()
// })


//------------------------------------------------------------------------
// 9
// userInput.question("Enter a Number: ", (input) => {
//     const power2Func = (number) => number * number
//     let result = power2Func(Number(input))
//     console.log(result);
//     userInput.close()
// })


//------------------------------------------------------------------------
// 10
// const personObject = { name: 'John', age: 25 }
// function objectDestruction(personObject) {
//     const { name, age } = personObject

//     return `${name} is ${age} years old`
// }
// console.log(objectDestruction(personObject));


//------------------------------------------------------------------------
// 11
// function sum(...numbers) {
//     let total = 0
//     numbers.forEach((value, index, array) => {
//         total += value
//     })
//     return total
// }
// userInput.question("Enter Numbers: ", (input) => {
//     let numbers = input.split(",").map(Number)
//     let result = sum(...numbers)
//     console.log(result);
//     userInput.close()
// })


//------------------------------------------------------------------------
// 12
// async function freeze() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 3000);
//     })
// }
// freeze().then((message) => {
//     console.log(message);
// })


//------------------------------------------------------------------------
// 13
// let numbersArr = [1, 3, 7, 2, 4]
// function theLargest(arr) {
//     let maxNumber = numbersArr[0]
//     numbersArr.forEach(element => {
//         maxNumber = element > maxNumber ? element : maxNumber
//     });
//     return maxNumber
// }
// console.log(theLargest(numbersArr));


//------------------------------------------------------------------------
// 14
// let person = { name: "John", age: 30 }
// function getKeys(obj) {
//     return Object.keys(obj)
// }
// console.log(getKeys(person));


//------------------------------------------------------------------------
// 15
// let text = "The quick brown fox"
// function splitText(text) {
//     return text.split(" ")
// }
// console.log(splitText(text))
