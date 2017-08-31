import Functor from './../Functor';

// a simple number monad
export default class Monad extends Functor {

    constructor(value) {
        super(value);
    }

    flatMap(func: (number) => Monad) {
        if (!this._value)
            return new Monad(null);

        return func(this._value);
    }
}