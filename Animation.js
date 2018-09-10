var items = [];

function Animation() {
  this.seconds = 0;
  this.objects = {};

  player = new Player(CONFIG.initPos.x, CONFIG.initPos.y, CONFIG.player.w,
      CONFIG.player.h);

  this.objects.f = [];

  var sw = CONFIG.screen.w, sh = CONFIG.screen.h, sw2 = sw / 2,
      itemVelocity = 1;
  var pickupsFlows = [
    [
      [25, 20, itemVelocity],
      [5, 35, itemVelocity * 2],
      [25, 55, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
    [
      [75, 20, itemVelocity],
      [95, 35, itemVelocity * 2],
      [75, 55, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
    [
      [85, 25, itemVelocity],
      [100, 40, itemVelocity * 2],
      [85, 60, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
    [
      [15, 10, itemVelocity],
      [0, 25, itemVelocity * 2],
      [15, 45, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
    [
      [85, 25, itemVelocity],
      [100, 40, itemVelocity * 2],
      [85, 60, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
    [
      [85, 25, itemVelocity],
      [100, 40, itemVelocity * 2],
      [85, 60, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
    [
      [85, 25, itemVelocity],
      [100, 40, itemVelocity * 2],
      [85, 60, itemVelocity * 3],
      [50, 50, itemVelocity * 4],
    ],
  ];

  for (var k = 0; k < pickupsFlows.length; k++) {
    this.objects.f.push(new AnimationEngine(pickupsFlows[k],
        49, 76, false
    ));
    this.objects.f[k].index = k;
    items.push((new Level(k + 1)).food);
    this.objects.f[k].draw = function () {
      displayImage(items[this.index].img, this.pos.x,
          this.pos.y, changeResolution(items[this.index].height, resolution.h),
          changeResolution(items[this.index].width, resolution.w));
    };
  }

  this.objects.player = new AnimationEngine(
      [
        [50, 78, 1],
        [52, 75, 3],
        [49, 77, 5],
        [51, 76, 7],
      ],
      49, 76,
      true
  );
  this.objects.player.draw = function () {
    displayImage(player.skins.normal, this.pos.x,
        this.pos.y,
        changeResolution(player.e.w, resolution.w),
        changeResolution(player.e.h, resolution.h));
  };

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  };

  this.click = function (pos) {
    game = new Menu();
  };
  this.draw = function () {
    this.seconds += 0.017;
    drawBackground();

    for (var k = 0; k < 7; k++) {
      AnimationEngine.move(this.objects.f[k], this.seconds);
    }
    AnimationEngine.move(this.objects.player, this.seconds);
    drawPointer();
  };

  this.calculations = function () {
    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
  };

  this.calculations();

}