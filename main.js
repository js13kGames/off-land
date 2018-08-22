var canvas;
var canvasContext;
let level;
let player ;
let game;

window.onload = function() {
    game = new Game();
    game.start();

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function() {
        drawEverything();
    }, 1000/level.config.framesPerSecond);

    canvas.addEventListener('mousemove',
        function(e) {
            let pos = calculateMousePos(e);
            player.move(pos.x, pos.y);
        });
};

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0,0,canvas.width,canvas.height,'black');

    // this is player
    colorRect(player.x,player.y,player.w,player.h,'white');
    level.config.shield--;
    checkFoodCollision();
    //this is food
    drawFood();

    drawAI();

    game.showStats();

    if(levelDone())
        showLevelDone();

}

function drawAI(){
    for(var i = 0; i < level.ai.list.length; i++){
        var a = level.ai.list[i];
        a.move();
        if(level.config.shield <= 0 && a.safe <= 0 && checkCollision(a.e, player)){
            a.safe = level.config.framesPerSecond;
            level.config.life--;
        }
        displayImage(level.ai.img, a.e.x, a.e.y, a.e.w, a.e.h);
    }
}

function drawFood(){
    for(var i = 0; i < level.food.list.length; i++){
        var f = level.food.list[i];
        displayImage(level.food.img, f.x, f.y, f.w, f.h);
    }
}

function levelDone(){
    if (level.config.life <= 0 || level.food.list.length === 0)
        return true
}

function showLevelDone(){
    game.nextLevel();
}

function checkFoodCollision(){
    var i  = level.food.list.length;
    while (i--) {
        if (checkCollision(level.food.list[i], player)) {
            level.food.list.splice(i, 1);
        }
    }
}