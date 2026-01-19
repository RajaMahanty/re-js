// forEach - executes a function for each element in an array
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

forEach(numbers, (num, index) => {
  console.log(`Index ${index}: ${num}`);
});

console.log("\n")

const colors = ["blue", "green", "red", "yellow", "purple"];

colors.forEach((color) => console.log(color));


console.log("\n")

const words = ["hello", "world", "this", "is", "JavaScript"];

words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
})

console.log(words + "\n");

// EXERCISE:

let arr = [1, 2, 3, 4];
let sum = 0;

function adder(num) {
  sum += num;
}

forEach(arr, adder)

console.log(sum);
