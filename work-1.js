class Person {
  constructor() {
    this._name = "";
    this._age = 0;
    this._job = "";
  }
  // 클래스 person 만들기 안의 내용들은 비워두고 형식만 지정해주는 느낌

  set name(value) {
    this._name = value;
  }

  // name 값을 받아와

  get name() {
    return this._name;
  }

  // name을 그대로 출력하기

  set age(value) {
    this._age = value;
  }

  // age 값을 받아와

  get age() {
    return this._age;
  }

  // age를 그대로 입력해

  set job(value) {
    this._job = value;
  }

  // job 값을 받아와

  get job() {
    return this._job;
  }

  // job을 그대로 입력해
}

const person = new Person();
person.name = "송이현";
person.age = 31;
person.job = "공부중";

// 값 입력

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Job:", person.job);

// console찍어주기
