function getSong(speed) {
  return {
    songData: [
      { // Instrument 0
        i: [
          2, // OSC1_WAVEFORM
          100, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          201, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          0, // ENV_ATTACK
          6, // ENV_SUSTAIN
          29, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          194, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          3, // FX_FILTER
          25, // FX_FREQ
          191, // FX_RESONANCE
          115, // FX_DIST
          244, // FX_DRIVE
          147, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          84, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
        ],
        // Patterns
        p: [5, 1, 2],
        // Columns
        c: [
          {
            n: [123, 123, 135, 128, 123, 123, 135, 130, 126, 125, 126, 128, 123,
              123, 135, 128, 123, 123, 135, 130, 126, 125, 126, 128, 123, 123,
              135, 128, 123, 123, 135, 130],
            f: [21, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
              48]
          },
          {
            n: [123, 123, 135, 128, 123, 123, 135, 130, 126, 125, 126, 128, 123,
              123, 135, 128, 123, 123, 135, 130, 126, 125, 126, 128, 123, ,
              99, , , , 99, , , , , , , , , , , , , , , , , , , , , , , , , ,
              111],
            f: [, , , , , , , , , , , , , , , , , , , , , , , , , , , 11,
              13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
              31]
          },
          {
            n: [111, , , , , , , , 123, , , , , , , , 111, , , , , , , , 123],
            f: []
          },
          {
            n: [114, , , , , , , , 126, , , , , , , , 114, , , , , , , , 114,
              126, 111, 123, 114, 126, 118, 130],
            f: [13, , , , , , , , , , , , , , , , , , , , , , , , 13, , 13, ,
              13, , 13, 11, 29, , , , , , , , , , , , , , , , , , , , , , , ,
              32, , 41, , 29, , 25, 15]
          },
          {
            n: [123, 123, 135, 128, 123, 123, 135, 130, 126, 125, 126, 128, 123,
              123, 135, 128, 123, 123, 135, 130, 126, 125, 126, 128, 123, ,
              99, , , , 99, , , , , , , , , , , , , , , , , , , , , , , , , ,
              111],
            f: [13, 11, 21,
              17, , , , , , , , , , , , , , , , , , , , , , , , , , , , 17,
              29, , 25,
              113, , , , , , , , , , , , , , , , , , , , , , , , , , , , 194]
          }
        ]
      },
    ],
    rowLen: 16538 - speed,   // In sample lengths
    patternLen: 32,  // Rows per pattern
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
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [140],
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
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [146],
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
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [130],
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
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [164],
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
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
            {
              n: [],
              f: []
            },
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

function generateAllSounds() {
  generateAllLevelsSong();
  generateSound(SOUNDSGAME.hurt);
  generateSound(SOUNDSGAME.timeFreeze);
  generateSound(SOUNDSGAME.lifeUp);
  generateSound(SOUNDSGAME.shield);
  generateSound(SOUNDSGAME.win);
  generateSound(SOUNDSGAME.lose);
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

function playSound(soundType) {
  //todo: encontrar mejor solucion. El catch no hace nada
  // var audioSounds = document.createElement("audio");
  audioSounds.src = URL.createObjectURL(
      new Blob([soundType.wave], {type: "audio/wav"}));

  audioSounds.autoplay = true;
  const p = audioSounds.play();
  if (p && (typeof Promise !== 'undefined') && (p instanceof Promise)) {
    p.catch(e => e = 0);
  }

}

var wavesSong = [];

var audioSong = document.createElement("audio");
var audioSounds = document.createElement("audio");
