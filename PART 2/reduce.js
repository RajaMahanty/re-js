// reduce () method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers = [10, 20, 30, 40, 50];

// Sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}, Sum: ${accumulator + currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("Sum:", sum); // Output: Sum: 15

// Find the maximum number in the array
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, numbers[0]);

console.log("Max:", max); // Output: Max: 5

// Flatten an array of arrays
const arrays = [[1, 2], [3, 4], [5]];
const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log("Flattened:", flattened); // Output: Flattened: [1, 2, 3, 4, 5]

// Count occurrences of each element in an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

const fruitCount2 = fruits.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  return frequencyMap;
}, {});

console.log("Fruit Count:", fruitCount); // Output: Fruit Count: { apple: 3, banana: 2, orange: 2 }
console.log("Fruit Count2:", fruitCount2); // Output: Fruit Count: { apple: 3, banana: 2, orange: 2 }

const peoples = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 65 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 16 },
  { name: 'Grace', age: 22 },
  { name: 'Heidi', age: 14 },
  { name: 'Zara', age: 35 },
  { name: 'Yanni', age: 45 }
]

const oldestOne = peoples.reduce((oldest, person) => (person.age > oldest.age ? person : oldest), { name: "GOD", age: 0 });

console.log("Oldest Age:", oldestOne);

const numbers2 = [1, 2, 3, 4, 5];

function calculateProduct(arr) {
  return arr.reduce((product, number) => product * number, 1);
}

const product = calculateProduct(numbers2);

console.log("Product:", product); // Output: Product: 120
