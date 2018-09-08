var canvas, ctx, level, player, game;

window.onload = function () {
  game = new Menu();

  canvas = document.getElementById('g');
  ctx = canvas.getContext('2d');

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

  generateStars();

  function drawCanvasGame() {
    game.draw();
    requestAnimationFrame(drawCanvasGame);
  }

  drawCanvasGame();
};