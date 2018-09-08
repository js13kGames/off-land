function drawBackground() {
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  drawStars();
  drawPlanet();
}

function drawPlanet() {
  new Planet(PLANET[0]);
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