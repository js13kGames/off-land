var difficulty;
var LEVEL_CONFIG = {};
var CONFIG = {
  screen: {
    base: {
      w: 800,
      h: 600
    }
  }
};

function reloadConfig(diff) {
  difficulty = diff;
  var speedCoef = difficulty === 1 ? 1.4 : 3;
  var aiQtyCoef = difficulty === 1 ? 1 : 1.3;
  LEVEL_CONFIG = {
    levels: 7,
    1: {f: 8, s: 2 * speedCoef, a: 7 * aiQtyCoef},
    2: {f: 8, s: 2.5 * speedCoef, a: 8 * aiQtyCoef},
    3: {f: 8, s: 3 * speedCoef, a: 8 * aiQtyCoef},
    4: {f: 8, s: 4 * speedCoef, a: 9 * aiQtyCoef},
    5: {f: 8, s: 5 * speedCoef, a: 9 * aiQtyCoef},
    6: {f: 8, s: 6 * speedCoef, a: 9 * aiQtyCoef},
    7: {f: 8, s: 7 * speedCoef, a: 10 * aiQtyCoef}
  };

  CONFIG = {
    life: 5,
    restoreLife: 0.15,
    start: 1,
    shield: {
      start: 5,
      add: 15,
      max: 3,
      chance: 600
    },
    timeFreeze: {
      chance: 600,
      max: 1,
      duration: 120
    },
    screen: {
      w: canvas.offsetWidth,
      h: canvas.offsetHeight,
      base:{
        w: 800,
        h: 600
      }
    },
    framesPerSecond: 60,
    lifeCharCode: 10084,
    initPos: {
      x: 400,
      y: 300
    },
    player: {
      w: changeResolution(30, resolution.w),
      h: changeResolution(40, resolution.h),
      grow: {
        h: changeResolution(3, resolution.h),
        w: changeResolution(2, resolution.w)
      }
    },
    mainColour: 'white',
    secondColour: 'teal',
    thirdColour: '#15c7c2'
  };
}

// Shield Char Code 128737