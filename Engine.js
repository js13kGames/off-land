function drawItemList(item) {
  for (var i = 0; i < item.list.length; i++) {
    var f = item.list[i];
    f.resize();
    displayImage(item.img, f.x, f.y, f.h, f.w);
  }
}

function relocateItemList(list, move_x, move_y, is_ai) {
  for (var i = 0; i < list.length; i++) {
    var a = is_ai ? list[i].e : list[i];
    a.x = Math.floor((a.x / 100 * move_x));
    a.y = Math.floor((a.y / 100 * move_y));
    a.relocate();
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
  var life = textTimes(String.fromCharCode(CONFIG.lifeCharCode),
      Math.floor(game.life));
  displayText("Life " + life, 25, CONFIG.screen.h - 40);

  // Display Current day
  displayText("Day " + level.lvl, 25, CONFIG.screen.h - 20);
}

function drawPreGameText(){
  var textContinue = new TextUI(
      "Left click to start", CONFIG.screen.w / 4,
      CONFIG.screen.h / 2);
  drawTitle(textContinue);
}

function drawBackground() {
  if (backImg) {
    displayImage(backImg, 0, 0, canvas.width, canvas.height);
  } else {
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    drawStars();
    backImg = new Image();
    backImg.src = canvas.toDataURL();
    generateDynamicStars();
  }
  drawStars();
}

function drawPlanet(currentLevel) {
  new Planet(PLANET[currentLevel - 1]);
}

function drawStars() {
  for (var i = 0; i < starList.length; i++) {
    var s = starList[i];
    s.move(i);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, 360);
    ctx.fillStyle = "hsl(" + s.hue + ", " + s.sat + "%, 88%)";
    ctx.fill();
  }
}

function drawAI() {
  for (var i = 0; i < level.ai.list.length; i++) {
    var a = level.ai.list[i];
    a.e.resize();
    a.move();
    if (player.shield <= 0 && a.safe <= 0 && checkCollision(a.e, player.e)) {
      level.ai.onCollision(a);
      player.hurt = 10;
      playSound(SOUNDSGAME.hurt);
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
    if (level.lvl === LEVEL_CONFIG.levels) {
      game = new ScreenUI(ScreenType.win);
      stopSong();
      playSound(SOUNDSGAME.win);
    } else {
      game.nextLevel();
    }
  } else if (game.hasLost()) {
    game = new ScreenUI(ScreenType.lost);
    stopSong();
    playSound(SOUNDSGAME.lose);
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

function drawTitle(txt) {
  displayText(txt.txt, txt.init_x, txt.init_y, CONFIG.thirdColour, 50);
}

function drawMenuText(txt, pointer) {
  setTextSize(txt);
  displayText(txt.txt, txt.init_x, txt.init_y,
      (checkCollision(txt, pointer)) ? CONFIG.secondColour : CONFIG.mainColour);
}

function drawHelpText(txt, colour) {
  colour = colour?colour:CONFIG.mainColour;
  setTextSize(txt);
  displayText(txt.txt, txt.init_x, txt.init_y, colour);
}