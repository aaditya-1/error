class Dog {
    constructor(x, y) {

        var opt = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 5, 5, opt);
        this.image = loadImage("dogImg.png");
        this.image2 = loadImage("dogImg1.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        // rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 200, 200);
    }
    keyPressed() {

        if (keyDown(UP_ARROW)) {
            move(0, -10);
        }

        if (keyDown(DOWN_ARROW)) {
            move(0, 10);
        }

        if (keyDown(LEFT_ARROW)) {
            move(-10, 0);
        }

        if (keyDown(RIGHT_ARROW)) {
            move(10, 0);
            // dog.addImage()

        }

    }
}
