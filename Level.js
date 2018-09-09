function Item(w, h, q, i, f) {
  this.width = w;
  this.height = h;
  this.qty = q;
  this.img = new Image();
  this.img.src = i;
  this.onCollision = f;
  this.list = [];

}

function Level(num) {
  this.lvl = num;
  this.config = LEVEL_CONFIG[this.lvl];

  // Food Config
  this.food = new Item(25, 25, this.config.f,
      imgBase64(IMGS.food[this.lvl - 1]), function () {
        player.e.w += CONFIG.player.grow.w;
        player.e.h += CONFIG.player.grow.h;
        game.life += game.life < CONFIG.life ? CONFIG.restoreLife : 0;
      });

  // Shield Config
  this.shield = new Item(25, 28, 1,
      imgBase64(IMGS.shield), function () {
        player.addShield(CONFIG.shield.add);
      });

  // time Freeze Config
  this.timeFreeze = new Item(25, 30, 1,
      imgBase64(IMGS.clock), function () {
        for (var i = 0; i < level.ai.list.length; i++) {
          level.ai.list[i].frozenTime = CONFIG.timeFreeze.duration;
        }
      });

  // AI Config
  this.ai = new Item(25, 25, this.config.a, imgBase64(IMGS.a[this.lvl - 1]),
      function (a) {
        a.safe = CONFIG.framesPerSecond / 2;
        game.life--;
      });
  this.ai.move = {
    x: this.config.s,
    y: this.config.s
  };

}