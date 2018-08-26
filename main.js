var canvas;
var canvasContext;
var level;
var player;
var game;

window.onload = function () {
    game = new Menu();

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function () {
        game.draw();
    }, 1000 / CONFIG.framesPerSecond);

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
};


