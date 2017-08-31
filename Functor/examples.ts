import * as _ from 'lodash';

const arr = [2, 3, 6, 7, 8];

const multiply2 = num => num * 5;
const multiply3 = num => num * 3;
const divide5 = num => num / 5;
const isEven = num => num % 2 === 0;

const updatedArr = arr
    .map(multiply2)
    .map(multiply3)
    .map(divide5)
    .map(isEven);

const evenNumbersArr = arr.filter(isEven);
const shortenedArr = arr.slice(1, 4);

// alternatively we can use reduce to achive the same output
const newArr = arr.reduce((base: boolean[], value: number) => {
    // const newVal = isEven(divide5(multiply3(multiply2(value))));
    // base.push(newVal);

    const composedFunction = _.flow(multiply2, multiply3, divide5, isEven);
    const anotherNewVal = composedFunction(value);

    base.push(anotherNewVal);
    return base;
}, []);

console.log(_.map);

console.log(`arr: ${arr}`);
console.log(`newArr: ${updatedArr}`);
console.log(`evenNumbersArr: ${evenNumbersArr}`);
console.log(`shortenedArr: ${shortenedArr}`);
console.log(`newArr: ${newArr}`);

// what about Array.prototype.splice?
