// createPerson 함수 만들기 , person 객체를 만들어주고 , setName 함수를 불러와줘

const createPerson = (callback) => {
  let person = {};
  callback(person, setName);
};

// setName 함수 만들기 , setAge 함수를 불러와줘

const setName = (person, callback) => {
  person.name = "송이현";
  callback(person, setAge);
};

// setAge 함수 만들기 , setJob 함수를 불러와줘

const setAge = (person, callback) => {
  person.age = 31;
  callback(person, setJob);
};

/**
 * setJob 함수 만들기
 * @param {object} person 객체 person안에 내용을 담기 위함
 * @return person 객체를 console.log 찍어줘
 */

const setJob = (person) => {
  person.job = "공부중";
  console.log(person);
};

// createPerson함수를 실행 , person 값을 읽고 callback함수 실행
// callback함수는 person값을 읽은 setName함수를 실행하는 것

createPerson((person, callback) => callback(person, setName));
