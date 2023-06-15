class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
    
    preload() { 
    }
  
    create() {
        //this.scene.start('menuScene');
        this.add.text(20,20,"poopy")
    }
  }