import { GameObjects } from "phaser";

export const bindGameObject = (
    variable: any,
    gameObject: object,
    renderList: Array<GameObjects.GameObject>
) => {
    variable = gameObject;
    if (gameObject instanceof GameObjects.GameObject)
        renderList.push(gameObject as GameObjects.GameObject);
    else renderList.push(...Object.values(gameObject));
};
