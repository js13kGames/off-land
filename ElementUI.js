function ElementUI(x, y, h, w) {
  this.h = h;
  this.w = w;

  this.relocate = function () {
    this.xw = this.x + this.w;
    this.yh = this.y + this.h;
  };

  this.move = function (x, y) {
    this.x = x;
    this.y = y;
    this.relocate();
  };

  this.move(x, y);
}