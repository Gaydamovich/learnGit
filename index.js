class Port {
  constructor(field) {
    if (Port.instence) return Port.instence

    this.field = field

    Port.instence = this
  }
}

console.log(new Port('8080'));
console.log(new Port('9000'));