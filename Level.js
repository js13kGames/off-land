function Level(num) {
    this.lvl = num;
    this.config = LEVEL_CONFIG[this.lvl];

    function Item(w, h, q, i, f) {
        this.width = w;
        this.height = h;
        this.qty = q;
        this.img = new Image();
        this.img.src = i + ".png";
        this.onCollision = f;
        this.list = [];
    };

    // Food Config
    this.food = new Item(25, 25, this.config.f, "f1", function () {
        player.e.w += CONFIG.player.grow.w;
        player.e.h += CONFIG.player.grow.w;
    });

    // Shield Config
    this.shield = new Item(25, 25, 1, "shield", function () {
        player.addShield(CONFIG.shield.add);
    });

    // time Freeze Config
    this.timeFreeze = new Item(25, 25, 1, "clock", function () {
        for (var i = 0; i < level.ai.list.length; i++) {
            level.ai.list[i].frozenTime = CONFIG.timeFreeze.duration;
        }
    });

    // AI Config
    this.ai = new Item(20, 20, this.config.a, "a1", function (a) {
        a.safe = CONFIG.framesPerSecond / 2;
        game.life--;
    });
    this.ai.move = {
        x: this.config.s,
        y: this.config.s
    };
}