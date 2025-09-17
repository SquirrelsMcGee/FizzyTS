import { FizzBuzzDigitDeterminator } from '../src/FizzBuzzDigitDeterminator';

describe('FizzBuzzDigitDeterminator', () => {
  const determinator = new FizzBuzzDigitDeterminator();

  test('isDivisibleByThree', () => {
    expect(determinator.isDivisibleByThree(3)).toBe(true);
    expect(determinator.isDivisibleByThree(4)).toBe(false);
  });

  test('isDivisibleByFive', () => {
    expect(determinator.isDivisibleByFive(5)).toBe(true);
    expect(determinator.isDivisibleByFive(6)).toBe(false);
  });

  test('isDivisibleByThreeAndFive', () => {
    expect(determinator.isDivisibleByThreeAndFive(15)).toBe(true);
    expect(determinator.isDivisibleByThreeAndFive(10)).toBe(false);
  });

  test('isNotDivisibleByThreeOrFive', () => {
    expect(determinator.isNotDivisibleByThreeOrFive(7)).toBe(true);
    expect(determinator.isNotDivisibleByThreeOrFive(15)).toBe(false);
  });
});
