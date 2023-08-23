// Q-01- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

let n:number = 40;
let sum : number = 0 ;                    // Let sum of First n Numbers is 0
let allEvens : number[] = [];            //  even numbers list store in allEven
 
for(let i=0; i<=n; i+= 2){
     sum += i ;
    allEvens.push(i)  
}
console.log("Sum of all Even Numbers = ", sum);
console.log("All Even Numbers = " , allEvens);


// Q-02- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let arrayOfNum : number[] = [11,12,13,14,15,16,17,18,19,20] ;
let sepratedEvenNum : number[] = [] ;
for(let i = 0 ; i <= arrayOfNum.length; i++){
    if(arrayOfNum[i] % 2 == 0)
    {
        sepratedEvenNum.push(arrayOfNum[i])
    }
}
console.log("Array of Seprate Even Numbers is = ",sepratedEvenNum);

// OutPut --------------------------------------------
// Array of Seprate Even Numbers is =  [ 12, 14, 16, 18, 20 ]

  
// Q-03- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

let arrayNum : number[] = [21,22,23,24,25,26,27,28,29,30] ;
let sepratedOddNum : number[] = [] ;
for(let i = 0 ; i <= arrayNum.length; i++){
    if(arrayNum[i] % 2 != 0){
        sepratedOddNum.push(arrayNum[i])      
    }
}

console.log("Array of Seprated odd numbers is = ",sepratedOddNum);


// OutPut --------------------------------------------
// Array of Seprated odd numbers is =  [ 21, 23, 25, 27, 29, undefined ]



// Q-04- Write a program that
// 1- defines a function to calculate the area of a circle.
// 2- The function should take the radius as input and
// 3- return the calculated area.


// 1-  create a function to calculate the area of a circle
function AreaOfCircle(radius : number){
    let pi : number = 3.14159 ;
    let area : number = pi * radius * radius ;
    return area ;
}


// 2- radius input
let Radius : number = 44 ;              
console.log("if Radius is = ", Radius);

// 3- return the calculated area.
console.log("Area of circle is = ", AreaOfCircle(Radius));


// // OutPut --------------------------------------------
// if Radius is =  44
// Area of circle is =  6082.11824


// Q-05- Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let Grades : number[] = [20, 30, 40, 50, 60, 70, 72, 42, 80] ;
console.log("List of Grades/Marks = ", Grades);

for(let i = Grades.length -1 ; i >= 0 ; i--){
    if(Grades[i] < 50){
        Grades.splice(i,1)
    }
}
console.log("remove failing grades (below 50) and Passed candidates are = ",Grades);


// // OutPut --------------------------------------------

// List of Grades/Marks =   [20, 30, 40, 50, 60, 70, 72, 42, 80]
// remove failing grades (below 50) and Passed candidates are =  [ 50, 60, 70, 72, 80 ]


// Q-06- Write a program that uses a function to find the largest element in an array of numbers.
 
let arrayNumbers : number[] = [12,13,14,16,20] ;
console.log(" Array of Numbers is = ", arrayNumbers);


function LargestNum(Num : any){
    let largestNum = Num[0]
    for(let i = 1 ; i < arrayNumbers.length;i++){
        if(arrayNumbers[i] > largestNum){
           largestNum = Num[i]  
        }
    }
    return largestNum ;
}
let largestNum= LargestNum(arrayNumbers)

console.log("Larger Number in Array of Number is = ", largestNum);


// // OutPut --------------------------------------------

// Array of Numbers is =  [ 12, 13, 14, 16, 20 ]
// Larger Number in Array of Number is =  20    




