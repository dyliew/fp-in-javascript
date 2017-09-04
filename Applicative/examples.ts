import Functor from './../Functor';

let functorA = new Functor(111);
let functorB = new Functor(222);

// adding them up
// let's make functorC = functorA + functorB;
let functorC1 = functorA.map((valA: number) => {
    return functorB.map((valB: number) => valB / valA).getValue();
});

console.log(`functorC1: ${functorC1.getValue()}`)

let applicativeA = functorA.curriableMap2((a, b) => b / a);
let functorC2 = applicativeA.ap(functorB);

if (functorC2 instanceof Functor)
    console.log(`functorC2: ${functorC2.getValue()}`);

// an multiple function that takes 4 parameters
const functorW = new Functor(3);
const functorX = new Functor(4);
const functorY = new Functor(7);
const functorZ = new Functor(9);
const multiplyWith4Parameters = (a, b, c, d) => a * b * c * d;

const functorV = functorW
    .curriableMap(multiplyWith4Parameters) // returns an applicative
    .ap(functorX)
    .ap(functorY)
    .ap(functorZ);

console.log(`functorV: ${functorV.getValue()}`);
