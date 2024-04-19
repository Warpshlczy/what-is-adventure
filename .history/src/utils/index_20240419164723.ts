import { GameObjects, Scene } from "phaser";

export const bindGameObject = (
    gameObject: any,
    renderList?: Array<GameObjects.GameObject>
) => {
    if (!renderList) return gameObject;
    if (gameObject instanceof GameObjects.GameObject)
        renderList.push(gameObject as GameObjects.GameObject);
    else
        renderList.push(
            ...(Object.values(gameObject) as GameObjects.GameObject[])
        );
    return gameObject;
};
export const bindGameObject_2 = (gameObject: any, handler: Function) => {
    if (gameObject instanceof GameObjects.GameObject)
        (gameObject as GameObjects.GameObject).addToDisplayList();
    else handler(...(Object.values(gameObject) as GameObjects.GameObject[]));
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

