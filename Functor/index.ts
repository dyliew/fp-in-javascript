import Applicative from './../Applicative';

// a simple number functor
export default class Functor {
    protected _value: number | 'nothing';

    constructor(value: number | 'nothing' = null) {
        this._value = value || 'nothing';
    }

    get isEmpty() {
        return !!this._value;
    }

    set value(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    map(func: (number) => number | 'nothing') {
        if (!this._value || !func)
            return new Functor(null);

        const newValue = func(this._value);
        return new Functor(newValue);
    }

    // takes a function and curry it
    curriableMap(func: any): any {
        if (!this._value || !func)
            return new Functor(null);

        if (typeof func !== 'function')
            throw new Error('Cannot perform operation with given parameter.');

        if (func.length === 0)
            return new Functor(func());

        if (func.length === 1)
            return new Functor(func(this._value));

        // we now know that 'func' has more than 1 parameters
        const curriedFunc = func.bind(null, this._value);
        return new Applicative(curriedFunc);
    }
}
