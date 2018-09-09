var starList = [];
var getNewPosition = function (axis, coef, maxV) {
  var newPos;
  newPos = (axis >= 0) ? axis += coef : maxV;
  newPos = (axis > maxV) ? 0 : newPos;
  return newPos;
};

function star(x, y, r, hue, sat) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xCoef = -this.r / 20;
  this.yCoef = this.r / 5;
  this.hue = hue;
  this.sat = sat;

  this.move = function (i) {
    this.x = getNewPosition(this.x, this.xCoef, CONFIG.screen.w);
    this.y = getNewPosition(this.y, this.yCoef, CONFIG.screen.h);
  };
};

function generateStaticStars() {
  generateStars(100, 1.2);
}

function generateDynamicStars() {
  generateStars(30, 2);
}

function generateStars(starsQty, size) {
  starList = [];
  var colorrange = [0, 60, 240];
  for (var i = 0; i < starsQty; i++) {
    var x = Math.random() * CONFIG.screen.w;
    var y = Math.random() * CONFIG.screen.h;
    var radius = Math.random() * size;
    var hue = colorrange[random(colorrange.length - 1)];
    var sat = random(50) + 50;
    starList.push(new star(x, y, radius, hue, sat));
  }
}