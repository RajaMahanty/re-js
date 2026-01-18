const person = {
	name: "John",
	age: 30,
	city: "New York",
};

for (const key in person) {
	console.log(key + ": " + person[key]);
}

// WHAT THE HELL IS HAPPEING HERE????
// const person = {
// 	name: "John",
// 	age: 30,
// 	city: "New York",
// };

// for (const [key, value] in person) {
// 	console.log(key + ": " + value);
// }
