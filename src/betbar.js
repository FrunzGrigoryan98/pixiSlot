import * as PIXI from 'pixi.js'
const ticker2 = new PIXI.Ticker()
export default class BetBar extends PIXI.Container {
    constructor(y) {
        super()
        this.y = y
        const graphicBetBar = new PIXI.Graphics()
        this.bet = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000, 10000, 20000],
            this.count = 10
        this.addChild(graphicBetBar)
        this.createdBetBar(graphicBetBar, 200, 0, 80, 50, "BALANCE", 140, -10)
        this.createdBetBar(graphicBetBar, 400, 0, 50, 30, "MIN", 375, -10)
        this.createdBetBar(graphicBetBar, 900, 0, 50, 30, "MAX", 870, -10)
        this.createdBetBar(graphicBetBar, 1044, 0, 80, 50, "WIN", 1020, -10)
        this.minButton = this.createButton(550, 0, 50, 30, "+", 0, 0)
        this.maxButton = this.createButton(750, 0, 50, 30, "-", 525, -15)
        this.addChild(this.minButton)
        this.addChild(this.maxButton)
        this.createdBetBar(graphicBetBar, 750, 0, 50, 30, "+", 750, -15)
        this.createdBetBar(graphicBetBar, 650, 0, 90, 40, "BET", 620, 0)
        this.createBetAmountField()
        this._attachHandlers()
    }
    _attachHandlers() {
        this.minButton.on('click', this.betDecrement)
        this.maxButton.on('click', this.betIncrement)
    }
    createBetAmountField() {
        const betPrice = new PIXI.Text(`${this.count += 100}`);
        betPrice.x = 580
        betPrice.y = -30
        this.addChild(betPrice);
        this.betPrice = betPrice
    }
    createdBetBar(graphics, x, y, b, a, text, xx, yy) {
        const basicText = new PIXI.Text(`${text}`);
        basicText.x = xx
        basicText.y = yy
        graphics.lineStyle(3, 0x16106a, 1);
        graphics.beginFill(0xf7e3d4, 1);
        graphics.drawEllipse(x, y, b, a);
        graphics.endFill();
        // graphics.interactive = true
        // graphics.buttonMode = true
        this.addChild(basicText)

    }
    min(x, y, b, a, text, xx, yy) {
        let min1 = new PIXI.Graphics()
        const basicText = new PIXI.Text(`${text}`);
        basicText.x = xx
        basicText.y = yy
        min1.lineStyle(3, 0x16106a, 1);
        min1.beginFill(0xf7e3d4, 1);
        min1.drawEllipse(x, y, b, a);
        min1.endFill();
        min1.interactive = true
        min1.buttonMode = true
        min1.addChild(basicText)
        this.addChild(min1);
        this.min1 = min1;
    }

    createButton(x, y, b, a, text, xx, yy) {
        let min1 = new PIXI.Graphics()
        const basicText = new PIXI.Text(`${text}`);
        basicText.x = xx
        basicText.y = yy
        min1.lineStyle(3, 0x16106a, 1);
        min1.beginFill(0xf7e3d4, 1);
        min1.drawEllipse(x, y, b, a);
        min1.endFill();
        min1.interactive = true
        min1.buttonMode = true
        min1.addChild(basicText)
        this.addChild(min1);
        return min1
    }

    betIncrement = (x, y) => {
        this.betPrice.text += 123
        console.log(this.count);
    }

    betDecrement = (x, y) => {
        this.betPrice.text += 456
        console.log(this.count);
    }
}