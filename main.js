// Phaser components used: (1) physics systems
//                         (2) particle effects 
//                         (3) text objects
//                         (4) animation manger 
//                         (5) timers
// Unfortunately I wasn't able to finish in time for the deadline due to health reasons
// But I tried to think of experiemtal and non-conventional game ideas similar to Pippin Barr's Combat at the Movies
// that we looked at in week 6. I wanted to avoid extremely violent scenes of the war, because to me the movie is about
// following this very intimate relationship between siblings during harsh times. I focused on critical moments of the movie
// that highlight the pair's youth, ignorance, innocence, and struggles throughout their journey.

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Load, Menu, CatchLoader, Catch, Catch2, StayLoader, Play, Stay, Credits],
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