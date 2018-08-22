function Level(num){
    this.lvl = num;

    // Life Config
    this.config = {
        width:  800,
            height:  600,
        life: 5,
        shield: 0,
        framesPerSecond: 60
    };

    // Food Config
    this.food = {
        width : 25,
        height : 25,
        qty:  10 + (this.lvl * 2),
        img: {},
        list: []
    };
    this.food.img = new Image();
    this.food.img.src = 'small-burguer.png';

    // AI Config
    this.ai = {
        move: {
            x: this.lvl,
            y: this.lvl
        },
        width : 20,
        height : 20,
        qty: 10 + this.lvl,
        img: {},
        list: []
    }
    this.ai.img = new Image();
    this.ai.img.src = 'small-tiny-skull.png';

}