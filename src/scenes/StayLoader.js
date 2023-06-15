class StayLoader extends Phaser.Scene {
    constructor() {
      super("stayLoader");
    }
    
    preload(){
        this.load.atlas("Setsuko", "./assets/Setsuko/Setsuko.png", "./assets/Setsuko/Setsuko.json")
    }

    create(){
        // add text describing game
        let menuKeyConfig = 
        {
          fontFamily: 'Courier',
          fontSize: '20px',
          backgroundColor: '#CC000000',
          color: '#ad02a8',
          align: 'center',
          fixedWidth: 0
        }

        this.add.text(game.config.width/2, midH-40, 'STAY AND COMFORT SETSUKO', menuKeyConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH, 'CLICK ON THE OBJECTS ON SCREEN', menuKeyConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH+40, 'PRESS (P) TO START ', menuKeyConfig).setOrigin(0.5);

        // setsuko animation
        // add some fireflies to scene
        this.anims.create({
            key: "cry",
            frameRate: 6,
            frames: this.anims.generateFrameNames('Setsuko', {
              prefix: "Setsuko",
              suffix: ".png",
              start: 0,
              end: 6
            }),
          repeat: -1,
          })
          console.log("hi")
        this.setsuko = new Setsuko(this, midW, midH - 80, 'Setsuko', 'Setsuko0.png')
        console.log("hi2")
        this.setsuko.play("cry");

        // define play key
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    }

    update() {
        // start catch scene
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            this.scene.start("stayScene")
        }
    }
}