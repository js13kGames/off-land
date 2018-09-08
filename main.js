var canvas, ctx, level, player, game, resolution = 1;

window.onload = function () {
  canvas = document.getElementById('g');
  ctx = canvas.getContext('2d');

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

  window.onresize = function() {
    resizeScreen();
  };

  generateStars();

  function drawCanvasGame() {
    game.draw();
    requestAnimationFrame(drawCanvasGame);
  }

  drawCanvasGame();
};