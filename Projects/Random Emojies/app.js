import { emojiData } from "./emoji-data.js";

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const CONFIG = {
	ANIMATION: {
		FLIP_DURATION: 600, // milliseconds
		TURBO_DURATION: 200,
		FEEDBACK_DURATION: 2000,
		TIMEOUT_SAFETY: 1000, // Safety timeout for animation cleanup
	},
	KEYS: {
		SPACE: "Space",
		ENTER: "Enter",
	},
	CLASSES: {
		FLIP_OUT: "flip-out",
		FLIP_IN: "flip-in",
		FLIP_IN_TURBO: "flip-in-turbo",
		PULSE: "pulse",
		SWITCH_IN: "switch-in",
		SWITCH_OUT: "switch-out",
		IS_ANIMATING: "is-animating",
		SHOW: "show",
	},
	FEEDBACK: {
		SUCCESS: "✓ Emoji copied to clipboard!",
		ERROR: "✗ Failed to copy",
	},
	CATEGORIES: {
		ALL: "all",
	},
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const elements = {
	emoji: document.querySelector("#emoji"),
	generateBtn: document.querySelector("#generate-btn"),
	copyBtn: document.querySelector("#copy-btn"),
	categorySelect: document.querySelector("#category-select"),
	countDisplay: document.querySelector("#count"),
	emojiNameDisplay: document.querySelector("#emoji-name"),
	copyFeedback: document.querySelector("#copy-feedback"),
	emojiLiveRegion: document.querySelector("#emoji-live-region"),
};

// Validate all required DOM elements exist
function validateDOMElements() {
	const missingElements = Object.entries(elements)
		.filter(([key, value]) => !value && key !== "emojiLiveRegion") // emojiLiveRegion is optional
		.map(([key]) => key);

	if (missingElements.length > 0) {
		console.error("Missing required DOM elements:", missingElements);
		throw new Error(
			`Required DOM elements not found: ${missingElements.join(", ")}`,
		);
	}
}

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

const state = {
	emojiCount: 0,
	currentEmoji: "😂",
	currentEmojiName: "Joy Face",
	isAnimating: false,
	animationTimeoutId: null,
	allEmojis: null, // Lazy-loaded
};

// ============================================================================
// EMOJI DATA UTILITIES
// ============================================================================

/**
 * Get all emojis flattened (lazy-loaded)
 */
function getAllEmojis() {
	if (!state.allEmojis) {
		state.allEmojis = Object.values(emojiData).flat();
	}
	return state.allEmojis;
}

/**
 * Get emoji data by category
 * @param {string} category - The category to retrieve
 * @returns {Array} Array of emoji objects
 */
function getEmojisByCategory(category) {
	return category === CONFIG.CATEGORIES.ALL
		? getAllEmojis()
		: (emojiData[category] ?? getAllEmojis());
}

/**
 * Select a random emoji from a given array
 * @param {Array} emojis - Array of emoji objects
 * @returns {Object} Random emoji object with {emoji, name}
 */
function selectRandomEmoji(emojis) {
	return emojis[Math.floor(Math.random() * emojis.length)];
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Clear all animation classes from an element
 * @param {HTMLElement} element - The element to clear
 */
function clearAnimationClasses(element) {
	const animationClasses = [
		CONFIG.CLASSES.FLIP_IN_TURBO,
		CONFIG.CLASSES.FLIP_IN,
		CONFIG.CLASSES.FLIP_OUT,
		CONFIG.CLASSES.SWITCH_IN,
		CONFIG.CLASSES.SWITCH_OUT,
		CONFIG.CLASSES.PULSE,
		CONFIG.CLASSES.IS_ANIMATING,
	];
	element.classList.remove(...animationClasses);
}

/**
 * Clear any existing animation timeout
 */
function clearAnimationTimeout() {
	if (state.animationTimeoutId) {
		clearTimeout(state.animationTimeoutId);
		state.animationTimeoutId = null;
	}
}

/**
 * Update emoji display with new content
 * @param {string} emoji - The emoji character
 * @param {string} name - The emoji name
 */
function updateEmojiDisplay(emoji, name) {
	state.currentEmoji = emoji;
	state.currentEmojiName = name;
	elements.emoji.innerText = emoji;
	elements.emoji.setAttribute("aria-label", name);
	elements.emojiNameDisplay.innerText = name;
	state.emojiCount++;
	elements.countDisplay.innerText = state.emojiCount;

	// Announce to screen readers
	if (elements.emojiLiveRegion) {
		elements.emojiLiveRegion.textContent = `${name} emoji generated`;
	}
}

// ============================================================================
// EMOJI GENERATION
// ============================================================================

/**
 * Generate emoji in turbo mode (rapid fire)
 */
function generateEmojiTurbo() {
	const category = elements.categorySelect.value;
	const emojis = getEmojisByCategory(category);
	const { emoji, name } = selectRandomEmoji(emojis);

	// Update immediately
	updateEmojiDisplay(emoji, name);

	// Quick animation
	clearAnimationClasses(elements.emoji);
	// Force reflow to restart animation
	void elements.emoji.offsetWidth;
	elements.emoji.classList.add(CONFIG.CLASSES.FLIP_IN_TURBO);
}

/**
 * Generate emoji in normal mode (full 3D flip animation)
 */
function generateEmojiNormal() {
	if (state.isAnimating) return;

	const category = elements.categorySelect.value;
	const emojis = getEmojisByCategory(category);
	const { emoji, name } = selectRandomEmoji(emojis);

	state.isAnimating = true;
	clearAnimationClasses(elements.emoji);
	elements.emoji.classList.add(
		CONFIG.CLASSES.FLIP_OUT,
		CONFIG.CLASSES.IS_ANIMATING,
	);

	// Safety timeout in case animationend doesn't fire
	clearAnimationTimeout();
	state.animationTimeoutId = setTimeout(() => {
		console.warn("Animation timeout triggered - cleaning up");
		finishAnimation();
	}, CONFIG.ANIMATION.FLIP_DURATION + CONFIG.ANIMATION.TIMEOUT_SAFETY);

	const handleOutEnd = () => {
		elements.emoji.removeEventListener("animationend", handleOutEnd);

		// Swap content after out animation completes (at 90deg)
		updateEmojiDisplay(emoji, name);

		// Animate in new emoji
		elements.emoji.classList.remove(CONFIG.CLASSES.FLIP_OUT);
		elements.emoji.classList.add(CONFIG.CLASSES.FLIP_IN);

		const handleInEnd = () => {
			elements.emoji.removeEventListener("animationend", handleInEnd);
			finishAnimation();
		};

		elements.emoji.addEventListener("animationend", handleInEnd, {
			once: true,
		});
	};

	elements.emoji.addEventListener("animationend", handleOutEnd, { once: true });
}

/**
 * Clean up animation state
 */
function finishAnimation() {
	clearAnimationTimeout();
	clearAnimationClasses(elements.emoji);
	state.isAnimating = false;
}

/**
 * Main emoji generation function
 * @param {string} mode - "normal" or "turbo"
 */
function generateEmoji(mode = "normal") {
	if (mode === "turbo") {
		generateEmojiTurbo();
	} else {
		generateEmojiNormal();
	}
}

// ============================================================================
// CLIPBOARD FUNCTIONALITY
// ============================================================================

/**
 * Copy text to clipboard with fallback for older browsers
 * @param {string} text - Text to copy
 * @returns {Promise} Promise that resolves when copy succeeds
 */
function copyTextToClipboard(text) {
	// Prefer modern Clipboard API when available
	if (navigator?.clipboard?.writeText) {
		return navigator.clipboard.writeText(text);
	}

	// Fallback: use a temporary textarea and execCommand
	return new Promise((resolve, reject) => {
		try {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			// Keep off-screen and unobtrusive
			textarea.style.position = "fixed";
			textarea.style.top = "-1000px";
			textarea.style.left = "-1000px";
			textarea.setAttribute("readonly", "");
			document.body.appendChild(textarea);
			textarea.select();
			textarea.setSelectionRange(0, text.length);
			const successful = document.execCommand("copy");
			document.body.removeChild(textarea);
			if (successful) {
				resolve();
			} else {
				reject(new Error("execCommand returned false"));
			}
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * Show feedback message
 * @param {string} message - Message to display
 * @param {boolean} isSuccess - Whether the message is success or error
 */
function showFeedback(message, isSuccess = true) {
	elements.copyFeedback.textContent = message;
	elements.copyFeedback.classList.add(CONFIG.CLASSES.SHOW);
	elements.copyFeedback.setAttribute("role", "status");
	elements.copyFeedback.setAttribute("aria-live", "polite");

	setTimeout(() => {
		elements.copyFeedback.classList.remove(CONFIG.CLASSES.SHOW);
	}, CONFIG.ANIMATION.FEEDBACK_DURATION);
}

/**
 * Copy current emoji to clipboard
 */
function copyEmoji() {
	copyTextToClipboard(state.currentEmoji)
		.then(() => {
			showFeedback(CONFIG.FEEDBACK.SUCCESS, true);
		})
		.catch((err) => {
			showFeedback(CONFIG.FEEDBACK.ERROR, false);
			console.error("Copy failed:", err);
		});
}

// ============================================================================
// EVENT HANDLERS
// ============================================================================

/**
 * Handle keyboard events for emoji generation
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleKeyboardGeneration(e) {
	if (e.code === CONFIG.KEYS.SPACE || e.code === CONFIG.KEYS.ENTER) {
		e.preventDefault();
		const mode = e.repeat ? "turbo" : "normal";
		generateEmoji(mode);
	}
}

/**
 * Handle category change
 */
function handleCategoryChange() {
	// Generate new emoji from new category
	generateEmoji("normal");
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Set up all event listeners
 */
function setupEventListeners() {
	// Button clicks
	elements.generateBtn.addEventListener("click", () => generateEmoji("normal"));
	elements.copyBtn.addEventListener("click", copyEmoji);

	// Category selection
	elements.categorySelect.addEventListener("change", handleCategoryChange);

	// Keyboard shortcuts (use single handler for document)
	document.addEventListener("keydown", handleKeyboardGeneration);
}

/**
 * Initialize the application
 */
function init() {
	try {
		validateDOMElements();
		setupEventListeners();
		// Generate initial emoji
		generateEmoji("normal");
	} catch (error) {
		console.error("Failed to initialize application:", error);
		// Show error to user if possible
		if (elements.emoji) {
			elements.emoji.innerText = "❌";
			elements.emojiNameDisplay.innerText = "Initialization Error";
		}
	}
}

// Start the application when DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}
