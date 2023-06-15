class CatchLoader extends Phaser.Scene {
    constructor() {
      super("catchLoader");
    }

    preload() {
        this.load.atlas("Firefly", "./assets/Firefly/Firefly.png", "./assets/Firefly/Firefly.json")
    }

    create() {
        // add text describing game
        
        let menuKeyConfig = 
        {
          fontFamily: 'Courier',
          fontSize: '20px',
          color: '#ad02a8',
          align: 'center',
          fixedWidth: 0
        }

        this.add.text(game.config.width/2, midH-40, 'LIGHT UP THE NIGHT BY CATCHING FIREFLIES', menuKeyConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH, 'USE ARROW (↑) and (↓) TO MOVE THE NET', menuKeyConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH+40, 'PRESS (SPACE) TO SWING THE NET', menuKeyConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH+80, 'PRESS (P) TO START ', menuKeyConfig).setOrigin(0.5);

        // add some fireflies to scene
        this.anims.create({
            key: "fly",
            frameRate: 12,
            frames: this.anims.generateFrameNames('Firefly', {
              prefix: "Firefly",
              suffix: ".png",
              start: 0,
              end: 6
            }),
          repeat: -1,
          })
          
        this.currentFly = new Firefly(this, this.net, midW, midH-100, false, 64, 256, 128, 'Firefly', 'Firefly0.png').setOrigin(.5,0);
        this.currentFly.play("fly");



        // define play key
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    }

    update() {
        // start catch scene
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            this.scene.start("catchScene")
        }
    }
}