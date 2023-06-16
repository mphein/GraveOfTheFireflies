class CatchLoader extends Phaser.Scene {
    constructor() {
      super("catchLoader");
    }

    preload() {
        this.load.atlas("Firefly", "./assets/Firefly/Firefly.png", "./assets/Firefly/Firefly.json")
    }

    create() {
        // Add text to describe game and instructions
        let catchConfig = 
        {
          fontFamily: 'Courier',
          fontSize: '20px',
          color: '#ad02a8',
          align: 'center',
          fixedWidth: 0
        }

        this.add.text(game.config.width/2, midH-40, 'LIGHT UP THE NIGHT BY CATCHING FIREFLIES', catchConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH, 'USE ARROW (↑) and (↓) TO MOVE THE NET', catchConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH+40, 'PRESS (SPACE) TO SWING THE NET', catchConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH+80, 'PRESS (P) TO START ', catchConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, midH+160, 'CLICK THE FIREFLY TO RETURN TO MENU', catchConfig).setOrigin(0.5);


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
        
        // Add firefly to return to menu
        this.currentFly = new Firefly(this, this.net, midW, midH-100, false, 64, 256, 128, 'Firefly', 'Firefly0.png').setOrigin(.5,0);
        this.currentFly.play("fly");

        this.currentFly.setInteractive
        ({
            useHandCursor: true,
        });
  
        this.currentFly.on('pointerdown', () => 
        {
            this.scene.start('menuScene')
        });

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