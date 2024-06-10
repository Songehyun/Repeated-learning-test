const createPerson = (callback) => {
  let person = {};
  callback(person, setName);
};

const setName = (person, callback) => {
  person.name = "송이현";
  callback(person, setAge);
};

const setAge = (person, callback) => {
  person.age = 31;
  callback(person, setJob);
};

const setJob = (person) => {
  person.job = "공부중";
  console.log(person);
};

createPerson((person, callback) => callback(person, setName));
