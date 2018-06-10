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
    function revStr (str) {

        return str.split("").reverse().join("");
    }
        return strings.map(revStr);
};

const onlyEven = (numbers) => {
  // your code here
    function even (a) {

        return a.filter(function (val) {

        return val % 2 === 0})
  }
    return even(numbers);
};

const removeNthElement2 = (index, array) => {
  // your code here
    let res;

        if (index !== '') {

            res = array[index];

                return array.filter(a => a !== res);
        } else {

                return array;
        }
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
    return strings.filter(word =>

        word.charAt(0).match(/[\AEIOUaeiou]/));
};

const removeSpaces = (string) => {
  // your code here
    return string.replace(/\s/g,'');
};

const sumNumbers = (numbers) => {
  // your code here
    return numbers.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0, numbers);
};

const sortByLastLetter = (strings) => {
  // your code here
    let result = strings.sort(function(a, b) {

		if (a[a.length - 1] > b[b.length - 1]) {
        return 1;
    } else if (a[a.length - 1] < b[b.length - 1]) {
			  return -1;
    }

  return 0;

});

  return result;
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
