import { FizzBuzzDigitsProcessor } from '../src/FizzBuzzDigitsProcessor';
import { FizzBuzzOutputType } from '../src/FizzBuzzOutputType';

describe('FizzBuzzDigitsProcessor', () => {
  test('processes numbers 1-5 correctly', () => {
    const processor = new FizzBuzzDigitsProcessor(5);
    const result = processor.process();
    expect(result.map(pair => pair.type)).toEqual([
      FizzBuzzOutputType.Default, // 1
      FizzBuzzOutputType.Default, // 2
      FizzBuzzOutputType.DivisibleBy3, // 3
      FizzBuzzOutputType.Default, // 4
      FizzBuzzOutputType.DivisibleBy5 // 5
    ]);
  });
});
