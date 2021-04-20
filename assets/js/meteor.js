// Meteor Creation
const animatedSection = document.querySelector(".animated-area");

function createMeteors() {
	// creation of meteors using --> span.meteor
	const meteor = document.createElement("span");
	meteor.classList.add("meteor");

	// starting it from right top corner; styling it from left;
	meteor.style.left = Math.random() * window.innerWidth + 500 + "px";

	// random length of meteor b/w 160 and 160 + 70 = 230
	meteor.style.height = Math.floor(Math.random() * 160) + 70 + "px";
	// random width of meteor b/w 1 and 3
	meteor.style.width = Math.floor(Math.random() * 1) + 2 + "px";

	animatedSection.append(meteor);

	// remove the span after 4 seconds;
	setTimeout(() => {
		meteor.remove();
	}, 3000);
}

// createMeteors() function will run every 500ms;
setInterval(createMeteors, 6000);

// star creation
function createStars() {
	let i;
	let noOfStars = window.innerHeight < 600 ? 20 : 50;
	for (i = 0; i < noOfStars; ++i) {
		// creation of stars using --> span.star
		const star = document.createElement("span");
		star.classList.add("star");

		var x = Math.floor(Math.random() * window.innerWidth),
			y = Math.floor(Math.random() * window.innerHeight),
			duration = Math.random() * 10,
			size = Math.random() * 2,
			z = Math.floor(Math.random() * 1) + 2;

		star.style.left = x + "px";
		star.style.top = y + "px";
		star.style.width = z + size + "px";
		star.style.height = z + size + "px";

		star.style.animationDuration = 5 + duration + "s";
		star.style.animationDelay = duration + "s";

		animatedSection.append(star);
	}
}

createStars();
