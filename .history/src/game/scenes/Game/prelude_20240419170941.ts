import { Scene, GameObjects } from "phaser";
import { render, bindGameObject } from "../../../utils/index";
import { EventBus } from "../../EventBus";

export class Prelude extends Scene {
    primaryText: GameObjects.Text;
    textContent: Array<string> = [
        "1",
        "某天下午，你正在教室里上课...",
        "突然，一道闪电从天空劈下！",
        "当你再次睁开眼睛...",
        "你转生到了异世界!",
    ];
    //渲染队列
    renderList: Array<GameObjects.GameObject> = [];
    bindGameObject = bindGameObject;
    render = render;
    constructor() {
        super("Prelude");
    }
    init() {
        //初始化并绑定游戏对象,并添加到渲染队列中
        this.primaryText = this.bindGameObject(
            new GameObjects.Text(this, 0, 300, this.textContent[1], {
                fixedHeight: 50,
                fixedWidth: 1440,
                fontSize: 48,
                fontFamily: "pixel",
                align: "center",
            })
        );
    }
    create() {
        EventBus.emit("current-scene-ready", this);
        this.input.on("pointerup", () => {
            this.switchContent();
        });
    }
    update() {}

    // changeToStart() {
    //     const currentScene = this;
    //     return () => {
    //         currentScene.scene.start("Prelude");
    //     };
    // }
    switchContent() {
        // this.primaryText.text = this.textContent.values().next().value;
        let index = parseInt(this.textContent[0]);
        if (this.textContent[++index]) {
            this.primaryText.text = this.textContent[index];
            this.textContent[0] = "" + index;
        } else return;
    }
}
