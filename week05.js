"use strict";
// Q-06- Write a program that uses a function to find the largest Num in an array of numbers.
let arrayNumbers = [12, 13, 14, 16, 20];
console.log(" Array of Numbers is = ", arrayNumbers);
function LargestNum(Num) {
    let largestNum = Num[0];
    for (let i = 1; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > largestNum) {
            largestNum = Num[i];
        }
    }
    return largestNum;
}
let largestNum = LargestNum(arrayNumbers);
console.log("Larger Number in Array of Number is = ", largestNum);
// // OutPut --------------------------------------------
// List of Grades/Marks =   [20, 30, 40, 50, 60, 70, 72, 42, 80]
// remove failing grades (below 50) and Passed candidates are =  [ 50, 60, 70, 72, 80 ]
