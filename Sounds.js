function fillEmpty(el, times, last_n) {
  for (var i = 0; i < times; i++) {
    el.push({
      n: [], f: []
    });
  }
  el.push({
    n: [last_n], f: []
  });
}

function getSong(speed) {
  return {
    songData: [
      { // Instrument 0
        i: [
          0, // OSC1_WAVEFORM
          96, // OSC1_VOL
          116, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          192, // OSC2_VOL
          116, // OSC2_SEMI
          8, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          15, // ENV_ATTACK
          0, // ENV_SUSTAIN
          35, // ENV_RELEASE
          85, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          53, // LFO_AMT
          3, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          70, // FX_FREQ
          183, // FX_RESONANCE
          53, // FX_DIST
          56, // FX_DRIVE
          136, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          131, // FX_DELAY_AMT
          4 // FX_DELAY_TIME
        ],
        // Patterns
        p: [6, 2, 7],
        // Columns
        c: [
          {
            n: [147, 152, 150, 154, 152, 150, 149, 152, 147, 152, 150, 154, 152,
              150, 149, 152],
            f: [13, , , , , , , , , , , , , , , , 43]
          },
          {
            n: [150, 155, 153, 157, 155, 153, 152, 155, 150, 155, 153, 157, 155,
              153, 152, 155],
            f: []
          },
          {
            n: [145, 150, 148, 152, 150, 148, 147, 150, 145, 150, 148, 152, 150,
              148, 147, 150],
            f: []
          },
          {
            n: [135, , 123, , 135, , 123],
            f: []
          },
          {
            n: [],
            f: []
          },
          {
            n: [147, 152, 150, 154, 152, 150, 149, 152, 147, 152, 150, 154, 152,
              150, 149, 152],
            f: [11, 13, , , , , , , , , , , , , , , 15, 35]
          },
          {
            n: [145, 150, 148, 152, 150, 148, 147, 150, 145, 150, 148, 152, 150,
              148, 147, 150],
            f: [11, , 13, , 11, , , , 11, , , , 11, , 13, , 13, , 36, ,
              12, , , , 9, , , , 5, , 37]
          }
        ]
      },
    ],
    rowLen: 15000 - speed,   // In sample lengths
    patternLen: 16,  // Rows per pattern
    endPattern: 2,  // End pattern
    numChannels: 1  // Number of channels
  };
}

var SOUNDSGAME = {
  hurt: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            0, // OSC1_WAVEFORM
            214, // OSC1_VOL
            104, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            204, // OSC2_VOL
            104, // OSC2_SEMI
            0, // OSC2_DETUNE
            1, // OSC2_XENV
            229, // NOISE_VOL
            4, // ENV_ATTACK
            40, // ENV_SUSTAIN
            21, // ENV_RELEASE
            0, // ARP_CHORD
            0, // ARP_SPEED
            0, // LFO_WAVEFORM
            231, // LFO_AMT
            6, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            183, // FX_FREQ
            15, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            232, // FX_PAN_AMT
            4, // FX_PAN_FREQ
            74, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {
              n: [137],
              f: []
            }
          ]
        },
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 1,  // Rows per pattern
      endPattern: 0,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  },
  timeFreeze: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            152, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            152, // OSC2_SEMI
            12, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            2, // ENV_ATTACK
            0, // ENV_SUSTAIN
            60, // ENV_RELEASE
            0, // ARP_CHORD
            0, // ARP_SPEED
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            47, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [32],
          // Columns
          c: [
            {
              n: [144],
              f: []
            }
          ]
        },
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 1,  // Rows per pattern
      endPattern: 5,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  },
  signal: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            0, // OSC1_WAVEFORM
            255, // OSC1_VOL
            152, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            255, // OSC2_VOL
            152, // OSC2_SEMI
            12, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            2, // ENV_ATTACK
            0, // ENV_SUSTAIN
            60, // ENV_RELEASE
            0, // ARP_CHORD
            0, // ARP_SPEED
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            47, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [32],
          // Columns
          c: [
            {
              n: [144],
              f: []
            }
          ]
        },
      ],
      rowLen: 1000,   // In sample lengths
      patternLen: 1,  // Rows per pattern
      endPattern: 2,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  },
  lifeUp: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            0, // OSC1_WAVEFORM
            91, // OSC1_VOL
            128, // OSC1_SEMI
            0, // OSC1_XENV
            0, // OSC2_WAVEFORM
            95, // OSC2_VOL
            128, // OSC2_SEMI
            12, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            12, // ENV_ATTACK
            0, // ENV_SUSTAIN
            72, // ENV_RELEASE
            0, // ARP_CHORD
            0, // ARP_SPEED
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            2, // FX_FILTER
            255, // FX_FREQ
            0, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            83, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            130, // FX_DELAY_AMT
            4 // FX_DELAY_TIME
          ],
          // Patterns
          p: [32],
          // Columns
          c: [
            {
              n: [144],
              f: []
            }
          ]
        },
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 1,  // Rows per pattern
      endPattern: 0,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  },
  shield: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            2, // OSC1_WAVEFORM
            40, // OSC1_VOL
            140, // OSC1_SEMI
            1, // OSC1_XENV
            0, // OSC2_WAVEFORM
            0, // OSC2_VOL
            140, // OSC2_SEMI
            0, // OSC2_DETUNE
            0, // OSC2_XENV
            255, // NOISE_VOL
            5, // ENV_ATTACK
            0, // ENV_SUSTAIN
            48, // ENV_RELEASE
            0, // ARP_CHORD
            0, // ARP_SPEED
            0, // LFO_WAVEFORM
            0, // LFO_AMT
            0, // LFO_FREQ
            0, // LFO_FX_FREQ
            3, // FX_FILTER
            161, // FX_FREQ
            192, // FX_RESONANCE
            0, // FX_DIST
            32, // FX_DRIVE
            0, // FX_PAN_AMT
            0, // FX_PAN_FREQ
            71, // FX_DELAY_AMT
            1 // FX_DELAY_TIME
          ],
          // Patterns
          p: [32],
          // Columns
          c: [
            {
              n: [144],
              f: []
            }
          ]
        },
      ],
      rowLen: 22050,   // In sample lengths
      patternLen: 1,  // Rows per pattern
      endPattern: 0,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  },
  win: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            2, // OSC1_WAVEFORM
            138, // OSC1_VOL
            116, // OSC1_SEMI
            0, // OSC1_XENV
            2, // OSC2_WAVEFORM
            138, // OSC2_VOL
            128, // OSC2_SEMI
            4, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            47, // ENV_ATTACK
            48, // ENV_SUSTAIN
            107, // ENV_RELEASE
            124, // ARP_CHORD
            3, // ARP_SPEED
            0, // LFO_WAVEFORM
            139, // LFO_AMT
            4, // LFO_FREQ
            1, // LFO_FX_FREQ
            3, // FX_FILTER
            64, // FX_FREQ
            160, // FX_RESONANCE
            3, // FX_DIST
            32, // FX_DRIVE
            147, // FX_PAN_AMT
            4, // FX_PAN_FREQ
            121, // FX_DELAY_AMT
            5 // FX_DELAY_TIME
          ],
          // Patterns
          p: [32],
          // Columns
          c: [
            {
              n: [144],
              f: []
            }
          ]
        },
      ],
      rowLen: 11025,   // In sample lengths
      patternLen: 8,  // Rows per pattern
      endPattern: 5,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  },
  lose: {
    sound: {
      songData: [
        { // Instrument 0
          i: [
            3, // OSC1_WAVEFORM
            146, // OSC1_VOL
            140, // OSC1_SEMI
            0, // OSC1_XENV
            1, // OSC2_WAVEFORM
            224, // OSC2_VOL
            128, // OSC2_SEMI
            3, // OSC2_DETUNE
            0, // OSC2_XENV
            0, // NOISE_VOL
            92, // ENV_ATTACK
            0, // ENV_SUSTAIN
            95, // ENV_RELEASE
            0, // ARP_CHORD
            0, // ARP_SPEED
            3, // LFO_WAVEFORM
            179, // LFO_AMT
            5, // LFO_FREQ
            1, // LFO_FX_FREQ
            2, // FX_FILTER
            124, // FX_FREQ
            135, // FX_RESONANCE
            11, // FX_DIST
            32, // FX_DRIVE
            150, // FX_PAN_AMT
            3, // FX_PAN_FREQ
            157, // FX_DELAY_AMT
            6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [32],
          // Columns
          c: [
            {
              n: [144],
              f: []
            }
          ]
        },
      ],
      rowLen: 11025,   // In sample lengths
      patternLen: 20,  // Rows per pattern
      endPattern: 5,  // End pattern
      numChannels: 1  // Number of channels
    },
    wave: {}
  }
};

fillEmpty(SOUNDSGAME.timeFreeze.sound.songData[0].c, 30, 140);
fillEmpty(SOUNDSGAME.signal.sound.songData[0].c, 30, 140);
fillEmpty(SOUNDSGAME.lifeUp.sound.songData[0].c, 30, 146);
fillEmpty(SOUNDSGAME.shield.sound.songData[0].c, 30, 130);
fillEmpty(SOUNDSGAME.win.sound.songData[0].c, 30, 164);
fillEmpty(SOUNDSGAME.lose.sound.songData[0].c, 30, 144);

function generateAllSounds() {
  generateAllLevelsSong();
  generateSound(SOUNDSGAME.hurt);
  generateSound(SOUNDSGAME.timeFreeze);
  generateSound(SOUNDSGAME.lifeUp);
  generateSound(SOUNDSGAME.shield);
  generateSound(SOUNDSGAME.win);
  generateSound(SOUNDSGAME.lose);
  generateSound(SOUNDSGAME.signal);
}

function generateSound(soundType) {
  var cPlayer = new CPlayer();
  cPlayer.init(soundType.sound);
  cPlayer.generate();
  soundType.wave = cPlayer.createWave();
}

function generateAllLevelsSong() {
  var songSpeedMultiplier = 1200;
  for (var i = 0; i < LEVEL_CONFIG.levels; i++) {
    var song = getSong(i * songSpeedMultiplier);
    wavesSong.push(generateWave(song));
  }
}

function generateWave(song) {
  var cPlayer = new CPlayer();
  cPlayer.init(song);
  cPlayer.generate();
  return cPlayer.createWave();
}

function playSong(lvl) {
  audioSong.src = URL.createObjectURL(
      new Blob([wavesSong[lvl - 1]], {type: "audio/wav"}));
  audioSong.loop = true;
  audioSong.play()
}

function stopSong() {
  audioSong.pause();
}

var soundPromise = undefined;
var isSoundPlaying = false;

function playSound(soundType, isLoop) {
  isLoop = (isLoop === true);
  if (isSoundPlaying) {
    soundPromise.then(function () {
      playSound(soundType, isLoop);
    });
  } else {
    soundPromise = playSoundInPromise(soundType, isLoop);
  }
}

function playSoundInPromise(soundType, isLoop) {
  return new Promise(function () { // return a promise
    audioSounds.preload = "auto";  // intend to play through
    audioSounds.autoplay = true; // autoplay when loaded
    audioSounds.loop = isLoop;
    audioSounds.onerror = function () {
    };                      // on error, reject
    audioSounds.onended = function () {
      isSoundPlaying = false;
    };                     // when done, resolve
    audioSounds.src = URL.createObjectURL(
        new Blob([soundType.wave], {type: "audio/wav"}));
  });
}

function stopSound() {
  audioSounds.pause();
}

var wavesSong = [];

var audioSong = document.createElement("audio");
var audioSounds = document.createElement("audio");
