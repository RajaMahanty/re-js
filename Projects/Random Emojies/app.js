const emojiElement = document.querySelector("#emoji");
const generateBtn = document.querySelector("#generate-btn");
const copyBtn = document.querySelector("#copy-btn");
const categorySelect = document.querySelector("#category-select");
const countDisplay = document.querySelector("#count");
const emojiNameDisplay = document.querySelector("#emoji-name");
const copyFeedback = document.querySelector("#copy-feedback");

let emojiCount = 0;
let currentEmoji = "😂";
let isAnimating = false;
let isTurbo = false;

// Emoji data with categories
const emojiData = {
	happy: [
		{ emoji: "😆", name: "Laughing Face" },
		{ emoji: "😅", name: "Laughing with Sweat" },
		{ emoji: "🤣", name: "Rolling Laugh" },
		{ emoji: "😂", name: "Joy Face" },
		{ emoji: "😀", name: "Smiling Face" },
		{ emoji: "😄", name: "Smiling with Eyes" },
		{ emoji: "😃", name: "Grinning Face" },
		{ emoji: "😁", name: "Beaming Face" },
		{ emoji: "😊", name: "Smiling Face with Heart" },
		{ emoji: "🙂", name: "Slightly Smiling" },
		{ emoji: "🤗", name: "Hugging Face" },
		{ emoji: "😍", name: "Heart Eyes" },
		{ emoji: "🥰", name: "Smiling with Hearts" },
		{ emoji: "😘", name: "Face Blowing a Kiss" },
		{ emoji: "😚", name: "Kissing Closed Eyes" },
		{ emoji: "😙", name: "Kissing Face" },
		{ emoji: "🥲", name: "Smiling with Tear" },
		{ emoji: "😗", name: "Kissing Face" },
		{ emoji: "😜", name: "Winking Tongue" },
		{ emoji: "😝", name: "Squinting Tongue" },
		{ emoji: "😛", name: "Face with Tongue" },
		{ emoji: "🤑", name: "Money Face" },
		{ emoji: "😏", name: "Smirk Face" },
		{ emoji: "😣", name: "Persevering Face" },
		{ emoji: "😌", name: "Relieved Face" },
		{ emoji: "😔", name: "Pensive Face" },
		{ emoji: "😪", name: "Sleepy Face" },
		{ emoji: "🤤", name: "Drooling Face" },
		{ emoji: "😴", name: "Sleeping" },
		{ emoji: "😷", name: "Face with Medical Mask" },
	],
	cool: [
		{ emoji: "😎", name: "Cool Sunglasses" },
		{ emoji: "🤓", name: "Nerd Glasses" },
		{ emoji: "🧐", name: "Face with Monocle" },
		{ emoji: "😕", name: "Confused Face" },
		{ emoji: "😲", name: "Astonished Face" },
		{ emoji: "🙁", name: "Frowning Face" },
		{ emoji: "☹️", name: "Frowning Face Alt" },
		{ emoji: "🤨", name: "Raised Eyebrow" },
		{ emoji: "🤔", name: "Thinking Face" },
		{ emoji: "🤭", name: "Smiling with Mouth Covered" },
		{ emoji: "🤫", name: "Shushing Face" },
		{ emoji: "🤥", name: "Lying Face" },
		{ emoji: "😌", name: "Relieved Face" },
		{ emoji: "😒", name: "Unamused Face" },
		{ emoji: "😑", name: "Expressionless Face" },
		{ emoji: "😐", name: "Neutral Face" },
		{ emoji: "🤪", name: "Zany Face" },
		{ emoji: "🤩", name: "Star Eyes" },
		{ emoji: "🤥", name: "Liar Face" },
		{ emoji: "😉", name: "Winking Face" },
		{ emoji: "😌", name: "Content Face" },
		{ emoji: "😘", name: "Kissing Face" },
		{ emoji: "😗", name: "Kissing" },
		{ emoji: "😚", name: "Kissing Closed Eyes" },
		{ emoji: "😙", name: "Kissing Face Closed Eyes" },
		{ emoji: "🥳", name: "Partying Face" },
		{ emoji: "🤗", name: "Hugging Face" },
		{ emoji: "🤩", name: "Excited Face" },
		{ emoji: "🤔", name: "Thinking" },
		{ emoji: "🤨", name: "Suspicious" },
	],
	sad: [
		{ emoji: "😢", name: "Crying Face" },
		{ emoji: "😭", name: "Loudly Crying Face" },
		{ emoji: "😱", name: "Frightened Face" },
		{ emoji: "😖", name: "Confounded Face" },
		{ emoji: "😣", name: "Persevering Face" },
		{ emoji: "😞", name: "Disappointed Face" },
		{ emoji: "😓", name: "Downcast with Sweat" },
		{ emoji: "😩", name: "Weary Face" },
		{ emoji: "😫", name: "Tired Face" },
		{ emoji: "🥺", name: "Pleading Face" },
		{ emoji: "😤", name: "Face with Steam from Nose" },
		{ emoji: "😡", name: "Pouting Face" },
		{ emoji: "😠", name: "Angry Face" },
		{ emoji: "🤬", name: "Swearing Face" },
		{ emoji: "😈", name: "Smiling Devil" },
		{ emoji: "👿", name: "Angry Devil" },
		{ emoji: "💀", name: "Skull" },
		{ emoji: "☠️", name: "Skull and Bones" },
		{ emoji: "💩", name: "Pile of Poo" },
		{ emoji: "🤡", name: "Clown Face" },
		{ emoji: "👹", name: "Ogre Face" },
		{ emoji: "👺", name: "Goblin Face" },
		{ emoji: "👻", name: "Ghost" },
		{ emoji: "👽", name: "Alien" },
		{ emoji: "👾", name: "Space Invader" },
		{ emoji: "🤖", name: "Robot" },
		{ emoji: "😺", name: "Smiling Cat Face" },
		{ emoji: "😸", name: "Grinning Cat" },
		{ emoji: "😹", name: "Cat with Tears of Joy" },
		{ emoji: "😻", name: "Smiling Cat with Heart Eyes" },
	],
	love: [
		{ emoji: "❤️", name: "Red Heart" },
		{ emoji: "🧡", name: "Orange Heart" },
		{ emoji: "💛", name: "Yellow Heart" },
		{ emoji: "💚", name: "Green Heart" },
		{ emoji: "💙", name: "Blue Heart" },
		{ emoji: "💜", name: "Purple Heart" },
		{ emoji: "🖤", name: "Black Heart" },
		{ emoji: "🤍", name: "White Heart" },
		{ emoji: "🤎", name: "Brown Heart" },
		{ emoji: "💔", name: "Broken Heart" },
		{ emoji: "💕", name: "Two Hearts" },
		{ emoji: "💞", name: "Revolving Hearts" },
		{ emoji: "💓", name: "Beating Heart" },
		{ emoji: "💗", name: "Growing Heart" },
		{ emoji: "💖", name: "Sparkling Heart" },
		{ emoji: "💘", name: "Heart with Arrow" },
		{ emoji: "💝", name: "Heart with Ribbon" },
		{ emoji: "💟", name: "Heart Decoration" },
		{ emoji: "👋", name: "Waving Hand" },
		{ emoji: "🤚", name: "Raised Back of Hand" },
		{ emoji: "🖐️", name: "Hand with Fingers Splayed" },
		{ emoji: "✋", name: "Raised Hand" },
		{ emoji: "🖖", name: "Vulcan Salute" },
		{ emoji: "👌", name: "OK Hand" },
		{ emoji: "🤌", name: "Pinched Fingers" },
		{ emoji: "🤏", name: "Pinching Hand" },
		{ emoji: "✌️", name: "Victory Hand" },
		{ emoji: "🤞", name: "Crossed Fingers" },
		{ emoji: "🫰", name: "Hand with Index Finger and Thumb Crossed" },
		{ emoji: "🤟", name: "Love You Gesture" },
	],
	animals: [
		{ emoji: "🐶", name: "Dog Face" },
		{ emoji: "🐱", name: "Cat Face" },
		{ emoji: "🐭", name: "Mouse Face" },
		{ emoji: "🐹", name: "Hamster" },
		{ emoji: "🐰", name: "Rabbit Face" },
		{ emoji: "🦊", name: "Fox" },
		{ emoji: "🐻", name: "Bear" },
		{ emoji: "🐼", name: "Panda" },
		{ emoji: "🐨", name: "Koala" },
		{ emoji: "🐯", name: "Tiger Face" },
		{ emoji: "🦁", name: "Lion" },
		{ emoji: "🐮", name: "Cow Face" },
		{ emoji: "🐷", name: "Pig Face" },
		{ emoji: "🐸", name: "Frog Face" },
		{ emoji: "🐵", name: "Monkey Face" },
		{ emoji: "🙈", name: "See-No-Evil Monkey" },
		{ emoji: "🙉", name: "Hear-No-Evil Monkey" },
		{ emoji: "🙊", name: "Speak-No-Evil Monkey" },
		{ emoji: "🐒", name: "Monkey" },
		{ emoji: "🐔", name: "Chicken" },
		{ emoji: "🐧", name: "Penguin" },
		{ emoji: "🐦", name: "Bird" },
		{ emoji: "🐤", name: "Baby Chick" },
		{ emoji: "🦆", name: "Duck" },
		{ emoji: "🦅", name: "Eagle" },
		{ emoji: "🦉", name: "Owl" },
		{ emoji: "🦇", name: "Bat" },
		{ emoji: "🐺", name: "Wolf" },
		{ emoji: "🐗", name: "Boar" },
		{ emoji: "🐴", name: "Horse Face" },
	],
	food: [
		{ emoji: "🍕", name: "Pizza" },
		{ emoji: "🍔", name: "Hamburger" },
		{ emoji: "🍟", name: "French Fries" },
		{ emoji: "🍗", name: "Poultry Leg" },
		{ emoji: "🌭", name: "Hot Dog" },
		{ emoji: "🍖", name: "Meat on Bone" },
		{ emoji: "🌮", name: "Taco" },
		{ emoji: "🌯", name: "Burrito" },
		{ emoji: "🥪", name: "Sandwich" },
		{ emoji: "🥙", name: "Stuffed Flatbread" },
		{ emoji: "🧆", name: "Falafel" },
		{ emoji: "🌲", name: "Evergreen Tree" },
		{ emoji: "🍜", name: "Steaming Bowl" },
		{ emoji: "🍝", name: "Spaghetti" },
		{ emoji: "🍠", name: "Roasted Sweet Potato" },
		{ emoji: "🍱", name: "Bento Box" },
		{ emoji: "🥟", name: "Dumpling" },
		{ emoji: "🦪", name: "Oyster" },
		{ emoji: "🍣", name: "Sushi" },
		{ emoji: "🍤", name: "Fried Shrimp" },
		{ emoji: "🍙", name: "Rice Ball" },
		{ emoji: "🍚", name: "Cooked Rice" },
		{ emoji: "🍛", name: "Curry Rice" },
		{ emoji: "🍜", name: "Steaming Bowl" },
		{ emoji: "🍲", name: "Pot of Food" },
		{ emoji: "🥠", name: "Fortune Cookie" },
		{ emoji: "🥘", name: "Paella" },
		{ emoji: "🍱", name: "Bento Box" },
		{ emoji: "🥗", name: "Green Salad" },
		{ emoji: "🍛", name: "Curry Rice" },
	],
	celebration: [
		{ emoji: "🎉", name: "Party Popper" },
		{ emoji: "🎊", name: "Confetti Ball" },
		{ emoji: "🎈", name: "Balloon" },
		{ emoji: "🎁", name: "Wrapped Gift" },
		{ emoji: "🎀", name: "Ribbon" },
		{ emoji: "🎂", name: "Birthday Cake" },
		{ emoji: "🍰", name: "Cake Slice" },
		{ emoji: "🎃", name: "Jack-O-Lantern" },
		{ emoji: "🎄", name: "Christmas Tree" },
		{ emoji: "🎆", name: "Fireworks" },
		{ emoji: "🎇", name: "Sparkler" },
		{ emoji: "✨", name: "Sparkles" },
		{ emoji: "🎑", name: "Moon Viewing Ceremony" },
		{ emoji: "🎎", name: "Japanese Dolls" },
		{ emoji: "🎗️", name: "Reminder Ribbon" },
		{ emoji: "🎫", name: "Ticket" },
		{ emoji: "🎖️", name: "Military Medal" },
		{ emoji: "🏆", name: "Trophy" },
		{ emoji: "🏅", name: "Sports Medal" },
		{ emoji: "⭐", name: "Star" },
		{ emoji: "🌟", name: "Glowing Star" },
		{ emoji: "✨", name: "Sparkles" },
		{ emoji: "⚡", name: "Lightning Bolt" },
		{ emoji: "☄️", name: "Comet" },
		{ emoji: "💥", name: "Explosion" },
		{ emoji: "🔥", name: "Fire" },
		{ emoji: "🌪️", name: "Tornado" },
		{ emoji: "🌈", name: "Rainbow" },
		{ emoji: "☀️", name: "Sun" },
		{ emoji: "🌙", name: "Crescent Moon" },
	],
};

// Flatten all emojis for "all" category
const allEmojis = Object.values(emojiData).flat();

// Get emoji data by category
function getEmojisByCategory(category) {
	return category === "all" ? allEmojis : emojiData[category] || allEmojis;
}

// Generate random emoji
function generateEmoji(mode = "normal") {
	const category = categorySelect.value;
	const emojis = getEmojisByCategory(category);
	const emojiObj = emojis[Math.floor(Math.random() * emojis.length)];

	// Turbo mode: skip flip-out, quick flip-in and allow rapid retrigger
	if (mode === "turbo") {
		isTurbo = true;
		// Swap immediately
		currentEmoji = emojiObj.emoji;
		emojiElement.innerText = currentEmoji;
		emojiNameDisplay.innerText = emojiObj.name;
		emojiCount++;
		countDisplay.innerText = emojiCount;

		// Restart turbo animation quickly
		emojiElement.classList.remove(
			"flip-in-turbo",
			"flip-in",
			"flip-out",
			"switch-in",
			"switch-out",
			"pulse",
			"is-animating",
		);
		// Force reflow to restart animation
		void emojiElement.offsetWidth;
		emojiElement.classList.add("flip-in-turbo");

		return;
	}

	// Normal mode: 3D flip out → swap → flip in
	if (isAnimating) return;

	isAnimating = true;
	emojiElement.classList.remove(
		"pulse",
		"switch-in",
		"switch-out",
		"flip-in",
		"flip-out",
		"flip-in-turbo",
	);
	emojiElement.classList.add("flip-out", "is-animating");

	const handleOutEnd = () => {
		emojiElement.removeEventListener("animationend", handleOutEnd);

		// Swap content after out animation completes (at 90deg)
		currentEmoji = emojiObj.emoji;
		emojiElement.innerText = currentEmoji;
		emojiNameDisplay.innerText = emojiObj.name;
		emojiCount++;
		countDisplay.innerText = emojiCount;

		// Animate in new emoji
		emojiElement.classList.remove("flip-out");
		emojiElement.classList.add("flip-in");

		const handleInEnd = () => {
			emojiElement.removeEventListener("animationend", handleInEnd);
			emojiElement.classList.remove("flip-in", "is-animating");
			isAnimating = false;
		};

		emojiElement.addEventListener("animationend", handleInEnd);
	};

	emojiElement.addEventListener("animationend", handleOutEnd);
}

// Copy emoji to clipboard
function copyEmoji() {
	navigator.clipboard
		.writeText(currentEmoji)
		.then(() => {
			copyFeedback.textContent = "✓ Emoji copied to clipboard!";
			copyFeedback.classList.add("show");

			setTimeout(() => {
				copyFeedback.classList.remove("show");
			}, 2000);
		})
		.catch(() => {
			copyFeedback.textContent = "✗ Failed to copy";
			copyFeedback.classList.add("show");
		});
}

// Event listeners
generateBtn.addEventListener("click", () => generateEmoji("normal"));
copyBtn.addEventListener("click", copyEmoji);
emojiElement.addEventListener("click", () => generateEmoji("normal"));
categorySelect.addEventListener("change", () => generateEmoji("normal"));

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
	if (e.code === "Space" || e.code === "Enter") {
		e.preventDefault();
		const mode = e.repeat ? "turbo" : "normal";
		generateEmoji(mode);
	}
});

// Focus on emoji with keyboard
emojiElement.addEventListener("keydown", (e) => {
	if (e.code === "Space" || e.code === "Enter") {
		e.preventDefault();
		const mode = e.repeat ? "turbo" : "normal";
		generateEmoji(mode);
	}
});

// Initialize with first emoji
generateEmoji("normal");
