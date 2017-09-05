// Concern 1: BigO performance

let myArray = [1, 2, 3, 4, 5, 6, 10];

// imperative
let myArray0 = [];

for (let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    item = item + 3;

    if (item % 2 === 0)
        myArray0.push(item);
}

// declarative (use higher order function)
let myArray1 = myArray
    .map(a => a + 3)
    .filter(a => a % 2 === 2);


// what if there's an array for each array's elements
// use 'reduce' to flatten
// underscore 'map' and flatten'
// lodash 'flatmap' 