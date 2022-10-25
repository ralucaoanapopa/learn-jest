const multiply = require('./multiply');

describe('Test multiply positive numbers', () => {

    test('multiply 3*2 should equal to 6', ()=> {
        // toBe() uses strict equality - is reserved for value checking
        expect(multiply(3,2)).toBe(6);
    });

    test('multiply 6*3 should not equal 7', () => {
        expect(multiply(6,3)).not.toBe(7);
    });

    test('object reference is equal', () => {
        const data = {apple: 1};
        data['peach'] = 2;

        // toEqual() - tests the value of an object
        //           - recursively checks every field of an object or array
        expect(data).toEqual({apple: 1, peach: 2});
    });
});
