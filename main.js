var canvas;
var ctx;
var level;
var player;
var game;

window.onload = function () {
    game = new Menu();

    canvas = document.getElementById('gameCanvas');
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

    setInterval(function () {
        game.draw();
    }, 1000 / CONFIG.framesPerSecond);
};

