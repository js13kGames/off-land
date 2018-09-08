function ElementUI(x, y, h, w) {
  this.original = {
    w: w,
    h: h
  };

  this.resize = function(){
    this.w = this.original.w * resolution;
    this.h = this.original.h * resolution;
  }

  this.resize();

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