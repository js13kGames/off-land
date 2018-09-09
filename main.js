var div, canvas, ctx, level, player, game,
    resolution = {w: 100, h: 100, planet: 100}, allowFullScr = true;

window.onload = function () {
  canvas = document.getElementsByTagName("canvas")[0];
  div = document.getElementsByTagName('div')[0];
  ctx = canvas.getContext('2d');

  setStyles();
  checkAllowFullScr();
  setCanvasSize();
  reloadConfig(1);
  game = new Menu();

  canvas.addEventListener('mousemove',
      function (e) {
        var pos = calculateMousePos(e);
        game.mousemove(pos);
      });

  canvas.addEventListener('click',
      function (e) {
        var pos = calculateMousePos(e);
        game.click(pos);
      });

  window.onresize = function () {
    resizeScreen();
  };

  generateStars();

  function drawCanvasGame() {
    game.draw();
    requestAnimationFrame(drawCanvasGame);
  }

  drawCanvasGame();
};

function determineResolution() {
  resolution.w = 100 / CONFIG.screen.base.w * canvas.width;
  resolution.h = 100 / CONFIG.screen.base.h * canvas.height;
}

function checkAllowFullScr() {
  var
      aKeys = ["MSIE", "Trident", "Edge"],
      sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;
  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--) {
    ;
  }
  allowFullScr = nIdx == -1;
}

function setStyles(){
  canvas.style.cssText = "cursor:none;position:absolute;left:0;right:0;margin:auto;border:#474747 dotted;";
  document.getElementsByTagName("body")[0].style.cssText = "overflow:hidden;background:#000;";
  document.getElementsByTagName("html")[0].style.cssText = "overflow:hidden;background:#000;";
}