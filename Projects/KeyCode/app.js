const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
	let keyDisplay = event.key === " " ? "Space" : event.key;
	let modifiers = [];

	if (event.ctrlKey) modifiers.push("Ctrl");
	if (event.shiftKey) modifiers.push("Shift");
	if (event.altKey) modifiers.push("Alt");
	if (event.metaKey) modifiers.push("Meta");

	let fullKey =
		modifiers.length > 0 ? modifiers.join("+") + "+" + keyDisplay : keyDisplay;

	insert.innerHTML = `
  <div class="key">
    ${fullKey}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `;
});
