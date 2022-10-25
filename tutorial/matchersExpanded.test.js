
// string matchers
test('there is `da` in Daenarys', () => {
    expect('Daenarys').toMatch(/Da/);
});

test('there is not `da` in Daenarys', () => {
    expect('Daenarys').not.toMatch(/da/);
});

// number matchers
const multiply = require('./multiply');

describe('Test multiply positive numbers', () => {

    test('multiply 4*3 should equal 12', () => {
        expect(multiply(4,3)).toBe(12);
    });

    test('multiply 4*3 should be greater than 11', () => {
        expect(multiply(4,3)).toBeGreaterThan(11);
    });

    test('multiply 4*3 should be less than 13', () => {
        expect(multiply(4,3)).toBeLessThan(13);
    });

    test('multiply 4*3 should be less than or equal 12', () => {
        expect(multiply(4,3)).toBeLessThanOrEqual(12);
    });
});

// Truthiness matchers
describe ('zero - toBe or not.toBe...', () => {

    test('zero is not Null', () => {
        expect(0).not.toBeNull();
    });

    test('zero is defined', () => {
        expect(0).toBeDefined();
    });

    test('zero is not Undefined', () => {
        expect(0).not.toBeUndefined();
    });

    test('zero is not Truthy', () => {
        expect(0).not.toBeTruthy();
    });

    test('zero is Falsy', () => {
        expect(0).toBeFalsy();
    });
});

// array matchers
const fruitStock = [
    'apple',
    'peach',
    'banana',
    'kiwi'
];

test('that the fruit stock list has a peach', () => {
    expect(fruitStock).toContain('peach');
});