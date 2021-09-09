import * as PIXI from 'pixi.js'
import gsap from 'gsap'
import Signal from './signal'
import MyTicker from './core/myTicker'
import { shuffle } from './helpers'

let ticker1 = new MyTicker

export default class Reel extends PIXI.Container {
    constructor(icons, x, y) {
        super()
        this.icons = icons;
        this.x = x;
        this.y = y;
        this.dudesCord = [];
        this.speed = 1;
        this.onBoardSpinEndSignal = new Signal();
        this._renderInitialState();
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
        this.dudesCord.forEach(dude => {          
            let deltaY = this.speed;
            if (dude.y - 210 > 720) {
                this._rotateIcons()
                // gsap.from(dude, { duration: 2.5, ease: "elastic.out(1, 0.3)", y: -500 })
                dude.y = -76
            } else if (dude.y < 0) {
                deltaY = 7
            }
            
            dude.y += deltaY
        })

        //         let deltaY = this.speed;
        //         this.y += deltaY;
        //         0
        //         if (this.y > 76) {
        //             this.y = -106
        //              this._rotateIcons()

        // } else if (this.y < 0) {
        //     deltaY = 1
        // }
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
        this.dudesCord.forEach(dude => {
            if (dude.y - 200 > 720) {
                dude.texture = PIXI.Texture.from(`img/${this._getNextIcon()}.png`)
            }
        })
    }
    _stopSpin() {
        // console.log("stop em linum ushacumov")
        this.dudesCord.forEach((dude,idx)=>{
            dude.y = idx * 162  
            gsap.from(dude, { duration: 2.5, ease: "elastic.out(1, 0.3)", y: -500 });
        })
        ticker1.remove(this.spining, this)
        this.y = 0
    }
}
ticker1.start();


