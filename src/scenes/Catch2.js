class Catch2 extends Phaser.Scene {
    constructor() {
      super("catch2Scene");
    }

    preload() { 
        this.load.image("Firefly", "./assets/Firefly.png")
        this.load.image("Light", "./assets/Light.png")
    }

    create() {
        // Configuration for particles
        let lightConfig = {
            quantity: 1,
            scale: {start:.001, end:.5},
            lifespan: {min: 100, max: 200},
            alpha: 1,
        };
        
        // Attach particles to follow invisible fireflies so I don't have to rewrite the physics
        this.fireflyGroup = this.physics.add.group();
        this.particleGroup = this.add.group();
        for (var i = 0; i < 20; i++) {
            // Create fireflies and particles add them to respective groups
            this.currFly = new Firefly(this, this.net, Math.random() * game.config.width, midH, true, 0, 0, 0, 'Firefly').setOrigin(.5,0)
            lightConfig.follow = this.currFly;
            this.currParticle = this.add.particles(20,20,'Light',lightConfig);
            this.particleGroup.add(this.currParticle);
            this.currFly.setAlpha(0);
            this.fireflyGroup.add(this.currFly);
        }

        // timed events to make fireflies fade as they "die" and lower music volume
        this.fireflyFade = this.time.addEvent({
            delay: 10000, 
            callback: ()=> {
                backgroundMusic.setVolume(.2);
                this.particleGroup.children.each((particle)=> {
                particle.setAlpha(.5)
            })
            }
          }) 

          this.fireflyFade2 = this.time.addEvent({
            delay: 15000, 
            callback: ()=> {
                backgroundMusic.setVolume(.1);
                this.particleGroup.children.each((particle)=> {
                particle.setAlpha(.2)
            })
            }
          }) 

        this.fireflyDeath = this.time.addEvent({
            delay: 20000, 
        
            callback: ()=> {
                backgroundMusic.stop();
                this.particleGroup.children.each((particle)=> {
                particle.destroy();
            })
            },
            loop: true
          })
    }

    update() {
        // update fireflies and return to menu when fireflies are all gone
        this.fireflyGroup.children.each((firefly)=> {
            firefly.update();
        })

        if (this.particleGroup.getChildren().length == 0) {
            this.scene.start("menuScene");
        }
    }
}