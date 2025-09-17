import { FizzBuzzOutputType } from "./FizzBuzzOutputType";

/**
 * A pair consisting of a digit and its corresponding FizzBuzz output type.
 */
export class DigitTypePair {
  public readonly digit: number;
  public readonly type: FizzBuzzOutputType;

  constructor(digit: number, type: FizzBuzzOutputType) {
    this.digit = digit;
    this.type = type;
  }
}
