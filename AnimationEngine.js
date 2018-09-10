var AnimationEngine = function (flow, specs) {
  this.flow = flow;
  this.pos = {
    x: (CONFIG.screen.w / 100 * specs.init_x),
    y: (CONFIG.screen.h / 100 * specs.init_y)
  };
  this.loop = specs.loop;
  this.start = specs.init_time;
  this.currentFlow = 0;
  this.duration = flow[flow.length - 1][2];
};
AnimationEngine.move = function (obj, sec) {
  if (obj.start <= Math.floor(sec)) {
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
      obj.draw();
    } else if (obj.loop) {
      for (var j = 0; j < obj.flow.length; j++) {
        obj.flow[j][2] = obj.flow[j][2] + obj.duration;
        obj.flow[j][3] = 0;
        obj.flow[j][4] = 0;
      }
      obj.draw();
    }
  }
};
AnimationEngine.prototype.draw = function () {

};