function calculateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  var maxXCoef = pointer ? pointer.e.w : 0;
  var maxYCoef = pointer ? pointer.e.h : 0;

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

function displayArc(x, y, r, as, ae, colour, size){
  ctx.shadowColor = '#05632c';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = -5;
  ctx.strokeStyle = colour;
  ctx.lineWidth=size;
  ctx.lineCap="round";
  ctx.beginPath();
  ctx.arc(x, y, changeResolution(r, resolution.w), as * Math.PI, ae * Math.PI, false);
  ctx.stroke();
  ctx.shadowColor = '#999';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
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
  } else if (div.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    div.webkitRequestFullscreen();
  } else if (div.requestFullscreen) {
    div.requestFullscreen();
  }
}

var from;

function resizeScreen() {
  from = {w: canvas.width, h: canvas.height};
  setCanvasSize();
  reloadConfig(difficulty);
  generateStaticStars();
  game.calculations(from, {w: canvas.width, h: canvas.height});
}

function setCanvasSize() {
  var w = window.innerWidth,
      h = window.innerHeight;
  canvas.width = (w * .75) <= h ? w : (h * 1.25);
  canvas.height = canvas.width * .75;
  determineResolution();
}