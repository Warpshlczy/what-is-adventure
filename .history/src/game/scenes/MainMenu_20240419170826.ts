import { Scene, GameObjects } from "phaser";
import { Button } from "../game-objects/global/Button";
import { GameTitle } from "../game-objects/main-menu/Title";
import { bindGameObject } from "../../utils/index";
import { EventBus } from "../EventBus";

export class MainMenu extends Scene {
    background: GameObjects.Image;
    title: GameTitle;
    btns: {
        startBtn: Button;
        settingBtn: Button;
    };
    //渲染队列

    constructor() {
        super("MainMenu");
    }
    init() {
        //初始化并绑定游戏对象,并添加到渲染队列中
        this.background = bindGameObject(
            new GameObjects.Image(this, 300, 384, "background")
        );
        this.title = bindGameObject(
            new GameTitle(this, 548, 120, "异世界大冒险", {
                fontFamily: "pixel",
                fontSize: 64,
                align: "center",
            })
        );
        this.btns = bindGameObject({
            startBtn: new Button(
                this,
                748,
                420,
                "width:100px;height:50px;",
                "开始游戏",
                "start-game",
                () => {
                    this.scene.start("prelude");
                }
            ),
            settingBtn: new Button(
                this,
                748,
                500,
                "width:100px;height:50px",
                "设置"
            ),
        });
    }
    create() {
        //渲染所有指定渲染的游戏对象
        EventBus.emit("current-scene-ready", this);
    }
    update() {}
    changeToStart() {
        const currentScene = this;
        return () => {
            currentScene.scene.start("Prelude");
        };
    }
}
