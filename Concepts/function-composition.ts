// curry...yumyum
// closure
// promotes reusability of functions

let compose = (...funcs) => {
    return (...args) => {
        let res = undefined;

        for (let i = 0; i < funcs.length; i++) {
            let func = funcs[i];
            
            if (typeof res === 'undefined')
                res = func(...args);
            else
                res = func(res);
        }

        return res;
    }
};

let sum = (a, b) => a + b;
let square = n => n * n;
let divideHalf = n => n / 2;

let complexFunc = compose(sum, square, divideHalf);
let complexResult = complexFunc(5, 9);

console.log(`complexFunc result is ${complexResult}`)

// or use lodash 'flow'