import { Scene, GameObjects } from "phaser";
import { Button } from "../../game-objects/global/Button";
import { GameTitle } from "../../game-objects/main-menu/Title";
import { render, bindGameObject } from "../../../utils/index";
import { EventBus } from "../../EventBus";

export class Prelude extends Scene {
    primaryText: GameObjects.Text;
    //渲染队列
    renderList: Array<GameObjects.GameObject> = [];
    bindGameObject = bindGameObject;
    render = render;
    constructor() {
        super("Game");
    }
    init() {
        //初始化并绑定游戏对象,并添加到渲染队列中
    }
    create() {
        //渲染所有指定渲染的游戏对象
        this.render(this, this.renderList);
        EventBus.emit("current-scene-ready", this);
    }
    update() {}
    changeToStart() {
        const currentScene = this;
        return () => {
            currentScene.scene.start("MainGame");
        };
    }
}
