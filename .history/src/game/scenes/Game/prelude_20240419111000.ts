import { Scene, GameObjects } from "phaser";
import { render, bindGameObject } from "../../../utils/index";
import { EventBus } from "../../EventBus";

export class Prelude extends Scene {
    primaryText: GameObjects.Text;
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
            new GameObjects.Text(
                this,
                350,
                300,
                "某天下午，你正在教室里上课...",
                {
                    fontSize: 48,
                    fontFamily: "pixel",
                }
            ),
            this.renderList
        );
    }
    create() {
        //渲染所有指定渲染的游戏对象
        this.render(this, this.renderList);
        EventBus.emit("current-scene-ready", this);
    }
    update() {
        this.primaryText = this.bindGameObject(
            new GameObjects.Text(this, 350, 300, "???", {
                fontSize: 48,
                fontFamily: "pixel",
            }),
            this.renderList
        );
    }
    // changeToStart() {
    //     const currentScene = this;
    //     return () => {
    //         currentScene.scene.start("Prelude");
    //     };
    // }
}
