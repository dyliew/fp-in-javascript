let state = {
    prop1: 'a string',
    prop2: 98,
    prop3: 102,
};

let addA = (a, b) => {
    a.prop2 = a.prop2 + b;
    return a.prop2;
}

let resultA = addA(state, 2);
// 100
// state.prop2 === 100

let addB = (a, b) => {
    return a + b;
}
let resultB = addB(state.prop3, 102);
// 300
// state.prop3 === 98
state.prop3 = resultB;