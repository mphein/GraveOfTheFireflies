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
          color: '#fff0fb',
          align: 'center',
          fixedWidth: 0
      }
      // show menu title text
      this.add.text(game.config.width/2, h/4, 'GRAVE OF THE FIREFLIES', menuKeyConfig).setOrigin(0.5);

      // show menu key text
      this.catchScene = this.add.text(game.config.width/2, midH - 40, 'Click to Catch Fireflies', menuKeyConfig).setOrigin(0.5);
      this.stayScene = this.add.text(game.config.width/2, midH, 'Click to Comfort Setsuko', menuKeyConfig).setOrigin(0.5);
      this.playScene = this.add.text(game.config.width/2, midH + 40, 'Click to Be at Peace', menuKeyConfig).setOrigin(0.5);

      this.sceneGroup = this.add.group();
      this.sceneGroup.add(this.catchScene)
      this.sceneGroup.add(this.stayScene)
      this.sceneGroup.add(this.playScene)

      this.sceneGroup.children.each((scene)=> {
        scene.setInteractive
        ({
            useHandCursor: true,
        });

        scene.on('pointerover', () => 
        {
            scene.setTint(0x81007f);
        })
  
        scene.on('pointerout', () => {
          scene.setTint(0xffffff)
      })
     })
        this.catchScene.once('pointerdown', () => 
        {
            this.scene.start('catchLoader')
        });
        this.stayScene.once('pointerdown', () => 
        {
            this.scene.start('stayLoader')
        });
        this.playScene.once('pointerdown', () => 
        {
            this.scene.start('playLoader')
        });
  
    }
  }