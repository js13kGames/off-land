function Help() {
  var rowV, posH;
  var verticalPosition = function (row) {
    return (CONFIG.screen.h / 6) + (rowV * row);
  };
  this.calculations = function () {
    rowV = changeResolution(50, resolution.w);
    posH = CONFIG.screen.w / 5;

    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
    this.argument = new TextUI(
        "Mr. Hans is lost in the vast Space and completely offline", posH,
        verticalPosition(0));
    this.mission = new TextUI(
        "Collect all the radio transmitter components and find the way back home ",
        posH / 2,
        verticalPosition(1));
    this.collect = new TextUI("Pick up all components to move to next level",
        posH,
        verticalPosition(4));
    this.enemy = new TextUI("Enemies will reduce your life ", posH,
        verticalPosition(5));
    this.shield = new TextUI("Safe Mode to become immune to damage", posH,
        verticalPosition(6));
    this.timeFreeze = new TextUI("Time-Stop to freeze enemies for a short time",
        posH,
        verticalPosition(7));
  }

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  }

  this.click = function (pos) {
    game = new Menu();
  };

  this.draw = function () {
    drawBackground();
    drawHelpText(this.argument);
    drawHelpText(this.mission);
    drawHelpText(this.shield);
    displayImage(this.level.shield.img, this.shield.xw + 10, this.shield.y,
        changeResolution(this.level.shield.width, resolution.w),
        changeResolution(this.level.shield.height, resolution.h));
    drawHelpText(this.enemy);
    displayImage(this.level.ai.img, this.enemy.xw + 10, this.enemy.y,
        changeResolution(this.level.ai.width, resolution.w),
        changeResolution(this.level.ai.height, resolution.h));
    drawHelpText(this.collect);
    displayImage(this.level.food.img, this.collect.xw + 10, this.collect.y,
        changeResolution(this.level.food.width, resolution.w),
        changeResolution(this.level.food.height, resolution.h));
    drawHelpText(this.timeFreeze);
    displayImage(this.level.timeFreeze.img, this.timeFreeze.xw + 10,
        this.timeFreeze.y,
        changeResolution(this.level.timeFreeze.width, resolution.w),
        changeResolution(this.level.timeFreeze.height, resolution.h));
    drawPointer();
  };

  this.calculations();
  this.level = new Level(1);
}