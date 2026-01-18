// Iterating over an array
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
	console.log(fruit);
}

// Iterating over a string
const str = "hello";

for (const char of str) {
	console.log(char);
}

// Iterating over a Set
const numbers = new Set([1, 2, 3, 4, 5]);

for (const num of numbers) {
	console.log(num);
}

// Iterating over a Map
const map = new Map([
	["a", 1],
	["b", 2],
]);

for (const [key, value] of map) {
	console.log(key, value);
}
