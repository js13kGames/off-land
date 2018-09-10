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
  var maxXCoef = player ? player.e.w : 0;
  var maxYCoef = player ? player.e.h : 0;

  return {
    x: getPositionOnCanvas(mouseX, maxXCoef, canvas.width),
    y: getPositionOnCanvas(mouseY, maxYCoef, canvas.height)
  };
}

function getPositionOnCanvas(mouseAxis, maxCoef, canvasAxis){
  if(mouseAxis < 0)
    return 0;

  var maxAxis = canvasAxis - maxCoef;
  if(mouseAxis > maxAxis)
    return maxAxis;

  return mouseAxis
}

function colorRect(x, y, w, h, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(x, y, w, h);
}

function displayText(txt, x, y, color, size) {
  size = size ? size : 20;
  ctx.font = changeResolution(size, resolution.w) + "px Trebuchet MS";
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

var from;

function resizeScreen() {
  from = {w: canvas.width, h: canvas.height};
  setCanvasSize();
  reloadConfig(difficulty);
  game.calculations(from, {w: canvas.width, h: canvas.height});
}

function setCanvasSize() {
  var w = window.innerWidth,
      h = window.innerHeight;
  canvas.width = (w * .75) <= h ? w : (h * 1.25);
  canvas.height = canvas.width * .75;
  determineResolution();
}