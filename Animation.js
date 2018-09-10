var items = [];
var satellite = {};
var earth = {};
function Animation() {
  this.seconds = 0;
  this.objects = {};

  player = new Player(CONFIG.initPos.x, CONFIG.initPos.y, CONFIG.player.w,
      CONFIG.player.h);
  satellite = new Image();
  satellite.src = imgBase64(IMGS.satellite);
  earth = new Image();
  earth.src = imgBase64(IMGS.earth);

  this.objects.f = [];

  var t = [2, 3, 4, 5, 6];
  var flow_pos_y = [20, 15, 10, 5, 10, 15, 20];
  var pickupsFlows = [];

  for (var k = 0; k < LEVEL_CONFIG.levels; k++) {
    var posx = (100/9*(k+1));
    pickupsFlows.push(
        [
          [posx, flow_pos_y[k], t[0]],
          [posx, flow_pos_y[k]-2, t[1]],
          [posx, flow_pos_y[k]+1, t[2]],
          [posx, flow_pos_y[k]-2, t[3]],
          [50, 50, t[4]],
        ]
    );

    this.objects.f.push(new AnimationEngine(pickupsFlows[k],
        {
          init_x: 49,
          init_y: 76,
          init_time: 0,
          loop: false
        }
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
        [45, 78, 1],
        [47, 75, 3],
        [46, 77, 5],
        [48, 76, 6],
      ],
      {
        init_x: 49,
        init_y: 76,
        init_time: 0,
        loop: true
      }
  );
  this.objects.player.draw = function () {
    displayImage(player.skins.normal, this.pos.x,
        this.pos.y,
        changeResolution(player.e.w, resolution.w),
        changeResolution(player.e.h, resolution.h));
  };


  this.objects.satellite = new AnimationEngine(
      [
        [51, 49, 8],
        [49, 50, 10],
        [50, 48, 12],
        [49, 50, 14],
      ],
      {
        init_x: 46,
        init_y: 45,
        init_time: 6,
        loop: true
      }
  );
  this.objects.satellite.draw = function () {
    displayImage(satellite, this.pos.x,
        this.pos.y,
        changeResolution(95, resolution.w),
        changeResolution(95, resolution.h));
  };


  this.objects.earth = new AnimationEngine(
      [
        [80, 20, 8],
      ],
      {
        init_x: 80,
        init_y: 20,
        init_time: 6,
        loop: true
      }
  );
  this.objects.earth.draw = function () {
    displayImage(earth, this.pos.x,
        this.pos.y,
        changeResolution(30, resolution.w),
        changeResolution(30, resolution.h));
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
    AnimationEngine.move(this.objects.satellite, this.seconds);
    AnimationEngine.move(this.objects.earth, this.seconds);
    drawPointer();
  };

  this.calculations = function () {
    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
  };

  this.calculations();

}