function linearSearchArrayMethod(target, arr) {
    return arr.find(item => item === target);
}

console.log(linearSearchArrayMethod(3, [8, 3, 9, 2, 5]));
console.log(linearSearchArrayMethod(4, [2, 6, 7, 4, 1]));
console.log(linearSearchArrayMethod(9, [2, 6, 7, 5, 1]));
