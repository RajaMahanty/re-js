"use strict";

const initialValues = [1, 3, 4, 4, 1, 23, 23, 34, 4]

console.log("initialValues: ", initialValues)

const mySet = new Set(initialValues);

console.log("mySet: ", mySet)

mySet.add(10);
mySet.add(3); // duplicate, will be ignored

console.log("mySet after adding 10 and 3: ", mySet)

mySet.delete(4);

console.log("mySet after deleting 4: ", mySet)

console.log("Iterating over mySet values: ");
for (let value of mySet.values()) {
  console.log(value);
}

console.log("mySet has 23: ", mySet.has(23));
console.log("mySet size: ", mySet.size);


mySet.clear();

console.log("mySet after clear(): ", mySet)


console.log("\n--- Set exercise ---\n");

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

for (let item of letters.values()) {
  console.log(item)
}


console.log(letters)
