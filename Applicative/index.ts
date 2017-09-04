import Functor from './../Functor';

export default class Applicative {
    private _func;

    constructor(func) {
        this._func = func;
    }

    ap(functor: Functor) {
        if (!this._func)
            return functor;

        if (this._func.length === 1) {
            const result = functor.map(this._func);
            return result;
        }

        return functor.curriableMap(this._func);
    }
}