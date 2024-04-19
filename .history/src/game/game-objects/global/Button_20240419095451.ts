import { GameObjects, Scene } from "phaser";

export class Button extends GameObjects.DOMElement {
    //此处定义新变量
    className: string;
    constructor(
        scene: Scene,
        x: number,
        y: number,
        style: string,
        innerHTML: string,
        className?: string | undefined
    ) {
        super(scene, x, y, "button", style, innerHTML);
        this.setClassName(className as string);
    }
    //此处定义新函数
}

