var starList = [];
function star(x, y, r, hue, sat) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.xCoef = this.r / 10;
	this.yCoef = this.r / 2;
	this.hue = hue;
	this.sat = sat;
	var getNewPosition = function(axis, coef, maxV){
		var newPos;
		newPos = (axis >= 0)? axis += coef : maxV;
		newPos = (axis > maxV)? 0 : newPos;
		return newPos;
	};
	this.move = function () {
		this.x = getNewPosition(this.x, this.xCoef, 800);
		this.y = getNewPosition(this.y, this.yCoef, 600);
    };
};

function generateStars(){
	starsQty = 200;
	colorrange = [0,60,240];
	for (var i = 0; i < starsQty; i++) {
		var x = Math.random() * canvas.offsetWidth;
		y = Math.random() * canvas.offsetHeight;
		radius = Math.random() * 1.2;
		hue = colorrange[random(colorrange.length - 1)],
		sat = random(50) + 50;
		starList.push(new star(x, y, radius, hue, sat));
	}	
}