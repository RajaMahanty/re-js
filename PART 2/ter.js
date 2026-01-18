// Ternary operator syntax: condition ? trueValue : falseValue

// Example 1: Simple ternary operator
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult

// Example 2: Ternary with variables
const score = 75;
const result = score >= 60 ? "Pass" : "Fail";
console.log(result); // Output: Pass

// Example 3: Nested ternary operator
const marks = 85;
const grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "D";
console.log(grade); // Output: B

// Example 4: Ternary in assignment
const num = 10;
const isEven = num % 2 === 0 ? true : false;
console.log(isEven); // Output: true

// Example 5: Ternary with function calls
const canVote =
	age >= 18 ? console.log("Can vote") : console.log("Cannot vote");
