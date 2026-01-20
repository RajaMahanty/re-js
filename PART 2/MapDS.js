const map = new Map();

const keyOne = "raja";
const keyTwo = {};
const keyThree = function() { }

map.set(keyOne, "Value of keyOne")
map.set(keyTwo, "Value of keyTwo")
map.set(keyThree, "Value of keThree")
console.log(map, "\n")


const map2 = new Map();

map2.set("a", 1);
map2.set("b", 2);
map2.set("c", 3);

console.log("map2.a = ", map2.get("a"));
console.log("map2.size = ", map2.size);
map2.delete("b");
console.log("b deleted! Now size: ", map2.size);
