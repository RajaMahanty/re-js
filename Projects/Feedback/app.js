const ratings = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingContainer.addEventListener("click", (e) => {
	if (e.target.parentNode.classList.contains("rating")) {
		// console.log(e.target.parentNode.classList.contains("rating"));
		removeActive();
		e.target.parentNode.classList.add("active");
		selectedRating = e.target.nextElementSibling.innerHTML;
	}
});

sendBtn.addEventListener("click", () => {
	panel.innerHTML = `
    <p class="heart" style="font-size: 5em">❤️</p>
    <strong>Thank you!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
  `;
});

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active");
	}
}
