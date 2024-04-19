import { GameObjects, Scene } from "phaser";

export class Button extends GameObjects.DOMElement {
    //此处定义新变量
    constructor(
        scene: Scene,
        x: number,
        y: number,
        style: string,
        innerHTML: string
    ) {
        super(scene, x, y, "button", style, innerHTML);
    }
    //此处定义新函数
}

