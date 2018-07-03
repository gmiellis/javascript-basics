const createPerson = (name, age) => {

  const person = {
    name: name,
    age: age,
  };
  return person;
};

const getName = (object) => {

  return object.name;
};

const getProperty = (property, object) => {

  return object.age;
};

const hasProperty = (property, object) => {

  return property in object ? true : false;
};

const isOver65 = (person) => {

  return person.age > 65 ? true : false;
};

const getAges = (people) => {

  const ages = [];
  for (const age of people) {
    ages.push(age.age);
  }
  return ages;
};

const findByName = (name, people) => {

  const result = people.filter(person => name === person.name);
  const resulto = result.reduce(function (obj, item) {
    obj[item.key] = item.value;
    return obj;
  });
  return resulto;
};

const findHondas = (cars) => {

  const result = cars.filter(car => car.manufacturer === 'Honda');
  return result;
};

const averageAge = (people) => {

  const ages = [];

  for (const age of people) {
    ages.push(age.age);
  }

  const sum = ages.reduce(function (a, b) {
    return a + b;
  });

  const avg = sum / ages.length;
  return avg;

};

const createTalkingPerson = (name, age) => {

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
  createTalkingPerson,
};
