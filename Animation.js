var items = [];
var satellite = {};
var earth = {};

function Animation() {
  this.seconds = 0;
  this.end = 30;
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
  for (var k = 0; k < 6; k++) {
    this.objects.signal.push(new AnimationEngine(
        [],
        {
          init_x: 60,
          init_y: 52,
          init_time: 9 + k
        }
    ));
    this.objects.signal[k].index = k;
    this.objects.signal[k].draw = function () {
      displayArc(this.pos.x, this.pos.y, 38 * (this.index + 1), 1.5, 0, "green",
          7 + this.index);
    }
  }

  this.objects.chat = [];
  var chat_size = 18;
  var chat = [
      ["Man: Hello?", 1],
      ["Bowman: Hi there, it's Mr. Bowman here.", 2],
      ["I finally managed to reach you", 2],
      ["Man: Oh Mr. Bowman, we've been looking", 1],
      ["for you for a whole week, you've been offline!", 1],
      ["Bowman: A week? It felts like 2 minutes only", 2],
      ["Man: Ok Mr. B, send me your current position", 1],
      ["Bowman: It's X:" + Math.floor(CONFIG.screen.w / 100 * 49) + " Y:"
      + Math.floor(CONFIG.screen.h / 100 * 76), 2],
      ["Man: Alright, we'll pick you up...", 1]
  ];
  for (var k = 0; k < chat.length; k++) {
    this.objects.chat.push(new AnimationEngine(
        [],
        {
          init_x: 5,
          init_y: 20 + (6 * k),
          init_time: 14 + (k * 2)
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
      playSound(SOUNDSGAME.shield);
    }
  });
  this.objects.sounds.push({
    done: false,
    action: function(){
      playSound(SOUNDSGAME.signal, true);
    }
  });
  this.objects.sounds.push({
    done: false,
    action: function(){
      stopSound();
      playSound(SOUNDSGAME.shield);
    }
  });
  this.draw = function () {
    this.seconds += 0.017;

    AnimationEngine.execute(this.objects.sounds[0],6, this.seconds);
    AnimationEngine.execute(this.objects.sounds[1],9, this.seconds);
    AnimationEngine.execute(this.objects.sounds[2],14, this.seconds);

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

  this.calculations = function (from, to) {
    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);

    for (var k = 0; k < LEVEL_CONFIG.levels; k++) {
      AnimationEngine.calculations(this.objects.f[k], from, to);
    }
    AnimationEngine.calculations(this.objects.player, from, to);
    AnimationEngine.calculations(this.objects.satellite, from, to);
    AnimationEngine.calculations(this.objects.earth, from, to);

    for (var k = 0; k < this.objects.signal.length; k++) {
      AnimationEngine.calculations(this.objects.signal[k], from, to);
    }
    // for (var k = 0; k < this.objects.chat.length; k++) {
    //   AnimationEngine.calculations(this.objects.chat[k], this.seconds, from, to);
    // }
  };

  this.calculations();

}