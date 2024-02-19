// function isVoval(char){
//     if (char==='a'|| char==='e'|| char==='i'|| char==='o'|| char==='u') {
//         return true;
//     }
//     return false;
// }

// function countVovals(str){
//     let count = 0;
//     for(let char of str){
//         if(isVoval(char)){
//             count++;
//         }
//     }
//     return count;
// }

const isVoval = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    }
    return false;
}

const countVovals = (str) => {
    let count = 0;
    for (let char of str) {
        if (isVoval(char)) {
            count++;
        }
    }
    return count;
}

// console.log(countVovals("abciou"));

// For Each Loop 
let arr = [1, 2, 3, 4];
arr.forEach((val) => {
    // console.log(val);
});

/*
Higher Order Functions
A function which takes other function as argurment or return a function is called hihger order function
For example callbacks functions
*/


// Q: Print square of each element in the array 
// arr.forEach((val) => {
//     console.log(val * val);
// });

// Map Method 
// Map method in array is similar to forEach but map returns new array 
let newArr = arr.map((val) => {
    return (val * val);
});
// console.log(newArr);

// Filter Method
// Used to filter out array by returning a new array with filtered values

let evenArr1 = arr.filter((val) => {
    return (val %2 ==0);
});
// console.log(evenArr1);

// Reduce Methods 
/* it is used to perform some operations on array and reduces the array to single value. It returns that single value*/
let sum =arr.reduce((prev, curr)=>{
return prev+curr;
});

// console.log(sum);


/*Filter out marks of students greater than 90 from array*/
let marks = [90, 45, 99, 98, 56];
let filArr= marks.filter((val)=>{
return val>=90;
});
// console.log(filArr);

/*Create an array from 1-n where n is input from the user
calculate sum of all the elements of that array
*/
let numArr=[];
let n= prompt("Enter any number");
for (let i = 0; i < n; i++){
    numArr[i]=i+1;
}
console.log(numArr)

//sum 
let sumOfArr=numArr.reduce((res, curr)=>{
return res+curr;
});
// product 
let prodOfArr=numArr.reduce((res, curr)=>{
    return res*curr;
    });


console.log(sumOfArr, prodOfArr)