class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
    
    preload() { 
    }
  
    create() {
      // Scene description because I was unable to finish
      let playConfig = 
      {
          fontFamily: 'Courier',
          fontSize: '20px',
          color: '#fff0fb',
          align: "center",
          wordWrap: { width: 600, useAdvancedWrap: true }
      }

      // Description about unfinished scene
      this.add.text(midW, h/4, "I wasn't able to finish this game, but my idea was to have \
      Setsuko playing in Heaven while Seita mourns her death. On one side of the scene Seita \
      would be saying goodbye to Setsuko while he cremates her lifeless body. Setsuko is on the opposite \
      side of the scene enjoying her happy place and playing Rock, Paper, Scissors against her \
      reflection in the water. The player can choose Rock, Paper, or Scissors but no choice will change the \
      outcome of the game. There is no winning. Setsuko is finally at peace.", playConfig).setOrigin(.5,0)

      // back to menu
      this.returnMenu = this.add.text(midW, midH + 160, "Click here to return to menu", playConfig).setOrigin(.5);
      this.returnMenu.setInteractive
      ({
          useHandCursor: true,
      });
      this.returnMenu.on('pointerdown', () => 
      {
          this.scene.start('menuScene')
      })    }
  }