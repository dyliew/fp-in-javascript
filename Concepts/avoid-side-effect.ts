// avoid console.log('hello')
// avoid updating DOM
// a function only does a thing

let myFunctor = [44];

let divide2 = (a) => a / 2;
let minus1 = (a) => a - 1;

// side-effect
// :'(
let resultFromSideEffect = myFunctor
    .map(value => {
        value = divide2(value);
        value = minus1(value);

        console.log(value);
        return value;
    });

let result = myFunctor.map(item => minus1(divide2(item)));

console.log(result[0]);