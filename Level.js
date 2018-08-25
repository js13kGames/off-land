function Level(num){
    this.lvl = num;
    this.config =  LEVEL_CONFIG[this.lvl];

    // Food Config
    this.food = {
        width : 25,
        height : 25,
        qty: this.config.f,
        img: {},
        list: [],
        onCollision: function () {
            player.e.w +=CONFIG.player.grow.w;
            player.e.h += CONFIG.player.grow.w;
        }
    };
    this.food.img = new Image();
    this.food.img.src = 'f1' +'.png';

    // shield Config
    this.shield = {
        width : 25,
        height : 25,
        qty: 1,
        img: {},
        list: [],
        onCollision: function () {
            player.addShield(CONFIG.shield.add);
        }
    };
    this.shield.img = new Image();
    this.shield.img.src = 'shield.png';

    // AI Config
    this.ai = {
        move: {
            x: this.config.s,
            y: this.config.s
        },
        width : 20,
        height : 20,
        qty: this.config.a,
        img: {},
        list: []
    };
    this.ai.img = new Image();
    this.ai.img.src = 'a1'+'.png';
}