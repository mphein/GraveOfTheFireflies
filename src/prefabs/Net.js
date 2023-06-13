class Net extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.speed = 100;
    }

    update() {
        if (keyUP.isDown && this.y >= 0 + this.height/2) {
            this.body.velocity.y = -this.speed;
        } else if (keyDOWN.isDown && this.y <= h) {
            this.body.velocity.y = this.speed;
        } else if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.body.velocity.x = -150;
        } else {
            this.body.velocity.y = 0;
        }

        if (this.x <= 0 - this.width) {
            this.x = w;
            this.body.velocity.x = 0;
        }
    }
}