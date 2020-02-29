enum Index {
    iphone = 1,
    samsung = 3,
}

const obj = {
    s: {
        f: {
            a: 3,
            g: {
                g: 'hello'
            }
        }
    }
};

const copy = {
    ...obj,
    s: {
        ...obj.s,
        f: {
            ...obj.s.f,
            a: null
        }
    }
};

console.log(copy);
console.log(copy === obj);