class Credits extends Phaser.Scene {
    constructor() {
      super("creditScene");
    }
    
    preload() { 
    }
  
    create() {
        //this.scene.start('menuScene');
        this.add.text(20,20,"hi")
    }
  }