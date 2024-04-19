import { Scene, GameObjects } from "phaser";
import { Button } from "../game-objects/global/Button";
import { GameTitle } from "../game-objects/main-menu/Title";
import { render, bindGameObject } from "../../utils/index";
import { EventBus } from "../EventBus";

export class MainMenu extends Scene {
    background: GameObjects.Image;
    title: GameTitle;
    btns: {
        startBtn: Button;
        settingBtn: Button;
    };
    //渲染队列
    renderList: Array<GameObjects.GameObject> = [];
    bindGameObject = bindGameObject;
    render = render;
    constructor() {
        super("MainMenu");
    }
    init() {
        //初始化并绑定游戏对象,并添加到渲染队列中
        this.bindGameObject(
            this.background,
            new GameObjects.Image(this, 300, 384, "background"),
            this.renderList
        );
        this.bindGameObject(
            this.title,
            new GameTitle(this, 548, 120, "什么是大冒险?", {
                fontFamily: "pixel",
                fontSize: 64,
                align: "center",
            }),
            this.renderList
        );
        this.bindGameObject(
            this.btns,
            {
                startBtn: new Button(
                    this,
                    512,
                    460,
                    "{width:400px;height:200px}",
                    "开始游戏"
                ),
                settingBtn: new Button(
                    this,
                    512,
                    480,
                    "{width:400px;height:200px}",
                    "设置"
                ),
            },
            this.renderList
        );
    }
    create() {
        //渲染所有游戏对象
        this.render(this, this.renderList);
        EventBus.emit("current-scene-ready", this);
    }
    update() {}
}
