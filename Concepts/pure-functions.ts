let myArray = [1, 2, 3, 4, 5, 6, 7];
let k = 0.1;

let myArray2 = myArray.map(n => n + k);

let generateAddSomething = (input) => (a) => a + input;
let addK = generateAddSomething(k);
let myArray3 = myArray.map(addK);