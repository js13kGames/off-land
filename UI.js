function drawBackground() {
  colorRect(0, 0, canvas.width, canvas.height, 'black');
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

function calculateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

function colorRect(x, y, w, h, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(x, y, w, h);
}

function displayText(txt, x, y, color) {
  ctx.font = changeResolution(20, resolution.w) + "px Trebuchet MS";
  ctx.shadowColor = "grey";
  ctx.fillStyle = color ? color : CONFIG.mainColour;
  ctx.fillText(txt, x, y);
  ctx.fillStyle = CONFIG.mainColour;
}

function setTextSize(arg) {
  arg.w = ctx.measureText(arg.txt).width;
  arg.h = ctx.measureText('M').width;
  arg.x = arg.init_x;
  arg.y = arg.init_y - arg.h;
  arg.xw = arg.x + arg.w;
  arg.yh = arg.y + arg.h;
}

function displayImage(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

function textTimes(txt, times) {
  return (times > 0) ? new Array(times + 1).join(txt) : "";
}

function openFullscreen() {
  if (div.mozRequestFullScreen) { /* Firefox */
    div.mozRequestFullScreen();
  } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    canvas.webkitRequestFullscreen();
  } else if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  }
}

var from, x_p = 0, y_p = 0;

function resizeScreen() {
  from = {w: canvas.width, h: canvas.height};
  setCanvasSize();
  reloadConfig(difficulty);
  generateStars();
  game.calculations();
  relocateEveryone(from, {w: canvas.width, h: canvas.height});
}

function relocateEveryone(from, to) {
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

function setCanvasSize() {
  var w = window.innerWidth,
      h = window.innerHeight;
  canvas.width = (w * .75) <= h ? w : (h * 1.25);
  canvas.height = canvas.width * .75;
  determineResolution();
}