import Monad from './';

// simple monad example
const monad1 = new Monad(777);

const monad2 = monad1.map(val => val - 444);

const monad3 = monad1.flatMap(val => {
    const newVal = val - 222;
    return new Monad(newVal);
});

console.log(`monad1: ${monad1.value}`);
console.log(`monad2: ${monad2.value}`);
console.log(`monad3: ${monad3.value}`);