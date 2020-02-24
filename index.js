const foo = () => `hi my webStrom`;

const options = {
    id: Date.now(),
    text: foo(),
    f: () => this.text,
};

const x = false || true || 5;
const y = foo();