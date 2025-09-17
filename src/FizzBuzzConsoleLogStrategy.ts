import { DigitTypePair } from "./DigitTypePair";
import { FizzBuzzOutputType } from "./FizzBuzzOutputType";

export interface IFizzBuzzLogStrategy {
  output(digitTypePairs: DigitTypePair[]): void;
}

/**
 * A strategy for logging FizzBuzz results to the console.
 */
export class FizzBuzzConsoleLogStrategy implements IFizzBuzzLogStrategy {
  digitTypePairMap: Map<FizzBuzzOutputType, (digit: number) => string>;
  constructor() {
    this.digitTypePairMap = new Map<FizzBuzzOutputType, (digit: number) => string>();

    this.digitTypePairMap.set(FizzBuzzOutputType.Default, (digit) => digit.toString());
    this.digitTypePairMap.set(FizzBuzzOutputType.DivisibleBy3, () => 'Fizz');
    this.digitTypePairMap.set(FizzBuzzOutputType.DivisibleBy5, () => 'Buzz');
    this.digitTypePairMap.set(FizzBuzzOutputType.DivisibleBy15, () => 'FizzBuzz');
  }

  output(digitTypePairs: DigitTypePair[]) {
    for (let pair of digitTypePairs) {
      const outputString = this.getOutputString(pair);
      console.log(outputString);
    }
  }

  private getOutputString(pair: DigitTypePair): string {
    const outputFunction = this.digitTypePairMap.get(pair.type);
    if (outputFunction)
      return outputFunction(pair.digit);
    return pair.digit.toString();
  }
}
