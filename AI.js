function AI(x, y, h, w) {
    this.e = new Element(x, y, h, w);
    this.safe = 0;
    this.frozenTime = 0;
    var getRandomSign = function () {
        return Math.random() < 0.5 ? -1 : 1;
    };
    this.direction = {
        x: level.ai.move.x * getRandomSign(),
        y: level.ai.move.y * getRandomSign()
    };
    this.move = function () {
        if(this.frozenTime <= 0) {
            this.changeDirection();
            this.e.move(this.e.x + this.direction.x,  this.e.y + this.direction.y);
            this.safe--;
        } else {
            this.frozenTime--;
        }
    };

    this.changeDirection = function () {
        if (this.e.xw >= CONFIG.screen.w || this.e.x <= 0)
            this.direction.x = -this.direction.x;

        if (this.e.yh >= CONFIG.screen.h || this.e.y <= 0)
            this.direction.y = -this.direction.y;
    }
}