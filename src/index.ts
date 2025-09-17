import { FizzBuzz } from "./FizzBuzz";
import { FizzBuzzConsoleLogStrategy } from "./FizzBuzzConsoleLogStrategy";

// Get argument from command line, default to 100 if not provided or invalid
const arg = process.argv[2];
const n = arg && !isNaN(Number(arg)) && Number(arg) > 0 ? Number(arg) : 100;

const logger = new FizzBuzzConsoleLogStrategy();
const fizzBuzz = new FizzBuzz(logger);
fizzBuzz.attempt(n);
