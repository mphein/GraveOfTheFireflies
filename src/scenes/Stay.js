class Stay extends Phaser.Scene {
    constructor() {
      super("stayScene");
    }
    
    preload() { 
      this.load.atlas("Setsuko", "./assets/Setsuko/Setsuko.png", "./assets/Setsuko/Setsuko.json")
      this.load.image("Candy", "./assets/Candy.png")

    }
  
    create() {
      this.backgroundMusic = this.sound.add('sorrow', {volume: .3, loop: true});
      this.backgroundMusic.play();
      // cry animation
      this.textCounter = 0;
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

    
      // create setsuko
      this.setsuko = new Setsuko(this, midW, midH, 'Setsuko', 'Setsuko0.png').setOrigin(.5,.5);
      this.setsuko.play("cry");


      // initialize game mechanics
      this.setsuko.setInteractive
      ({
          useHandCursor: true,
      });

      this.setsuko.on('pointerdown', () => 
      {
          this.spawnText();
      });

      this.textKeyConfig = 
        {
          fontFamily: 'Brush Script MT',
          fontSize: '20px',
          color: '#ad02a8',
          align: 'center',
          fixedWidth: 0
        }
        this.currFont = 0;
        this.currColor = 0;
        this.colors = ['#ad02a8', '#fe3988' , '#82bae0', '#fbfdf2', '#04a529', '#f0e500', '#fd8f00', '#f10026']
        this.textGroup = this.add.group();
        this.fonts = ['Courier', 'Arial', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT'];
    }

    update(){
      // ADD SHAKE SOUND 
      // SETSUKO CLICK SOUND
      // BACKGROUND MUSIC FOR SECOND PART
    }

    // create setsuko's cries
    spawnText() {
      if (this.textCounter <= 50) {
        if (this.currFont > 8) {
          this.currFont= 0;
        }
        if (this.currColor > 7) {
          this.currColor = 0;
        }
        // randomize font size and family
        this.textKeyConfig.fontFamily = this.fonts[this.currFont]
        console.log(this.textKeyConfig.fontFamily);
        this.textKeyConfig.fontSize = Math.random() * 100
        this.textKeyConfig.color = this.colors[this.currColor]
        this.currFont++;
        this.currColor++;

        // change text
        if (this.textCounter % 2 == 0) {
          this.text = this.add.text(0,0, "STAY WITH ME", this.textKeyConfig)
        } else {
          this.text = this.add.text(0,0, "DON'T LEAVE ME", this.textKeyConfig)
        }
        // play sound and change position
        this.sound.play('push');
        this.text.setRandomPosition(0, 0, midW, h);
        this.textCounter++;
        console.log(this.textCounter);
        this.textGroup.add(this.text);
      } else {
        this.setsuko.destroy();
        this.candy = this.add.image(midW, midH, 'Candy').setOrigin(.5,.5)
        this.candy.setInteractive
      ({
          useHandCursor: true,
      });

      this.candy.on('pointerdown', () => 
      {
          this.destroyText(this.candy);
          this.sound.play('pop');

      });
      }
    }

    // destroy the text with candy to calm setsuko down
    destroyText(candy) {
      if (this.textGroup.getChildren().length > 0) {
        this.textGroup.getChildren().pop().destroy();
      } else {
        this.textKeyConfig.fontSize = 20
        this.backgroundMusic.stop();
        this.scene.start('menuScene');
      }
    }

  }