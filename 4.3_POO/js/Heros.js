import { Humanoid } from "./Humanoide.js";

//props inherited from object:      url, width, height
//props inherited from humanoid:    x, y
//methods inherited from object:    draw(), despawn()
//methods inherited from humanoid:  ---

//request animation frame

export class Hero extends Humanoid {
    constructor(x, y, width, height, url, rateX, rateY, speed) {
        super(x, y, width, height, url);
        this.rateX = rateX;
        this.rateY = rateY;
        this.speed = speed;
    }

    //check if it leaves the canvas
    updateMove(ctx) {
        this.rateX = 0;
        this.rateY = 0;
        switch (ctx.key) {
            case (37): this.rateX -= this.speed; break; //left
            case (39): this.rateX += this.speed; break; //right
            case (38): this.rateY -= this.speed; break; //up
            case (40): this.rateY += this.speed; break; //down
        }
        this.move(ctx);
    }

    move(ctx) {
        this.despawn(this.x, this.y, ctx);
        this.x += this.rateX;
        this.y += this.rateY;
        this.draw(ctx, this.x, this.y);
    }
}