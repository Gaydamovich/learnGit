class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  say() {
    console.log('hi')
  }
}

class Student extends Person {
  constructor(name, age, nick) {
    super(name, age);
    this.nick = nick
  }
  say() {
    super.say();
    console.log('by')
  }
}

const st = new Student('dima', 34, 'lev');
st.say();

document.getElementById('in').addEventListener('input', (e) => {
  console.log(e.data)
});

document.querySelector('#color').addEventListener('input', e => {
  console.log(e.target.value)
});

document.querySelector('#date').addEventListener('input', e => {
  console.log(e.target.value)
});

document.getElementById('sel').addEventListener('change', function () {
  console.log(this.value)
});

document.getElementById('check').addEventListener('input', function (e) {
  console.log(e.target.checked)
});

document.querySelectorAll('.i').forEach(el => {
  el.addEventListener('input', (e) => {
    console.log(e.target.value)
  })
});

/**
 *  Pattern Singleton
 */
class Single {
  constructor(port) {
    if (Single.inst) return Single.inst;

    this.port = port;

    Single.inst = this;
    return Single.inst;
  }
}
