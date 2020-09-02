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

KAIDEN.Draw = {
	ctx: null,
	setCtx(ctx) {
		this.ctx = ctx;
	},
	circle(x, y, r) {
		this.ctx.beginPath();
		this.ctx.arc(x, y, r, 0, 2 * Math.PI);
		this.ctx.fill();
	}
};

let x, y, r;

KAIDEN.Room = {
	canvas: document.createElement('canvas'),
	start() {
		x = 0;
		y = 32;
		r = 10;
		KAIDEN.Draw.setCtx(KAIDEN.Room.canvas.getContext('2d'));
	},
	update() {
		console.log(KAIDEN.Time.deltaTime.toFixed(2), KAIDEN.Time.time.toFixed(2));
		x = this.canvas.width * 0.5 + Math.sin(KAIDEN.Time.time * 0.001) * this.canvas.width * 0.5;
	},
	render() {
		KAIDEN.Draw.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		KAIDEN.Draw.circle(x, y, r);
	}
};

KAIDEN.Game = {
	start() {
		KAIDEN.Room.canvas.style.backgroundColor = 'blue';
		document.body.appendChild(KAIDEN.Room.canvas);
		KAIDEN.Room.start();
		window.requestAnimationFrame(KAIDEN.Game.update);
	},
	update(t) {
		KAIDEN.Time.update(t);
		KAIDEN.Room.update();
		KAIDEN.Room.render();
		window.requestAnimationFrame(KAIDEN.Game.update);
	}
};