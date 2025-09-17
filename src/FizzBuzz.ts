import { IFizzBuzzLogStrategy } from "./FizzBuzzConsoleLogStrategy";
import { FizzBuzzDigitsProcessor } from "./FizzBuzzDigitsProcessor";

/**
 * The main FizzBuzz class that orchestrates the processing and output of FizzBuzz results.
 */
export class FizzBuzz {
  constructor(private readonly logger: IFizzBuzzLogStrategy) { }

  public attempt(n: number) {
    const processor = new FizzBuzzDigitsProcessor(n);
    this.logger.output(processor.process());
  }
}
