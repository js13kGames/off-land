var canvas;
var canvasContext;
var level;
var player;
var game;

window.onload = function () {
    game = new Game();
    game.start();

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function () {
        drawGame();
    }, 1000 / CONFIG.framesPerSecond);

    canvas.addEventListener('mousemove',
        function (e) {
            var pos = calculateMousePos(e);
            player.e.move(pos.x, pos.y);
        });
};

function drawGame() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    displayImage(player.getSkin(), player.e.x, player.e.y, player.e.w, player.e.h);

    player.reduceShield(0.1);
    checkFoodCollision();
    checkShieldCollision();
    checkTimeFreezeCollision();

    drawFood();
    drawShield();
    drawTimeFreeze();
    drawAI();

    game.showStats();

    if (levelDone())
        showLevelDone();

    if (game.hasLost())
        showLost();
}

function drawAI() {
    for (var i = 0; i < level.ai.list.length; i++) {
        var a = level.ai.list[i];
        a.move();
        if (player.shield <= 0 && a.safe <= 0 && checkCollision(a.e, player.e)) {
            a.safe = CONFIG.framesPerSecond / 2;
            game.life--;
        }
        displayImage(level.ai.img, a.e.x, a.e.y, a.e.w, a.e.h);
    }
}

function drawFood() {
    for (var i = 0; i < level.food.list.length; i++) {
        var f = level.food.list[i];
        displayImage(level.food.img, f.x, f.y, f.w, f.h);
    }
}

function drawShield() {
    if (level.shield.list.length < CONFIG.shield.max && random(CONFIG.shield.chance) < 2)
         generate(level.shield, CONFIG.screen, Element);

    for (var i = 0; i < level.shield.list.length; i++) {
        var s = level.shield.list[i];
        displayImage(level.shield.img, s.x, s.y, s.w, s.h);
    }
};

function drawTimeFreeze() {
    if (level.timeFreeze.list.length < CONFIG.timeFreeze.max && random(CONFIG.timeFreeze.chance) < 2)
        generate(level.timeFreeze, CONFIG.screen, Element);

    for (var i = 0; i < level.timeFreeze.list.length; i++) {
        var s = level.timeFreeze.list[i];
        displayImage(level.timeFreeze.img, s.x, s.y, s.w, s.h);
    }
};

function levelDone() {
    if (level.food.list.length === 0)
        return true
}

function showLevelDone() {
    game.nextLevel();
}

function showLost() {
    game.restart();
}

function checkFoodCollision() {
    removeElementIfCollision(level.food);
}

function checkTimeFreezeCollision() {
    removeElementIfCollision(level.timeFreeze);
}

function checkShieldCollision() {
    removeElementIfCollision(level.shield)
}

function removeElementIfCollision(item) {
    var i = item.list.length;
    while (i--) {
        if (checkCollision(item.list[i], player.e)) {
            item.list.splice(i, 1);
            item.onCollision();
        }
    }
}
