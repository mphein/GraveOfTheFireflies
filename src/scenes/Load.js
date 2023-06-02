class Load extends Phaser.Scene {
    constructor() {
      super("loadScene");
    }
    
    preload() { 
    }
  
    create() {
        //this.scene.start('menuScene');
        this.add.text(20,20,"hi")
    }
  }