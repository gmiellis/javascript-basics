const negate = (a) => {
  // your code here
  if (a) {
    return false;
  } else {
    return true;
  }
};

const both = (a, b) => {
  // your code here
  if (a && b) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  // your code here
  if (a || b) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  // your code here
  if (a, b == 1 || a > b || a < b) {
    return false; 
  } else {
    return true;
  }
};

const one = (a, b) => {
  // your code here
  if (a === b) {
    return false;
  } else {
    return true;
  }
};

const truthiness = (a) => {
  // your code here
  if (a) {
    return true;
  } else {
    return false;
  }
};

const isEqual = (a, b) => {
  // your code here
  if (a == b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a <= b) {
    return false;
  } else {
    return true;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = (a) => {
  // your code here
  if (a % 2 > 0) {
    return true;
  } else {
    return false;
  }
};

const isEven = (a) => {
  // your code here
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = (a) => {
  // your code here
  if (Math.sqrt(a) * Math.sqrt(a) === a) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  // your code here
  if (string.charAt(0) === char) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = (string) => {
  // your code here
  if (string.match(/[aeiouAEIOU]/)) {
    return true;
  } else {
    return false;
    }
};

const isLowerCase = (string) => {
  // your code here
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
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
  isLowerCase
}
