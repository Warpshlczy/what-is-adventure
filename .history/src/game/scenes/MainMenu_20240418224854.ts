import { Scene, GameObjects } from "phaser";
import { Button } from "../game-objects/global/Button";
import { GameTitle } from "../game-objects/main-menu/Title";
import { EventBus } from "../EventBus";

export class MainMenu extends Scene {
    background: GameObjects.Image;
    title: GameTitle;
    btns: {
        startBtn: Button;
        settingBtn: Button;
    };
    renderList: Array<GameObjects.GameObject> = [];
    constructor() {
        super("MainMenu");
    }
    init() {
        //初始化游戏对象
    }
    create() {
        this.bindGameObject(
            this.background,
            new GameObjects.Image(this, 512, 384, "background")
        );
        this.bindGameObject(
            this.title,
            new GameTitle(this, 570, 120, "什么是大冒险?", {
                fontFamily: "pixel",
                fontSize: 45,
                align: "center",
            })
        );
        //绑定游戏对象
        this.bindGameObject(this.btns, {
            startBtn: new Button(
                this,
                512,
                460,
                "{width:100px;height:50px}",
                "开始游戏"
            ),
            settingBtn: new Button(
                this,
                512,
                480,
                "{width:100px;height:50px}",
                "设置"
            ),
        });
        //渲染所有游戏对象
        this.render(this.renderList);
        EventBus.emit("current-scene-ready", this);
    }
    update() {}
    bindGameObject(variable: any, gameObject: object) {
        variable = gameObject;
        if (gameObject instanceof GameObjects.GameObject)
            this.renderList.push(gameObject as GameObjects.GameObject);
        else this.renderList.push(...Object.values(gameObject));
        console.log(this.renderList);
    }
    render(SceneGameObjects: Array<GameObjects.GameObject>) {
        Object.entries(SceneGameObjects).forEach(([, value]) => {
            this.add.existing(value);
        });
    }
    // logo: GameObjects.Image;
    // title: GameObjects.Text;
    // logoTween: Phaser.Tweens.Tween | null;
    // constructor() {
    //     super("MainMenu");
    // }
    // create() {
    //     this.background = this.add.image(512, 384, "background");
    //     this.logo = this.add.image(512, 300, "logo").setDepth(100);
    //     this.title = this.add
    //         .text(512, 460, "Main Menu", {
    //             fontFamily: "Arial Black",
    //             fontSize: 38,
    //             color: "#ffffff",
    //             stroke: "#000000",
    //             strokeThickness: 8,
    //             align: "center",
    //         })
    //         .setOrigin(0.5)
    //         .setDepth(100);
    //     EventBus.emit("current-scene-ready", this);
    // }
    // changeScene() {
    //     if (this.logoTween) {
    //         this.logoTween.stop();
    //         this.logoTween = null;
    //     }
    //     this.scene.start("Game");
    // }
    // moveLogo(vueCallback: ({ x, y }: { x: number; y: number }) => void) {
    //     if (this.logoTween) {
    //         if (this.logoTween.isPlaying()) {
    //             this.logoTween.pause();
    //         } else {
    //             this.logoTween.play();
    //         }
    //     } else {
    //         this.logoTween = this.tweens.add({
    //             targets: this.logo,
    //             x: { value: 750, duration: 3000, ease: "Back.easeInOut" },
    //             y: { value: 80, duration: 1500, ease: "Sine.easeOut" },
    //             yoyo: true,
    //             repeat: -1,
    //             onUpdate: () => {
    //                 if (vueCallback) {
    //                     vueCallback({
    //                         x: Math.floor(this.logo.x),
    //                         y: Math.floor(this.logo.y),
    //                     });
    //                 }
    //             },
    //         });
    //     }
    // }
}
