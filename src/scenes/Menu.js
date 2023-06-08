class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() { 
    }
  
    create() {
        //this.scene.start('menuScene');
        this.add.text(20,20,"hi")
    }
  }