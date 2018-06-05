const getNthElement = (index, array) => {
  // your code here
  if (index > array.length -1) {
    return array[index % array.length]
  } else {
    return array[index];
  }
};

const arrayToCSVString = (array) => {
  // your code here
  return array.join(",");
};

const csvStringToArray = (string) => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);

};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  // your code here
  return strings.map(string => string.toUpperCase());

};

const reverseWordsInArray = (strings) => {
  // your code here
  function revStr(strings) {
    return strings.split("").reverse().join("")
  } 
  revStr(strings);
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here

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
  sortByLastLetter
}
