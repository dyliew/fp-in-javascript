import Applicative from './../Applicative';

// a simple number functor
export default class Functor {
    protected _value: number | 'nothing';

    constructor(value: number | 'nothing') {
        this._value = value;
    }

    hasValue = () => !!this._value;
    setValue = (value: number) => this._value = value;
    getValue = () => this._value || 'nothing';

    map(func: (number) => number | 'nothing') {
        if (!this._value || !func)
            return new Functor(null);

        const newValue = func(this._value);
        return new Functor(newValue);
    }

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

    curriableMap2(func) {
        if (!func || !func.length || func.length !== 2)
            throw new Error('function must have 2 parameters');

        let curriedFunc: (number) => number = func.bind(null, this._value);

        return new Applicative(curriedFunc);
    }
}
