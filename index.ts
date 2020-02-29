const sum = (...rest) => rest.reduce((acc, elem) => acc + elem, 0);

console.log(sum(124, 3, 99, 88));