var items = [];
var satellite = {};
var earth = {};

function Animation() {
  this.seconds = 0;
  this.end = 20;
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
    var posx = (100 / 9 * (k + 1));
    pickupsFlows.push(
        [
          [posx, flow_pos_y[k], t[0]],
          [posx, flow_pos_y[k] - 2, t[1]],
          [posx, flow_pos_y[k] + 1, t[2]],
          [posx, flow_pos_y[k] - 2, t[3]],
          [50, 50, t[4]],
        ]
    );

    this.objects.f.push(new AnimationEngine(pickupsFlows[k],
        {
          init_x: 49,
          init_y: 76,
          init_time: 0,
          loop: false,
          end: 6
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
        [],
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

  this.objects.signal = [];
  for (var k = 0; k < 5; k++) {
    this.objects.signal.push(new AnimationEngine(
        [],
        {
          init_x: 60,
          init_y: 50,
          init_time: 9 + k
        }
    ));
    this.objects.signal[k].index = k;
    this.objects.signal[k].draw = function () {
      displayArc(this.pos.x, this.pos.y, 40 * (this.index + 1), 1.5, 0, "green",
          7 + this.index);
    }
  }

  this.objects.chat = [];
  var chat_size = 20;
  var chat = [
      ["|Man: Hello?", 1],
      ["|Bowman: Hi there!", 2],
      ["|Man: Who is talking?", 1],
      ["|Bowman: Just Mr. Bowman", 2],
  ];
  for (var k = 0; k < chat.length; k++) {
    this.objects.chat.push(new AnimationEngine(
        [],
        {
          init_x: 10,
          init_y: 20 + (5 * k),
          init_time: 14 + k
        }
    ));
    this.objects.chat[k].color = chat[k][1] === 1 ? CONFIG.mainColour
        : CONFIG.secondColour;
    this.objects.chat[k].text = chat[k][0];
    this.objects.chat[k].size = chat_size;
    this.objects.chat[k].draw = function () {
      displayText(this.text, this.pos.x, this.pos.y, this.color, this.size);

    }
  }

  this.objects.sounds = [];
  this.objects.sounds.push({
    done: false,
    action: function(){
      playSound(SOUNDSGAME.timeFreeze);
    }
  });
  this.objects.sounds.push({
    done: false,
    action: function(){
      playSound(SOUNDSGAME.shield);
    }
  });
  this.draw = function () {
    this.seconds += 0.017;

    AnimationEngine.execute(this.objects.sounds[0],6, this.seconds);
    AnimationEngine.execute(this.objects.sounds[1],14, this.seconds);

    for (var k = 0; k < LEVEL_CONFIG.levels; k++) {
      AnimationEngine.draw(this.objects.f[k], this.seconds);
    }
    AnimationEngine.draw(this.objects.player, this.seconds);
    AnimationEngine.draw(this.objects.satellite, this.seconds);
    AnimationEngine.draw(this.objects.earth, this.seconds);

    for (var k = 0; k < this.objects.signal.length; k++) {
      AnimationEngine.draw(this.objects.signal[k], this.seconds);
    }
    for (var k = 0; k < this.objects.chat.length; k++) {
      AnimationEngine.draw(this.objects.chat[k], this.seconds);
    }
  };

  this.calculations = function () {
    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);

    // for (var k = 0; k < LEVEL_CONFIG.levels; k++) {
    //   AnimationEngine.calculations(this.objects.f[k]);
    // }
    // AnimationEngine.calculations(this.objects.player);
    // AnimationEngine.calculations(this.objects.satellite);
    // AnimationEngine.calculations(this.objects.earth);
    //
    // for (var k = 0; k < this.objects.signal.length; k++) {
    //   AnimationEngine.calculations(this.objects.signal[k]);
    // }
  };

  this.calculations();

}