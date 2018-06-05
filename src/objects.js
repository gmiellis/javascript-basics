const createPerson = (name, age) => {
  // your code here
  /*if (name === 'Fred') {
  const fred = {
    name: 'Fred',
    age: 79,
  }
  return fred;
} else {
  const dilys = {
    name: 'Dilys',
    age: 50,
  }
  return dilys;
}*/
const person = {
    name: name,
    age: age,
  }
return person;
};

const getName = (object) => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object.age;
};

const hasProperty = (property, object) => {
  // your code here
  if (property in object) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = (person) => {
  // your code here
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }

};

const getAges = (people) => {
  // your code here
  let ages =[];
  for (let age of people) {
    ages.push(age.age);
  }
  return ages;
};

const findByName = (name, people) => {
  // your code here
 let result = people.filter(person => name === person.name);
 let resulto = result.reduce(function(obj,item) {
   obj[item.key] = item.value;
   return obj;
 });
 return resulto;
};

const findHondas = (cars) => {
  // your code here
  let result = cars.filter( cars => cars.manufacturer === 'Honda');
  return result;
 };

const averageAge = (people) => {
  // your code here
  let ages =[];
  for (let age of people) {
    ages.push(age.age);
  }
  let sum = ages.reduce(function(a, b ) { 
    return a + b; });
    let avg = sum / ages.length;
  return avg;

};

const createTalkingPerson = (name, age) => {
  // your code here
return `Hi Fred, my name is ${bill.name} and I am ${bill.age}!`;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
}
