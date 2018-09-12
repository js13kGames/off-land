var AnimationEngine = function (flow, specs) {
  this.flow = flow;
  this.pos = {
    x: (CONFIG.screen.w / 100 * specs.init_x),
    y: (CONFIG.screen.h / 100 * specs.init_y)
  };
  this.loop = specs.loop;
  this.end = specs.end;
  this.start = specs.init_time;
  this.currentFlow = 0;
  this.duration = (flow.length > 0) ? flow[flow.length - 1][2] : 0;
};
AnimationEngine.move = function (obj, sec) {
  if (obj.flow[obj.flow.length - 1][2] > sec) {
    var index = 0, theMove = obj.flow[index], flag = true;
    while (flag && sec > theMove[2]) {
      index++;
      if (obj.flow[index]) {
        theMove = obj.flow[index];
      } else {
        !flag;
      }
    }
    if (flag) {
      var remainingTime = (theMove[2] - Math.floor(sec))
          * CONFIG.framesPerSecond;
      if (theMove[3] === undefined || theMove[3] === 0 || (obj.currentFlow
          < (index - 1))) {
      theMove[3] = ((CONFIG.screen.w / 100 * theMove[0]) - obj.pos.x)
          / remainingTime;
      theMove[4] = ((CONFIG.screen.h / 100 * theMove[1]) - obj.pos.y)
          / remainingTime;
      obj.currentFlow = (index - 1);
      }
      obj.pos.x += theMove[3];
      obj.pos.y += theMove[4];
    }
  } else if (obj.loop) {
    for (var j = 0; j < obj.flow.length; j++) {
      obj.flow[j][2] = obj.flow[j][2] + obj.duration;
      obj.flow[j][3] = 0;
      obj.flow[j][4] = 0;
    }
  }
};
AnimationEngine.draw = function (obj, sec) {
  if (obj.start <= Math.floor(sec) && (obj.end === undefined || obj.end >= sec)) {
    if (obj.flow.length > 0) {
      AnimationEngine.move(obj, sec);
    }
    obj.draw();
  }
};

AnimationEngine.execute = function(f, when, sec){
  if (!f.done && when <= Math.floor(sec)){
    f.done = true;
    f.action();
  }
};

AnimationEngine.calculations = function (obj, from, to) {
  if(from !== undefined && to !== undefined) {
    obj.pos.x = to.w * obj.pos.x / from.w;
    obj.pos.y = to.h * obj.pos.y / from.h;
    obj.draw();
  }
};