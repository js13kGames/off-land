function Planet(p) {
  this.grd = {};
  this.p = p;

  this.setGrd = function () {
    for (var i = 0; i < p.grd.length; i++) {
      this.grd.addColorStop(p.grd[i][0], p.grd[i][1]);
    }
  };

  this.draw = function () {
    var radius = 250;
    var x = CONFIG.screen.w - 100;
    var y = CONFIG.screen.h - 100;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    this.grd = ctx.createRadialGradient(p.specs.xs, p.specs.ys, p.specs.rs,
        p.specs.xe, p.specs.ye, p.specs.re);
    this.setGrd();
    ctx.fillStyle = this.grd;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#33160a';
    ctx.stroke();
  };
  this.draw();
}

SPECS = {
  a: {
    xs: 750,
    ys: 160,
    rs: 100,
    xe: 800,
    ye: 400,
    re: 350
  },
  b: {
    xs: 450,
    ys: 300,
    rs: 50,
    xe: 550,
    ye: 350,
    re: 250
  }
};

PLANET = [
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
    specs: SPECS.a,
    grd: [
      [0, '#dd4c92'],
      [0.2, '#cb4587'],
      [0.3, '#bd427c'],
      [0.4, '#a43a6b'],
      [0.5, '#9c3766'],
      [0.6, '#a43a6b'],
      [0.8, '#cb4587'],
      [1, '#cb859d']
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
  }
];