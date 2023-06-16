class Firefly extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, net, x, y, random, start, wWid, hWid, texture, frame) {
        super(scene, x, y, texture, frame);
        this.net = net;
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        // Set random position of fireflies
        if (random) {
            this.setRandomPosition(start, start, w - wWid, h - hWid)
        }
        this.SPEED = (Math.random()) * 200
        this.ANG_SPEED = this.getDegrees();
        this.setMaxVelocity(this.SPEED);
        this.caught = false;
    }

    update() {
        // Rotation 
        // See https://phaser.discourse.group/t/how-to-create-circular-movement-motion-for-a-gameobject-with-arcade-physics/8324 by samme
        if (!this.isCaught) {
            this.setAngularVelocity(this.ANG_SPEED);
            this.scene.physics.velocityFromRotation(Phaser.Math.DegToRad(this.body.rotation), this.SPEED, this.body.velocity);
        }
        // If the firefly is caught in the net make it look like it is trapped
        if (this.isCaught) {
            this.x = this.net.x;
            this.y = this.net.y - 60;
            this.setAngularVelocity(0);
            if (this.x < 0 - this.width) {
                this.destroy();
            }
        }
    }

    getDegrees() {
        // Choose a rotation direction
        let deg = Math.random();
        if (deg >= .5) {
            return -90
        } else {
            return 90;
        }
    }
}