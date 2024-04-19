import { GameObjects, Scene } from "phaser";

// export const bindGameObject_re = (
//     gameObject: any,
//     renderList?: Array<GameObjects.GameObject>
// ) => {
//     if (!renderList) return gameObject;
//     if (gameObject instanceof GameObjects.GameObject)
//         renderList.push(gameObject as GameObjects.GameObject);
//     else
//         renderList.push(
//             ...(Object.values(gameObject) as GameObjects.GameObject[])
//         );
//     return gameObject;
// };
export const bindGameObject = (gameObject: any) => {
    if (gameObject instanceof GameObjects.GameObject)
        (gameObject as GameObjects.GameObject).addToDisplayList();
    else
        Object.values(gameObject).forEach((v) => {
            (v as GameObjects.GameObject).addToDisplayList();
        });
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

