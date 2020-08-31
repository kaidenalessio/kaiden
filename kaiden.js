const KAIDEN = {};

KAIDEN.Room = {
	canvas: document.createElement('canvas')
};

KAIDEN.Game = {
	start() {
		KAIDEN.Room.canvas.style.backgroundColor = 'blue';
		document.body.appendChild(KAIDEN.Room.canvas);
	}
};