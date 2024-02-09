function fizzBuzzFor(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            result.push("fizz buzz");
        } else if (arr[i] % 3 === 0) {
            result.push("fizz");
        } else if (arr[i] % 5 === 0) {
            result.push("buzz");
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(fizzBuzzFor([8, 3, 9, 2, 5]));
console.log(fizzBuzzFor([3, 4, 6, 7, 9]));  
console.log(fizzBuzzFor([4, 5, 9, 15, 19])); 
console.log(fizzBuzzFor([2, 4, 7, 8, 1])); 
