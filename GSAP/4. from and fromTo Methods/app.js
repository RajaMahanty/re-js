gsap.from(".box1", {
	y: -200,
	duration: 3,
	ease: "linear",
	repeat: -1,
	yoyo: true,
});

gsap.fromTo(
	".box2",
	{
		y: 200,
		opacity: 0,
	},
	{
		opacity: 1,
		y: -200,
		duration: 3,
		ease: "linear",
		borderRadius: 0,
		repeat: -1,
		yoyo: true,
	},
);

gsap.fromTo(
	".box3",
	{
		x: -300,
		rotation: 0,
	},
	{
		x: 300,
		rotation: 360,
		duration: 4,
		ease: "power1.inOut",
		repeat: -1,
		yoyo: true,
	},
);
