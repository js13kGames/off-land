function Game() {
  var currentLevel = CONFIG.start;
  this.life = CONFIG.life;
  this.preGame = true;
  // Start New Level
  this.start = function () {
    level = new Level(currentLevel);
    playSong(currentLevel);
    player = new Player(CONFIG.initPos.x, CONFIG.initPos.y, CONFIG.player.w,
        CONFIG.player.h);
    pointer = player;
    player.addShield(CONFIG.shield.start);
    generate(level.ai, CONFIG.screen, AI);
    generate(level.food, CONFIG.screen, ElementUI);
  };

  this.nextLevel = function () {
    this.generateStaticImages();
    currentLevel = (currentLevel === LEVEL_CONFIG.levels) ? CONFIG.start
        : currentLevel + 1;
    this.preGame = true;
    this.start();
  };

  this.restart = function () {
    currentLevel = CONFIG.start;
    this.life = CONFIG.life;
    this.start();
  };

  this.generateStaticImages = function () {
    generateStaticStars();
    backImg = null;
  };

  this.hasLost = function () {
    return (Math.floor(this.life) <= 0);
  };

  this.mousemove = function (pos) {
    player.e.move(pos.x, pos.y);
  };

  this.click = function (pos) {
    if (game.preGame) {
      game.preGame = false;
    }
  };

  this.draw = function () {
    this.preGame ? this.drawPreGame() : this.drawGame();
  };

  this.drawGame = function () {
    drawBackground();
    drawPlanet(currentLevel);
    checkFoodCollision();
    checkShieldCollision();
    checkTimeFreezeCollision();

    drawStats();
    drawPlayer();
    drawFood();
    drawShield();
    drawTimeFreeze();
    drawAI();


    checkLevelStatus();
  };

  this.drawPreGame = function () {
    drawBackground();
    drawPlanet(currentLevel);
    drawStats();
    drawAI();
    drawPreGameText();
  };

  this.calculations = function (from, to) {
    player.e.w = CONFIG.player.w;
    player.e.h = CONFIG.player.h;
    player.e.relocate();
    if (player.shield <= 0) {
      player.addShield(1);
    }
    relocateEveryone(from, to);
  }

  function relocateEveryone(from, to) {
    var x_p = 0, y_p = 0;
    if (from.w !== to.w && from.h !== to.h) {
      x_p = 100 / from.w * to.w;
      y_p = 100 / from.h * to.h;
      relocateItemList(level.ai.list, x_p, y_p, true);
      relocateItemList(level.shield.list, x_p, y_p);
      relocateItemList(level.timeFreeze.list, x_p, y_p);
      relocateItemList(level.food.list, x_p, y_p);
      relocateItemList([player], x_p, y_p, true);
    }
  }

}