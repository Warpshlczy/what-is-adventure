import { GameObjects, Scene } from "phaser";
import type { Types } from "phaser";
export class Title extends GameObjects.Text {
    constructor(
        scene: Scene,
        x: number,
        y: number,
        text: string,
        style: Types.GameObjects.Text.TextStyle
    ) {
        super(scene, x, y, text, style);
    }
}

