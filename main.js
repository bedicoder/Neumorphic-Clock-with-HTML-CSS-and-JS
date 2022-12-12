/** @format */

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

clock = () => {
	let today = new Date();
	let h = (today.getHours() % 12) + today.getMinutes() / 60;

	let m = today.getMinutes();
	let s = today.getSeconds();

	h *= 30; // 12 * 30 = 360deg
	m *= 6; // 6 * 60 = 360deg
	s *= 6;

	rotation(hours, h);
	rotation(minutes, m);
	rotation(seconds, s);

	// Call every second

	setTimeout(clock, 500);
};
rotation = (target, val) => {
	target.style.transform = `rotate(${val}deg)`;
};
window.onload = clock();
