let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Load, Menu, CatchLoader, Catch, Catch2, StayLoader, PlayLoader, Play, Stay, Credits],
  fps: {
    target: 60,
    forceSetTimeOut: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
      x: 0,
      y: 0
      }
    }
  }
}


let game = new Phaser.Game(config);
let backgroundMusic;
//reserve keys
let keyUP, keyDOWN, keySPACE, keyP;

let midW = game.config.width / 2;
let w = game.config.width;
let h = game.config.height;
let midH = game.config.height/2;