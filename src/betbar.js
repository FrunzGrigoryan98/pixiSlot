import * as PIXI from 'pixi.js'
export default class BetBar extends PIXI.Container {
    constructor() {
        super()


    }
    createdBetBar(graphics, mainStage, x, y, b, a, text,xx,yy) {
        const basicText = new PIXI.Text(`${text}`);
        basicText.x = xx
        basicText.y = yy
        graphics.lineStyle(3, 0x16106a, 1);
        graphics.beginFill(0xf7e3d4, 1);
        graphics.drawEllipse(x, y, b, a);
        graphics.endFill();
        graphics.interactive = true
        graphics.buttonMode = true
        graphics.addChild(basicText)
        mainStage.addChild(graphics);
    }

    minBar = (d ,x, y) => {
        const min = new PIXI.Graphics()
        const basicText = new PIXI.Text(`-`);
        basicText.x = x
        basicText.y = y
        min.lineStyle(3, 0x16106a, 1);
        min.beginFill(0xf7e3d4, 1);
        min.drawEllipse(550, 830, 50, 30);
        min.endFill();
        min.interactive = true
        min.buttonMode = true
        min.addChild(basicText)
        d.addChild(min);
    }


}