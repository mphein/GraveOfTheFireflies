class Catch extends Phaser.Scene {
    constructor() {
      super("catchScene");
    }
    
    preload() { 
    }
  
    create() {
        //this.scene.start('menuScene');
        this.add.text(20,20,"hi")
    }
  }