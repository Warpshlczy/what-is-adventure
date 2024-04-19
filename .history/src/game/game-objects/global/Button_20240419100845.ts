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
        className?: string,
        onClick?: Function
    ) {
        super(scene, x, y, "button", style, innerHTML);
        className || this.setClassName(className as string);
        this.onClick(onClick as Function);
    }
    //此处定义新函数
    onClick(callback: Function) {
        this.addListener("click");
        this.on("click", callback);
    }
}

