function AIElement(x, y, h, w) {
    this.e = new Element(x, y, h, w);
    this.safe = 0;
    var getRandomSign = function () {
        return Math.random() < 0.5 ? -1 : 1;
    };
    this.direction = {
        x: level.ai.move.x * getRandomSign(),
        y: level.ai.move.y * getRandomSign()
    };
    this.move = function () {
        this.changeDirection();
        this.e.move(this.e.x + this.direction.x,  this.e.y + this.direction.y);
        this.safe--;
    };

    this.changeDirection = function () {
        if (this.e.xw >= level.config.width || this.e.xw <= 0)
            this.direction.x = -this.direction.x;

        if (this.e.yh >= level.config.height || this.e.yh <= 0)
            this.direction.y = -this.direction.y;
    }
}