function ScreenUI(state) {
  this.calculations = function () {
    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
    this.main = new TextUI(state, CONFIG.screen.w / 3, CONFIG.screen.h / 3);
  };
  //10132
  //9732
  //10169

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  };

  this.click = function (pos) {
    game = new Menu();
  };

  this.draw = function () {
    drawBackground();
    drawHelpText(this.main);
    drawPointer();
  };
  this.calculations();
}

var ScreenType = {
  lost: "You Lost. Click to play again.",
  win: "Congratulations! Mr Bowman can call his mum now"
};