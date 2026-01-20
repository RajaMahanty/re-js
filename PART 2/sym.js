const sym = Symbol("mySymbol");
console.log("Type of sym: ", typeof sym);

console.log("Description of sym: ", sym.description);

const sym2 = Symbol("mySymbol");
console.log("sym === sym2: ", sym === sym2); // false, symbols are unique

// EXERCISE

const symE = Symbol("foo");

console.log(typeof symE);

let obj = {};
obj[symE] = "bar";

console.log("obj[symE]: ", obj[symE]);
