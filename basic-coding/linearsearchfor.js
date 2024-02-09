function linearSearchFor(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;
        }
    }
    return undefined;
}

console.log(linearSearchFor(3, [8, 3, 9, 2, 5]));
console.log(linearSearchFor(4, [2, 6, 7, 4, 1]));
console.log(linearSearchFor(9, [2, 6, 7, 5, 1]));
