class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
}

class Student extends Person {
  constructor(name, age, nick) {
    super(name, age);
    this.nick = nick
  }
  get nickname () {
    console.log(this.nick)
  }
}

const st = new Student('dima', 34, 'lev');
st.nickname;