import { GameObjects, Scene } from "phaser";

export const bindGameObject = (
    gameObject: object,
    renderList: Array<GameObjects.GameObject>
) => {
    if (gameObject instanceof GameObjects.GameObject)
        renderList.push(gameObject as GameObjects.GameObject);
    else renderList.push(...Object.values(gameObject));
    return gameObject;
};

export const render = (
    scene: Scene,
    SceneGameObjects: Array<GameObjects.GameObject>
) => {
    Object.entries(SceneGameObjects).forEach(([, value]) => {
        scene.add.existing(value);
    });
};

