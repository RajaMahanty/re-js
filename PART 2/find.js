const peoples = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 16 },
  { name: 'Grace', age: 22 },
  { name: 'Heidi', age: 14 }
];

console.log(peoples.find(person => person.age < 18), "\n");

const ages = [32, 15, 19, 12, 25, 30, 18, 17, 8, 10, 120];

function isMummy(age) {
  if (age > 100) return age;
}

console.log(ages.find(isMummy));
