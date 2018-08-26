function Menu() {
    this.pointer = {x: 0, y: 0, char: '10132'};
    //9732
    //10169

    this.mousemove = function (pos) {
        this.pointer.x = pos.x;
        this.pointer.y = pos.y;
    }

    this.click = function (pos) {
        game = new Game();
        game.start();
    };

    this.draw = function () {
        drawBackground('red');
        colorRect(CONFIG.screen.w / 3, CONFIG.screen.h / 3 - 20, 200, 20, 'green');
        displayText("Start Game", CONFIG.screen.w / 3, CONFIG.screen.h / 3);


        drawPointer();
    }
}