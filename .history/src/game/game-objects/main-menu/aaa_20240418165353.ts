import { GameObjects, Scene, type Types } from "phaser";

export class less extends GameObjects.Text {
    //此处定义新变量
    constructor(
        scene: Scene,
        x: number,
        y: number,
        text: string,
        style: Types.GameObjects.Text.TextStyle
    ) {
        super(scene, x, y, text, style);
    }
    //此处定义新函数
}
