import { DigitTypePair } from "./DigitTypePair";
import { FizzBuzzDigitDeterminator } from "./FizzBuzzDigitDeterminator";
import { FizzBuzzOutputType } from "./FizzBuzzOutputType";

/**
 * Processes digits from 1 to N and determines their FizzBuzz output types.
 */
export class FizzBuzzDigitsProcessor {
  private readonly integerN: number;
  private readonly determinator: FizzBuzzDigitDeterminator;
  private readonly determinatorMap: Map<(digit: number) => boolean, FizzBuzzOutputType>;

  constructor(integerN: number) {
    this.integerN = integerN;
    this.determinator = new FizzBuzzDigitDeterminator();

    this.determinatorMap = new Map<() => boolean, FizzBuzzOutputType>();
    this.determinatorMap.set((digit: number) => this.determinator.isDivisibleByThreeAndFive(digit), FizzBuzzOutputType.DivisibleBy15);
    this.determinatorMap.set((digit: number) => this.determinator.isDivisibleByThree(digit), FizzBuzzOutputType.DivisibleBy3);
    this.determinatorMap.set((digit: number) => this.determinator.isDivisibleByFive(digit), FizzBuzzOutputType.DivisibleBy5);
    this.determinatorMap.set((digit: number) => this.determinator.isNotDivisibleByThreeOrFive(digit), FizzBuzzOutputType.Default);
  }

  process(): DigitTypePair[] {
    let digitTypePairs: DigitTypePair[] = [];

    for (let digit = 1; digit <= this.integerN; digit += 1) {
      const digitType = this.getDigitType(digit);
      const pair = new DigitTypePair(digit, digitType);
      digitTypePairs.push(pair);
    }

    return digitTypePairs;
  }

  private getDigitType(digit: number): FizzBuzzOutputType {
    for (let [condition, outputType] of this.determinatorMap) {
      if (condition(digit))
        return outputType;
    }
    return FizzBuzzOutputType.Default;
  }
}
