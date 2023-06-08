let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Menu, Load, Catch, Game, Stay, Credits],
  fps: {
    target: 60,
    forceSetTimeOut: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
      x: 0,
      y: 0
      }
    }
  }
}

let game = new Phaser.Game(config);
