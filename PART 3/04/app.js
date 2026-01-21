const element = document.getElementById("myElement");
const button = document.getElementById("toggleClass");

button.addEventListener("click", () => {
	element.classList.toggle("highlight");
});
