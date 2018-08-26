function Menu() {

    function Text(txt, x, y) {
        this.txt = txt;
        this.init_x = x;
        this.init_y = y;
        this.x = 0;
        this.y = 0;
        this.xw = 0;
        this.yh = 0;
    }

    this.pointer = new Text(String.fromCharCode(9732), 0, 0);
    this.start = new Text("Start Game", CONFIG.screen.w / 3, CONFIG.screen.h / 3);
    this.normal = new Text("Normal", CONFIG.screen.w / 3, (CONFIG.screen.h / 3) + 50);
    this.hard = new Text("Hard", CONFIG.screen.w / 3, (CONFIG.screen.h / 3) + 100);

    //10132
    //9732
    //10169

    this.mousemove = function (pos) {
        this.pointer.init_x = pos.x;
        this.pointer.init_y = pos.y;
    }

    this.click = function (pos) {
        if (checkCollision(this.start, this.pointer)) {
            game = new Game();
            game.start();
        } else if (checkCollision(this.normal, this.pointer)) {
            reloadConfig(1);
        } else if (checkCollision(this.hard, this.pointer)) {
            reloadConfig(2);
        }
    };

    this.draw = function () {
        drawBackground('pink');
        difficultyText();
        drawMenuText(this.start, this.pointer);
        drawMenuText(this.normal, this.pointer);
        drawMenuText(this.hard, this.pointer);
        drawPointer();
    }
}