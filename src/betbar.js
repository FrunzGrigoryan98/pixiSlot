import * as PIXI from 'pixi.js'
export default class BetBar extends PIXI.Container {
    constructor(y, spin) {
        super()
        this.spin = spin
        this.y = y
        const graphicBetBar = new PIXI.Graphics()
        this.bet = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000, 10000, 20000];
        this.count = 10;
        this.idx = 0;
        this.price = 10000;
        this.addChild(graphicBetBar);
        this.createdBetBar(graphicBetBar, 200, 0, 80, 50, "BALANCE", 140, -5);
        this.createBalanceAmountField();
        this.createdBetBar(graphicBetBar, 1044, 0, 80, 50, "WIN", 1020, -10);
        this.minButton = this.createButton(550, 0, 50, 30, "-", 545, -15);
        this.maxButton = this.createButton(750, 0, 50, 30, "+", 745, -15);
        this.MaxButton = this.createButton(900, 0, 50, 30, "Max", 875, -15);
        this.MinButton = this.createButton(400, 0, 50, 30, "MIN", 375, -15);
        this.addChild(this.minButton);
        this.addChild(this.maxButton);
        this.createdBetBar(graphicBetBar, 650, 0, 90, 40, "BET", 625, 0);
        this.createBetAmountField();
        this._attachHandlers();
    };

    createBalanceAmountField() {
        const balancePrice = new PIXI.Text(`${this.price}`);
        balancePrice.x = 165;
        balancePrice.y = -35;
        this.addChild(balancePrice);
        Number(this.balancePrice = balancePrice);
    }
    balancevalue() {
            this.balancePrice.text -= this.betPrice.text;
    }

    _attachHandlers() {
        this.maxButton.on('click', this.betIncrement);
        this.minButton.on('click', this.betDecrement);
        this.MaxButton.on('click', this.maxvalue);
        this.MinButton.on('click', this.minvalue)
    };

    createBetAmountField() {
        const betPrice = new PIXI.Text(`${this.count}`);
        betPrice.x = 630;
        betPrice.y = -30;
        this.addChild(betPrice);
        this.betPrice = betPrice;
    };

    createdBetBar(graphics, x, y, b, a, text, xx, yy) {
        const basicText = new PIXI.Text(`${text}`);
        basicText.x = xx;
        basicText.y = yy;
        graphics.lineStyle(3, 0x16106a, 1);
        graphics.beginFill(0xf7e3d4, 1);
        graphics.drawEllipse(x, y, b, a);
        graphics.endFill();
        graphics.interactive = true;
        graphics.buttonMode = true;
        this.addChild(basicText);
    }

    createButton(x, y, b, a, text, xx, yy) {
        let min1 = new PIXI.Graphics();
        const basicText = new PIXI.Text(`${text}`);
        basicText.x = xx;
        basicText.y = yy;
        min1.lineStyle(3, 0x16106a, 1);
        min1.beginFill(0xaa9113, 1);
        min1.drawEllipse(x, y, b, a);
        min1.endFill();
        min1.interactive = true;
        min1.buttonMode = true;
        min1.addChild(basicText);
        this.addChild(min1);
        this.min1 = min1;
        return min1;
    }

    betIncrement = () => {
        let i = ++this.idx
        this.betPrice.text = this.bet[i]
        if (+this.betPrice.text === 20000) {
            this.MaxButton.interactive = false;
            this.MaxButton.alpha = 0.5;
            this.maxButton.interactive = false;
            this.maxButton.alpha = 0.5;
        }
        if (+this.betPrice.text > 10) {
            this.minButton.interactive = true;
            this.minButton.alpha = 1;
            this.MinButton.interactive = true;
            this.MinButton.alpha = 1;
        }
    };

    betDecrement = () => {
        this.spin.interactive = true
        this.spin.alpha = 1;
        let i = --this.idx
        this.betPrice.text = this.bet[i]
        if (+this.betPrice.text <= 10) {
            this.betPrice.text = 10
            this.MinButton.interactive = false;
            this.MinButton.alpha = 0.5;
            this.minButton.interactive = false;
            this.minButton.alpha = 0.5;
        } else {
            this.minButton.alpha = 1;
        }
        if (this.betPrice.text < 20000) {
            this.maxButton.interactive = true;
            this.maxButton.alpha = 1;
            this.MaxButton.interactive = true;
            this.MaxButton.alpha = 1;
        }
    }

    maxvalue = () => {
        this.spin.interactive = false
        this.spin.alpha = 0.5;
        this.MinButton.interactive = true;
        this.MinButton.alpha = 1;
        this.MaxButton.interactive = false;
        this.MaxButton.alpha = 0.5;
        this.minButton.interactive = true;
        this.minButton.alpha = 1;
        this.betPrice.text = 20000;
        this.maxButton.interactive = false;
        this.maxButton.alpha = 0.5;
    }

    minvalue = () => {
        this.spin.interactive = true
        this.spin.alpha = 1;
        this.MinButton.interactive = false;
        this.MinButton.alpha = 0.5;
        this.MaxButton.interactive = true;
        this.MaxButton.alpha = 1;
        this.maxButton.interactive = true;
        this.maxButton.alpha = 1;
        this.betPrice.text = 10;
        this.minButton.interactive = false;
        this.minButton.alpha = 0.5;
    }
}
