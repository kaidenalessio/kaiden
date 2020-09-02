const KAIDEN = {};

KAIDEN.Time = {
	time: 0,
	lastTime: 0,
	deltaTime: 0,
	update(t) {
		this.lastTime = this.time;
		this.time = t;
		this.deltaTime = this.time - this.lastTime;
	}
};

KAIDEN.Room = {
	canvas: document.createElement('canvas')
};

KAIDEN.Game = {
	start() {
		KAIDEN.Room.canvas.style.backgroundColor = 'blue';
		document.body.appendChild(KAIDEN.Room.canvas);
		window.requestAnimationFrame(KAIDEN.Game.update);
	},
	update(t) {
		console.log(KAIDEN.Time.deltaTime.toFixed(2), KAIDEN.Time.time.toFixed(2));
		KAIDEN.Time.update(t);
		window.requestAnimationFrame(KAIDEN.Game.update);
	}
};