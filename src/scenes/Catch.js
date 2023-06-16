class Catch extends Phaser.Scene {
    constructor() {
      super("catchScene");
    }
    
    preload() { 
      // load sprites and texture atlases
      this.load.atlas("Firefly", "./assets/Firefly/Firefly.png", "./assets/Firefly/Firefly.json")
      this.load.atlas("Net", "./assets/Net/Net.png", "./assets/Net/Net.json")
      this.load.image("Stars", "./assets/Stars.png")
    }
  
    create() {

      // create anims
      this.anims.create({
        key: "swoosh",
        frameRate: 12,
        frames: this.anims.generateFrameNames('Net', {
          prefix: "Net",
          suffix: ".png",
          start: 0,
          end: 3
        }),
      repeat: -1,
      })

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

      // add scrolling background and music
      this.stars = this.add.tileSprite(0,0,640,480,'Stars').setOrigin(0,0);
      backgroundMusic = this.sound.add('twinkle', {volume: .3, loop: true});
      backgroundMusic.play();

      // create player net
      this.net = new Net(this, w, midH, 'Net', 'Net0.png').setOrigin(.5,.5);
      this.net.play("swoosh")
      this.net.setSize(18, 120)
      this.net.setOffset(5,5)

      // create player controls
      keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
      // create 10 fireflies
      this.fireflyGroup = this.physics.add.group();
        for (var i = 0; i < 20; i++) {
           this.currentFly = new Firefly(this, this.net, Math.random() * game.config.width, midH, true, 64, 256, 128, 'Firefly', 'Firefly0.png').setOrigin(.5,0);
           this.currentFly.play("fly");
           this.fireflyGroup.add(this.currentFly);
        }
        this.physics.add.overlap(this.net, this.fireflyGroup, this.catch, null, this);

    }

    update() {
      // scroll tileBackground and update sprites
      this.stars.tilePositionX -= 1;
      this.fireflyGroup.children.each((firefly)=> {
        firefly.update();
    })
      // move net and check to see if any fireflies are left
      this.net.update();
      if (this.fireflyGroup.getChildren().length == 0) {
        this.scene.start("catch2Scene")
      }
    }
    
    // Catch firefly function which changes isCaught of each firefly to true
    catch(net, firefly) {
      firefly.isCaught = true;
      this.sound.play('catch', {volume: .5});
    }
}