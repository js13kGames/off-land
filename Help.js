function Help() {
  var rowV = 50;
  var posH = CONFIG.screen.w / 5;
  var verticalPosition = function (row) {
    return (CONFIG.screen.h / 3) + (rowV * row);
  };
  this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
  this.collect = new TextUI("Collect all of them to go to next level", posH,
      verticalPosition(0));
  this.enemy = new TextUI("Enemies will reduce your life ", posH,
      verticalPosition(1));
  this.shield = new TextUI("Safe Mode to become inmune to enemies", posH,
      verticalPosition(2));
  this.timeFreeze = new TextUI("Freezes Enemies during some time", posH,
      verticalPosition(3));

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  }

  this.click = function (pos) {
    game = new Menu();
  };

  this.draw = function () {
    drawBackground();
    drawHelpText(this.shield);
    displayImage(this.level.shield.img, this.shield.xw + 10, this.shield.y,
        this.level.shield.width, this.level.shield.height);
    drawHelpText(this.enemy);
    displayImage(this.level.ai.img, this.enemy.xw + 10, this.enemy.y,
        this.level.ai.width, this.level.ai.height);
    drawHelpText(this.collect);
    displayImage(this.level.food.img, this.collect.xw + 10, this.collect.y,
        this.level.food.width, this.level.food.height);
    drawHelpText(this.timeFreeze);
    displayImage(this.level.timeFreeze.img, this.timeFreeze.xw + 10,
        this.timeFreeze.y, this.level.timeFreeze.width,
        this.level.timeFreeze.height);
    drawPointer();
  }

  this.level = new Level(1);

}