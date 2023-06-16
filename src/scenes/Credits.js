class Credits extends Phaser.Scene {
    constructor() {
      super("creditScene");
    }
    
    preload() { 
    }
  
    create() {
        // Create text for credits
        let creditsConfig = 
      {
          fontFamily: 'Courier',
          fontSize: '20px',
          backgroundColor: '#CC000000',
          color: '#fff0fb',
          align: 'center',
      }
        this.add.text(midW, midH -40, "Artwork, sprites, animations by Michael Hein", creditsConfig).setOrigin(.5,.5)
        this.add.text(midW, midH, "Mechanics and Code by Michael Hein", creditsConfig).setOrigin(.5,.5)
        this.add.text(midW, midH + 60, "Ideas adapted from scenes \n in Grave Of the Fireflies (1988)", creditsConfig).setOrigin(.5,.5)

        this.returnMenu = this.add.text(midW, midH + 120, "Click here to return to menu", creditsConfig).setOrigin(.5,.5);
        this.returnMenu.setInteractive
        ({
            useHandCursor: true,
        });
        this.returnMenu.on('pointerdown', () => 
        {
            this.scene.start('menuScene')
        })
    }
  }