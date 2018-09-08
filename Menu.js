function Menu() {
  this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
  this.start = new TextUI("Start Game", CONFIG.screen.w / 3, CONFIG.screen.h
      / 3);
  this.normal = new TextUI("Normal", CONFIG.screen.w / 3, (CONFIG.screen.h / 3)
      + 50);
  this.hard = new TextUI("Hard", CONFIG.screen.w / 3, (CONFIG.screen.h / 3)
      + 100);
  this.help = new TextUI("HELP", CONFIG.screen.w / 3, (CONFIG.screen.h / 3)
      + 200);
  this.fullScreen = new TextUI("Fullscreen " + String.fromCharCode(10530), 30, CONFIG.screen.h-20);

  //10132
  //9732
  //10169

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  }

  this.click = function (pos) {
    if (checkCollision(this.start, this.pointer)) {
      game = new Game();
      game.start();
    } else if (checkCollision(this.normal, this.pointer)) {
      reloadConfig(1);
    } else if (checkCollision(this.hard, this.pointer)) {
      reloadConfig(2);
    } else if (checkCollision(this.help, this.pointer)) {
      game = new Help();
    }else if (checkCollision(this.fullScreen, this.pointer)){
      openFullscreen();
    }
  };

  this.draw = function (timer) {
    drawBackground(timer);
    difficultyText();
    drawMenuText(this.start, this.pointer);
    drawMenuText(this.normal, this.pointer);
    drawMenuText(this.hard, this.pointer);
    drawMenuText(this.help, this.pointer);
    drawMenuText(this.fullScreen, this.pointer);
    drawPointer();
  }
}