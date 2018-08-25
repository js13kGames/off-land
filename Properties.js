const LEVEL_CONFIG = {
    levels: 10,
    1: {f: 8, s: 1, a: 10},
    2: {f: 8, s: 2, a: 8},
    3: {f: 8, s: 2, a: 10},
    4: {f: 8, s: 3, a: 8},
    5: {f: 8, s: 3, a: 12},
    6: {f: 8, s: 4, a: 8},
    7: {f: 8, s: 4, a: 10},
    8: {f: 8, s: 5, a: 10},
    9: {f: 8, s: 5, a: 12},
    10: {f: 8, s: 6, a: 12}
};

const CONFIG = {
    life: 5,
    start: 1,
    shield:{
        start: 5,
        add: 15,
        max: 3,
        chance: 600
    },
    screen: {
        w: 800,
        h: 600
    },
    framesPerSecond: 60,
    lifeCharCode: 10084,
    initPos: {
        x: 400,
        y: 300,
    },
    player: {
        w: 35,
        h: 35,
        grow: {
            h: 3,
            w: 3
        }
    }
};

// Shield Char Code 128737