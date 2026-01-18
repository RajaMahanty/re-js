// ============================================
// clearInterval and clearTimeout
// ============================================

const intervalId = setInterval(function () {
	console.log("This will run every second.");
}, 1000);

const timeoutId = setTimeout(function () {
	clearInterval(intervalId);
	console.log("Interval cleared after 5 seconds.");
	clearTimeout(timeoutId); // Not necessary, but for demonstration as timeout has already executed here, no need to clear it.
}, 5000);

// ============================================
// setTimeout
// ============================================

// setTimeout(function () {
// 	console.log("Executed after 3 seconds!");
// }, 3000);

// ============================================
// setInterval
// ============================================

// setInterval(function () {
// 	console.log("Executing every 2 seconds!");
// }, 2000);

// ============================================
// Date
// ============================================

// const now = new Date();

// // Get date components
// console.log("Year:", now.getFullYear()); // 2024
// console.log("Month:", now.getMonth()); // 0-11 (0 = January)
// console.log("Date:", now.getDate()); // 1-31
// console.log("Day:", now.getDay()); // 0-6 (0 = Sunday)
// console.log("Hours:", now.getHours()); // 0-23
// console.log("Minutes:", now.getMinutes()); // 0-59
// console.log("Seconds:", now.getSeconds()); // 0-59
// console.log("Milliseconds:", now.getMilliseconds()); // 0-999

// // Format as string
// console.log("toString():", now.toString());
// console.log("toDateString():", now.toDateString());
// console.log("toTimeString():", now.toTimeString());
// console.log("toISOString():", now.toISOString());
// console.log("toLocaleDateString():", now.toLocaleDateString());
// console.log("toLocaleTimeString():", now.toLocaleTimeString());

// // Get timestamp
// console.log("getTime():", now.getTime());
// console.log("valueOf():", now.valueOf());

// // Create from specific date
// const specificDate = new Date(2024, 0, 10, 14, 30, 45, 500);
// console.log("Specific date:", specificDate.toDateString());

// // Compare dates
// const date1 = new Date(2024, 0, 10);
// const date2 = new Date(2024, 0, 15);
// console.log("date1 < date2:", date1 < date2);
// console.log("Difference (ms):", date2.getTime() - date1.getTime());

// // Add days
// const future = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
// console.log("7 days from now:", future.toDateString());

// // UTC methods
// console.log("getUTCFullYear():", now.getUTCFullYear());
// console.log("getUTCHours():", now.getUTCHours());

// ============================================
// JSON
// ============================================

// const person = {
// 	name: "Raja",
// 	age: 22,
// 	email: "rajamahanty2@gmail.com",
// 	isGamer: true,
// 	hobbies: ["Reading", "Gaming", "Cooking"],
// 	address: {
// 		street: "123 Main St",
// 		city: "Balarampur",
// 		state: "WB",
// 		zip: "723143",
// 		country: "India",
// 	},
// };

// console.log(person);
// console.log(JSON.stringify(person));
