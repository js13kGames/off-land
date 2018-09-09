function ElementUI(x, y, h, w) {
  this.original = {
    w: w,
    h: h
  };

  this.resize = function(){
    this.w = changeResolution(this.original.w, resolution.w);
    this.h = changeResolution(this.original.h, resolution.h);
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