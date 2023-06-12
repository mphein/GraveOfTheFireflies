class Catch extends Phaser.Scene {
    constructor() {
      super("catchScene");
    }
    
    preload() { 
      this.load.image("firefly", "./assets/Firefly.png")
    }
  
    create() {
      this.add.image(10, 10,"firefly")  ;  
    }
  }