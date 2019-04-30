import { fib } from './fib';

describe('Function - fib', () => {
    //checking if the function works properly for correct input data
    test('fib with parameter > 0', () => {
        expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
    //checking if the function properly validates incorrect input data
    test('fib with parameter < 0', () => {
        expect(() => {fib(-5)}).toThrowError();
    });
    //checking if the function properly validates incorrect input data
    test('fib with parameter equals decimal number', () => {
        expect(() => {fib(1.2)}).toThrowError();
    });
    //checking if the function works properly for the parameter equals 0
    //(I assumed that the function should return an empty array for parameter equals 0)
    test('fib with parameter equals 0', () => {
        expect(fib(0)).toEqual([]);
    });
});
