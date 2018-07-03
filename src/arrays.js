const getNthElement = (index, array) => {

  return index > array.length - 1 ? array[index % array.length] : array[index];

};

const arrayToCSVString = (array) => {

  return array.join(',');
};

const csvStringToArray = (string) => {

  return string.split(',');
};

const addToArray = (element, array) => {

  array.push(element);

};

const addToArray2 = (element, array) => {

  return array.concat(element);
};

const removeNthElement = (index, array) => {

  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {

  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {

  return strings.map(string => string.toUpperCase());

};

const reverseWordsInArray = (strings) => {

  function revStr(str) {

    return str.split('').reverse().join('');
  }
  return strings.map(revStr);
};

const onlyEven = (numbers) => {

  function even(a) {

    return a.filter(function (val) {
      return val % 2 === 0;
    });
  }
  return even(numbers);
};

const removeNthElement2 = (index, array) => {

  let res;

  if (index !== '') {

    res = array[index];

    return array.filter(a => a !== res);
  }
};

const elementsStartingWithAVowel = (strings) => {

  return strings.filter(word => word.charAt(0).match(/[\AEIOUaeiou]/));
};

const removeSpaces = (string) => {

  return string.replace(/\s/g, '');
};

const sumNumbers = (numbers) => {

  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0, numbers);
};

const sortByLastLetter = (strings) => {

  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
}
