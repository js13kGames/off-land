var AnimationEngine = function (flow, x, y, loop) {
  this.flow = flow;
  this.pos = {x: (CONFIG.screen.w / 100 * x), y: (CONFIG.screen.h / 100 * y)};
  this.loop = loop;
  this.duration = flow[flow.length - 1][2];
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
      if (theMove[3] === undefined || theMove[3] === 0) {
        theMove[3] = ((CONFIG.screen.w / 100 * theMove[0]) - obj.pos.x) / remainingTime;
      }
      if (theMove[4] === undefined || theMove[4] === 0) {
        theMove[4] = ((CONFIG.screen.h / 100 * theMove[1]) - obj.pos.y) / remainingTime;
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
  obj.draw();
};
AnimationEngine.prototype.draw = function () {

};