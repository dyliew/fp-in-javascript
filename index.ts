import * as Rx from 'rx';
import * as Promise from 'bluebird';

console.log('Executing index.ts...\n');

interface IMockResult {
    statusCode: number,
    data: any
}

const getDataAsync = (id: number, failApi: boolean = false) => (new Promise((resolve, reject) => {
    setTimeout(() => {
        if (failApi)
            reject({
                statusCode: 400, // bad request
                data: { message: `Ops! getDataAsync fails.` }
            });
        else
            resolve({
                statusCode: 200,
                data: {
                    message: `Successful getDataAsync`,
                    item: { id, name: 'ohyeah' }
                }
            });
    }, 3000);
}));

//promise (monad)
console.log('An example with es whatever promise');
getDataAsync(101)
    .then((res: IMockResult) => console.log(JSON.stringify(res)));

getDataAsync(202)
    // functor
    .then((res: IMockResult) => {
        console.log(JSON.stringify(res));
        res.data.item.id = 303;
        return res;
    })
    // monad
    .then((res: IMockResult) => {
        console.log(JSON.stringify(res));
        res.data.item.id = 404;
        return Promise.resolve(res);
    })
    .then((res: IMockResult) => {
        console.log(JSON.stringify(res));
    })
    .then(res => {
        console.log(`res is null: ${!res}`)
    });


// stream (monad)
console.log('An example using streams (RxJs)');
let observable5 = Rx.Observable.fromPromise(getDataAsync(505));

let observable6 = observable5.map((res: IMockResult) => {
    res.data.item.id = 606;
    return res;
});

let observable7 = observable5.flatMap((res: IMockResult) => {
    res.data.item.id = 707;
    return Rx.Observable.concat(Rx.Observable.of(res), Rx.Observable.fromPromise(getDataAsync(777)));
});

observable5.subscribe(value => console.log(JSON.stringify(value)));
observable6.subscribe(value => console.log(JSON.stringify(value)));
observable7.subscribe(value => console.log(JSON.stringify(value)));