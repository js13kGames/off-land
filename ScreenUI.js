function ScreenUI(state) {
  this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
  this.main = new TextUI(state, CONFIG.screen.w / 3, CONFIG.screen.h / 3);

  //10132
  //9732
  //10169

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  }

  this.click = function (pos) {
    game = new Menu();
  };

  this.draw = function () {
    drawBackground();
    drawHelpText(this.main);
    drawPointer();
  }
}

var ScreenType = {
  lost: "You Lost",
  win: "Congratulations!"
};


function openFullscreen() {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.mozRequestFullScreen) { /* Firefox */
    canvas.mozRequestFullScreen();
  } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    canvas.webkitRequestFullscreen();
  } else if (canvas.msRequestFullscreen) { /* IE/Edge */
    canvas.msRequestFullscreen();
  }
}