console.log('stop watch');

let timer = {
	btnReset: document.querySelector('#reset'),
	btnStart: document.querySelector('#start'),
	btnPause: document.querySelector('#pause'),
	timerDisplay: document.querySelector('#timer'),
	counter: 0,
	timerId: '',

	updateTime: function() {
		if (this.timerId == '') {
			this.timerId = setInterval(() => {
				this.timerDisplay.innerHTML = 'Time elapsed: ' + this.convertToMin(this.counter++);
			}, 1000)
		}		
	},

	convertToMin: function(seconds) {
		let min = Math.floor(seconds / 60);
		let sec = seconds % 60;
		return min + ' : ' + sec;
	},

	resetTime: function() {
		clearInterval(this.timerId);
		this.counter = 0;
		this.timerDisplay.innerHTML = 'Stop Watch';
		this.timerId = '';
	},

	pauseTime: function() {
		clearInterval(this.timerId);
		this.timerId = '';
	}
}

timer.btnReset.addEventListener('click', () => {
	timer.resetTime();
})

timer.btnStart.addEventListener('click', () => {
	timer.updateTime();
})

timer.btnPause.addEventListener('click', () => {
	timer.pauseTime();
})

