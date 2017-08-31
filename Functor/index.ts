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
        if (!this._value)
            return new Functor(null);

        const newValue = func(this._value);
        return new Functor(newValue);
    }

    curryMapTwoParameters(func) {
        if (!func || !func.length || func.length === 1)
            throw new Error('function must have at least 2 parameters');

        let curriedFunc: (number) => number = func.bind(null, this._value);

        return new Applicative(curriedFunc);
    }
}
