// ;'(
let myState1 = {
    status: 'idle',
    index: 1
};

function func1() {
    setTimeout(() => {
        myState1.status = 'initialized',
            myState1.index = myState1.index * 2;
    }, 1500);
}

function func2() {
    setTimeout(() => {
        myState1.status = 'running',
            myState1.index = myState1.index - 2;
    }, 1000);
}

func1();
func2();

setTimeout(() => {
    console.log('myState1: ' + JSON.stringify(myState1));
}, 2000);

// :)
let myState2 = {
    status: 'idle',
    index: 1
};

function func3(input) {
    return new Promise((res) => {
        setTimeout(function () {
            let result = Object.assign({}, input);
            result.status = 'initialized',
                result.index = result.index * 2;
            res(result);
        }, 1500);
    })
}

function func4(input) {
    return new Promise((res) => {
        setTimeout(function () {
            let result = Object.assign({}, input);
            result.status = 'running',
                result.index = result.index - 2;
            res(result);
        }, 1000);
    })
}

(async () => {
    let result: any = await func3(myState2).then(func4);

    myState2 = result;
    console.log('myState2: ' + JSON.stringify(myState2));
})();