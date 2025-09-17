
export class FizzBuzzDigitDeterminator {
  // Returns true if the digit is divisible by 3 (three)
  public isDivisibleByThree(digit: number) {
    return this.isDivisibleBy(digit, 3);
  }

  // Returns true if the digit is divisible by 5 (five)
  public isDivisibleByFive(digit: number) {
    return this.isDivisibleBy(digit, 5);
  }

  // Returns true if the digit is divisible by 3 (three) and 5 (five)
  public isDivisibleByThreeAndFive(digit: number) {
    return this.isDivisibleByThree(digit) && this.isDivisibleByFive(digit);
  }

  // Returns true if the digit is not divisible by 3 (three) or 5 (five)
  public isNotDivisibleByThreeOrFive(digit: number) {
    return !this.isDivisibleByThree(digit) && !this.isDivisibleByFive(digit);
  }

  // Internal logic
  private isDivisibleBy(digit: number, divisor: number) {
    return digit % divisor == 0;
  }
}
