class Firefly extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setRandomPosition(64, 64, w - 256, h - 128)
        this.SPEED = (Math.random()) * 200
        this.ANG_SPEED = this.getDegrees();
        this.setMaxVelocity(this.SPEED);
    }

    update() {
        // Rotation 
        // see https://phaser.discourse.group/t/how-to-create-circular-movement-motion-for-a-gameobject-with-arcade-physics/8324 by samme
        this.setAngularVelocity(this.ANG_SPEED);
        this.scene.physics.velocityFromRotation(Phaser.Math.DegToRad(this.body.rotation), this.SPEED, this.body.velocity);
    }

    getDegrees() {
        let deg = Math.random();
        if (deg >= .5) {
            return -90
        } else {
            return 90;
        }
    }
}