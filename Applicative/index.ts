import Functor from './../Functor';

export default class Applicative {
    private _func: (number) => number;

    constructor(func: (number) => number) {
        this._func = func;
    }

    ap(functor: Functor) {
        if (!this._func)
            return functor;

        return functor.map(this._func);
    }
}