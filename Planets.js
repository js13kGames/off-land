function Planet(p) {
  this.grd = {};
  this.p = p;

  this.setGrd = function () {
    for (var i = 0; i < p.grd.length; i++) {
      this.grd.addColorStop(p.grd[i][0], p.grd[i][1]);
    }
  };

  this.draw = function () {
    var radius = changeResolution(250, resolution.w);
    var x = CONFIG.screen.w - changeResolution(100, resolution.w);
    var y = CONFIG.screen.h - changeResolution(100, resolution.h);

    resolution.planet = 100 / 250 * radius;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    var _specs = calculateSpecsResolution(p.specs);
    this.grd = ctx.createRadialGradient(_specs.xs, _specs.ys, _specs.rs,
        _specs.xe, _specs.ye, _specs.re);
    this.setGrd();
    ctx.fillStyle = this.grd;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#33160a';
    ctx.stroke();
  };
  this.draw();
}

function calculateSpecsResolution(s){
  return {
    xs: changeResolution(CONFIG.screen.base.w - s.xs, resolution.planet),
    ys: changeResolution(CONFIG.screen.base.h - s.ys, resolution.planet),
    rs: changeResolution(s.rs, resolution.planet),
    xe: changeResolution(CONFIG.screen.base.w - s.xe, resolution.planet),
    ye: changeResolution(CONFIG.screen.base.h - s.ye, resolution.planet),
    re: changeResolution(s.re, resolution.planet)
  };
}

var SPECS = {
  a: {
    xs: 50,
    ys: 440,
    rs: 100,
    xe: 0,
    ye: 200,
    re: 350
  },
  b: {
    xs: 350,
    ys: 300,
    rs: 50,
    xe: 250,
    ye: 250,
    re: 250
  }
};

var PLANET = [
  {
    specs: SPECS.b,
    grd: [
      [0.2, '#004599'],
      [0.4, '#004bb5'],
      [0.5, '#0056c8'],
      [0.6, '#0056d6'],
      [0.7, '#0056c8'],
      [0.8, '#004bb5'],
      [1, '#004599']
    ]
  },
  {
    specs: SPECS.a,
    grd: [
      [0, '#994517'],
      [0.1, '#bd6914'],
      [0.2, '#aa5b1a'],
      [0.3, '#de700b'],
      [0.4, '#913d10'],
      [0.5, '#c75115'],
      [0.6, '#de700b'],
      [0.7, '#aa5b1a'],
      [0.8, '#bd6914'],
      [0.9, '#ce5d16'],
      [1, '#913d10']
    ]
  },

  {
    specs: SPECS.a,
    grd: [
      [0, '#004bb5'],
      [0.1, '#041394'],
      [0.2, '#041394'],
      [0.3, '#041384'],
      [0.4, '#004599'],
      [0.5, '#041384'],
      [0.6, '#041394'],
      [0.7, '#004bb5'],
      [0.8, '#004599'],
      [0.9, '#040f64'],
      [1, '#041394']
    ]
  },

  {
    specs: SPECS.b,
    grd: [
      [0, '#bdbbb5'],
      [0.25, '#b5b3ad'],
      [0.5, '#97958f'],
      [0.75, '#908e88'],
      [1, '#75736d']
    ]
  },
  {
    specs: SPECS.b,
    grd: [
      [0, '#FDBF01'],
      [0.3, '#F97A05'],
      [0.6, '#B53B03'],
      [1, '#4C0B03'],
    ]
  },
  {
    specs: SPECS.a,
    grd: [
      [0, '#942a5b'],
      [0.2, '#943d58'],
      [0.4, '#773147'],
      [0.5, '#6d2d41'],
      [0.6, '#773147'],
      [0.8, '#a5386e'],
      [1, '#ad446c']
    ]
  },
  {
    specs: SPECS.a,
    grd: [
      [0, '#331103'],
      [0.1, '#4d1a04'],
      [0.2, '#5e1b01'],
      [0.3, '#692104'],
      [0.4, '#5e1b01'],
      [0.7, '#4d1a04'],
      [0.8, '#5e1b01'],
      [1, '#331103']
    ]
  }
];