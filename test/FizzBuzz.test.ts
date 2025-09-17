import { FizzBuzz } from '../src/FizzBuzz';
import { IFizzBuzzLogStrategy } from '../src/FizzBuzzConsoleLogStrategy';

describe('FizzBuzz', () => {
  let loggerMock: IFizzBuzzLogStrategy;

  beforeEach(() => {
    loggerMock = {
      output: jest.fn()
    };
  });

  test('does not throw for n=15', () => {
    const fizzBuzz = new FizzBuzz(loggerMock);

    expect(() => fizzBuzz.attempt(15)).not.toThrow();
  });
});
