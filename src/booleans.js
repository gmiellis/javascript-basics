const negate = (a) => {

  return a ? false : true;
};

const both = (a, b) => {

  return a && b ? true : false;
};

const either = (a, b) => {

  return a || b ? true : false;
};

const none = (a, b) => {

  return !a && !b ? true : false;
};

const one = (a, b) => {

  return !a === b ? true : false;
};

const truthiness = (a) => {

  return a ? true : false;
};

const isEqual = (a, b) => {

  return a === b ? true : false;
};

const isGreaterThan = (a, b) => {

  return a > b ? true : false;
};

const isLessThanOrEqualTo = (a, b) => {

  return a <= b ? true : false;
};

const isOdd = (a) => {

  return a % 2 > 0 ? true : false;
};

const isEven = (a) => {

  return a % 2 === 0 ? true : false;
};

const isSquare = (a) => {

  return Math.sqrt(a) * Math.sqrt(a) === a ? true : false;
};

const startsWith = (char, string) => {

  return string.charAt(0) === char ? true : false;
};

const containsVowels = (string) => {

  return string.match(/[aeiouAEIOU]/) ? true : false;
};

const isLowerCase = (string) => {

  return string === string.toLowerCase() ? true : false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
