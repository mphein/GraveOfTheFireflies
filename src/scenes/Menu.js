class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() { 
    }
  
    create() {
      let menuKeyConfig = 
      {
          fontFamily: 'Courier',
          fontSize: '20px',
          backgroundColor: '#CC000000',
          color: '#FFD700',
          align: 'center',
          padding:
          {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }
      // show menu title text
      this.add.text(game.config.width/2, 20, 'GRAVE OF THE FIREFLIES', menuKeyConfig).setOrigin(0.5);

      // show menu key text
      this.catchScene = this.add.text(game.config.width/2, 400, 'Click to Catch Fireflies', menuKeyConfig).setOrigin(0.5);

      this.catchScene.setInteractive
      ({
          useHandCursor: true,
      });

      this.catchScene.on('pointerover', () => 
      {
          this.catchScene.setTint(0x81007f);
      })

      this.catchScene.on('pointerout', () => {
        this.catchScene.setTint(0xffffff)
    })

      this.catchScene.once('pointerdown', () => 
      {
          this.scene.start('catchScene')
      });
    }
  }