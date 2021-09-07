import * as PIXI from 'pixi.js'
import Signal from './signal'
import MyTicker from './core'

let ticker1 = new MyTicker

export default class Reel extends PIXI.Container {
    constructor(icons, x, y, dudesCord) {
        super()
        this.icons = icons
        this.x = x;
        this.y = y;
        this.dudesCord = []

        this.speed = 1;
        this.onBoardSpinEndSignal = new Signal()
        this._renderInitialState()
    }
    _renderInitialState() {
        this.icons.forEach((icon, idx) => {
            let icon1 = new PIXI.Sprite.from(`img/${icon}.png`)
            icon1.texture = PIXI.Texture.from(`img/${this._getNextIcon()}.png`)
            this.addChild(icon1)
            icon1.y = idx * 162

            this.dudesCord.push(icon1)
        })
    }
    spining() {
        let deltaY = this.speed;
        this.y += deltaY;

        if (this.y > 76) {
            this.y = -76
            this._rotateIcons()
        } else if (this.y < 0) {
            deltaY = 0
        }
    }
    spin() {
        console.log("spin")
        ticker1.add(this.spining, this)
    }
    stopSpin(delay) {
        ticker1.executeWithDelay(delay, this._stopSpin.bind(this))
    }
    _getNextIcon() {
        return Math.floor(Math.random() * 9) + 1
    }
    _rotateIcons() {
        

    }
    _stopSpin() {
        console.log("stop em linum ushacumov")
        ticker1.remove(this.spining, this)
        this.y = 0
    }

}

ticker1.start()
