class Load extends Phaser.Scene {
  constructor() {
    super("loadScene");
  }
  
  preload() { 
    // loading bar
    // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
    let loadingBar = this.add.graphics();
    this.load.on('progress', (value) => {
      loadingBar.clear();                                 // reset fill/line style
      loadingBar.fillStyle(0xfff0fb, 1);                  // (color, alpha)
      loadingBar.fillRect(0, midH - 25, w * value, 50);  // (x, y, w, h)
    });
    this.load.on('complete', () => {
      loadingBar.destroy();
    });
    // See MondayHopes on pixabay "Twinkle Like a Star"
    this.load.audio('twinkle',"./assets/twinkle.mp3");    
    this.load.audio('catch',"./assets/catch.wav");   
    this.load.audio('push',"./assets/push.wav");   
    this.load.audio('pop',"./assets/pop.wav");   

    // See Lesfm on pixabay "Sorrow"
    this.load.audio('sorrow', './assets/sorrow.mp3') 
  }

  create() {
      this.scene.start('menuScene');
  }
}