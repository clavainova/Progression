import { Object } from "./Object.js";

//props inherited from object:      url, width, height, img
//methods inherited from object:    draw(), despawn()

export class Bomb extends Object {
    constructor() {
        super();
    }
    explode() {

    }

    spawn() {
        let bombs = [];
        //<> = cWidth, 0
        //^v = cheight, 0
    }
}

function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//detect collision

//spawn position - array of previous positions to prevent overlap