class Catch extends Phaser.Scene {
    constructor() {
      super("catchScene");
    }
    
    preload() { 
      this.load.image("Firefly", "./assets/Firefly.png")
      this.load.atlas("Net", "./assets/Net/Net.png", "./assets/Net/Net.json")
      this.load.image("Stars", "./assets/Stars.png")
    }
  
    create() {
      this.stars = this.add.tileSprite(0,0,640,480,'Stars').setOrigin(0,0);
      this.backgroundMusic = this.sound.add('twinkle', {volume: .3, loop: true});
      this.backgroundMusic.play();
      this.fireflyGroup = this.physics.add.group();

      keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
      // create 10 fireflies
        for (var i = 0; i < 10; i++) {
            this.fireflyGroup.add(new Firefly(this, Math.random() * game.config.width, midH, 'Firefly').setOrigin(.5,0), false);
        }
         

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


      this.net = new Net(this, w, midH, 'Net', 'Net0.png').setOrigin(.5,.5);
      this.net.play("swoosh")
      this.net.setSize(18, 120)
      this.net.setOffset(5,5)
    }

    update() {
      this.stars.tilePositionX -= 1;
      this.fireflyGroup.children.each((firefly)=> {
        firefly.update();
    })
      this.net.update();
    }
}