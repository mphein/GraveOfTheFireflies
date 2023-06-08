class Game extends Phaser.Scene {
    constructor() {
      super("gameScene");
    }
    
    preload() { 
    }
  
    create() {
        //this.scene.start('menuScene');
        this.add.text(20,20,"hi")
    }
  }