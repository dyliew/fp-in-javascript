import Functor from './../Functor';

let functorA = new Functor(111);
let functorB = new Functor(222);

// adding them up

// let functorC = functorA + functorB;

let functorC1 = functorA.map((valA: number) => {
    return functorB.map((valB: number) => valB / valA).getValue();
});

console.log(`functorC1: ${functorC1.getValue()}`)

let wrapperDivide111 = functorA.curryMapTwoParameters((a, b) => b / a);
let functorC2 = wrapperDivide111.ap(functorB);

console.log(`functorC2: ${functorC2.getValue()}`)