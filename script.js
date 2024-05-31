const display = document.querySelector('.display');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const resetButton = document.querySelector('#reset-button');
const lapButton = document.querySelector('#lap-button');
const lapTimes = document.querySelector('#lap-times');

let startTime;
let elapsedTime = 0;
let timerInterval;

startButton.addEventListener('click', () => {
	startTime = Date.now() - elapsedTime;
	timerInterval = setInterval(() => {
		elapsedTime = Date.now() - startTime;
		display.textContent = formatTime(elapsedTime);
	}, 10);
});

stopButton.addEventListener('click', () => {
	clearInterval(timerInterval);
});

resetButton.addEventListener('click', () => {
	clearInterval(timerInterval);
	elapsedTime = 0;
	display.textContent = formatTime(elapsedTime);
	lapTimes.innerHTML = '';
});

lapButton.addEventListener('click', () => {
	const lapTime = document.createElement('li');
	lapTime.textContent = formatTime(elapsedTime);
	lapTimes.appendChild(lapTime);
});

function formatTime(time) {
	const seconds = Math.floor(time / 1000) % 60;
	const minutes = Math.floor(time / 60000) % 60;
	const hours = Math.floor(time / 3600000);

	return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}