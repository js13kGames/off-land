function drawItemList(item) {
  for (var i = 0; i < item.list.length; i++) {
    var f = item.list[i];
    displayImage(item.img, f.x, f.y, f.h, f.w);
  }
}

function drawPlayer() {
  displayImage(player.getSkin(), player.e.x, player.e.y, player.e.w,
      player.e.h);
  player.reduceShield(0.1);
  player.hurt--;
}

function drawStats() {
  // Display Current Life
  var life = textTimes(String.fromCharCode(CONFIG.lifeCharCode), game.life);
  displayText("Life " + life, 25, CONFIG.screen.h - 40);

  // Display Current Level
  displayText("Level " + level.lvl, 25, CONFIG.screen.h - 20);
}

function drawAI() {
  for (var i = 0; i < level.ai.list.length; i++) {
    var a = level.ai.list[i];
    a.move();
    if (player.shield <= 0 && a.safe <= 0 && checkCollision(a.e, player.e)) {
      level.ai.onCollision(a);
      player.hurt = 10;
    }
    displayImage(level.ai.img, a.e.x, a.e.y, a.e.w, a.e.h);
  }
}

function drawFood() {
  drawItemList(level.food);
}

function drawShield() {
  generateItemRandomly(level.shield, CONFIG.shield);
  drawItemList(level.shield);
};

function drawTimeFreeze() {
  generateItemRandomly(level.timeFreeze, CONFIG.timeFreeze);
  drawItemList(level.timeFreeze);
};

function checkFoodCollision() {
  removeElementIfCollision(level.food);
}

function checkTimeFreezeCollision() {
  removeElementIfCollision(level.timeFreeze);
}

function checkShieldCollision() {
  removeElementIfCollision(level.shield)
}

function checkLevelStatus() {
  if ((level.food.list.length === 0)) {
    if (level.lvl == LEVEL_CONFIG.levels) {
      game = new ScreenUI(ScreenType.win);
    } else {
      game.nextLevel();
    }
  } else if (game.hasLost()) {
    game = new ScreenUI(ScreenType.lost);
  }
}

// ==================================================

function drawPointer() {
  setTextSize(game.pointer);
  displayText(game.pointer.txt, game.pointer.init_x, game.pointer.init_y,
      'blue');
}

function difficultyText() {
  game.normal.txt = ((difficulty == 1) ? String.fromCharCode(9733)
      : String.fromCharCode(9734)) + "Normal";
  game.hard.txt = ((difficulty == 2) ? String.fromCharCode(9733)
      : String.fromCharCode(9734)) + "Hard";
}

function drawMenuText(txt, pointer) {
  setTextSize(txt);
  displayText(txt.txt, txt.init_x, txt.init_y,
      (checkCollision(txt, pointer)) ? CONFIG.secondColour : CONFIG.mainColour);
}

function drawHelpText(txt) {
  setTextSize(txt);
  displayText(txt.txt, txt.init_x, txt.init_y, CONFIG.mainColour);
}