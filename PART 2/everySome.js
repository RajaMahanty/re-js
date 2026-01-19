const peoples = ["raja", "vijay", "ajith", "suriya", "dhanush"];


// every() method checks if all elements in an array pass a test (provided as a function).
console.log(peoples.every(name => name.length > 4));

// some() method checks if at least one element in an array passes a test (provided as a function).
console.log(peoples.some(name => name.length > 6));
