var FizzBuzz = function () {};

FizzBuzz.prototype.isDivisiblebyThree = function(number) {
  return this._isDivisibleby(number, 3);
};

FizzBuzz.prototype.isDivisiblebyFive = function(number) {
  return this._isDivisibleby(number, 5);
};

FizzBuzz.prototype.isDivisiblebyFifteen = function(number) {
  return this._isDivisibleby(number, 15);
};

FizzBuzz.prototype._isDivisibleby = function(number, divisor) {
  return (number % divisor === 0);
};

FizzBuzz.prototype.says = function (number) {
  if (this.isDivisiblebyFifteen(number)) {
    return "FizzBuzz";
  }
  if (this.isDivisiblebyFive(number)) {
    return "Buzz";
  }
  if (this.isDivisiblebyThree(number)) {
    return "Fizz";
  }
};
