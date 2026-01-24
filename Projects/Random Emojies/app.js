const btn = document.querySelector("#emoji");

const emojis = [
	"😆",
	"😅",
	"🤣",
	"😂",
	"😀",
	"🤑",
	"🤨",
	"🙂",
	"😊",
	"😗",
	"😛",
	"😏",
	"🤥",
	"😴",
	"🥺",
	"😧",
	"😇",
	"😳",
	"🙃",
	"🥴",
	"🧐",
	"🤨",
	"😒",
	"🤔",
	"🤭",
	"🥰",
	"🤐",
	"😄",
	"🤔",
	"🤪",
	"🥲",
	"😃",
	"😁",
	"😬",
];

btn.addEventListener("click", () => {
	btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
