function drawBackground() {
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  drawStars();
  drawPlanet();
}

function drawPlanet() {
  var radius = 250;
  drawCustomImage();
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
  ctx.font = "20px Trebuchet MS";
  ctx.shadowColor = "grey";
  // ctx.shadowOffsetX = 1;
  // ctx.shadowOffsetY = 1;
  // ctx.shadowBlur = 10;
  ctx.fillStyle = color ? color : CONFIG.mainColour;
  ctx.fillText(txt, x, y);
  ctx.fillStyle = CONFIG.mainColour;
}

function drawCustomImage() {
  ctx.beginPath();
  ctx.arc(700, 500, 250, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#003300';
  ctx.stroke();
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
  // ctx.shadowColor = 'white';
  // ctx.shadowOffsetX = 1;
  // ctx.shadowOffsetY = 2;
  // ctx.shadowBlur = 5;
  ctx.drawImage(img, x, y, w, h);
}

function textTimes(txt, times) {
  return (times > 0) ? new Array(times + 1).join(txt) : "";
}

function openFullscreen(activate) {
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

function resizeScreen() {
  var isInFullScreen = (document.fullscreenElement && document.fullscreenElement
      !== null) ||
      (document.webkitFullscreenElement && document.webkitFullscreenElement
          !== null) ||
      (document.mozFullScreenElement && document.mozFullScreenElement !== null)
      ||
      (document.msFullscreenElement && document.msFullscreenElement !== null);

  var from = {w: canvas.width, h: canvas.height};
  if (isInFullScreen) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    resolution = 1.5;
  } else {
    canvas.width = 800;
    canvas.height = 600;
    resolution = 1;
  }

  reloadConfig(difficulty);
  generateStars();
  game.calculations();
  relocateEveryone(from, {w: 800, h: 600});
}

function relocateEveryone(from, to) {
  if (from.w !== to.w && from.h !== to.h) {
    var x_p = 100 / from.w * to.w;
    var y_p = 100 / from.h * to.h;
    relocateItemList(level.ai.list, x_p, y_p, true);
    relocateItemList(level.shield.list, x_p, y_p);
    relocateItemList(level.timeFreeze.list, x_p, y_p);
    relocateItemList(level.food.list, x_p, y_p);
    relocateItemList([player], x_p, y_p, true);
  }
}