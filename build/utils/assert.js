class AssertionError extends Error {
    actual;
    expected;
    operator;
    name = "AssertionError";
    code = "ERR_ASSERTION";
    constructor(message = "", actual, expected = "true", operator = "==") {
        super(message || `${actual} ${operator} ${expected}`);
        this.actual = actual;
        this.expected = expected;
        this.operator = operator;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export const assert = (value, message) => {
    if (value === undefined || value === null) {
        throw new AssertionError(message, value);
    }
};
//# sourceMappingURL=assert.js.map