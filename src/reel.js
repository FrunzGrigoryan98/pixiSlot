import * as PIXI from 'pixi.js'
import Signal from './signal'
import MyTicker from './core'
import {shuffle} from './helpers'

let ticker1 = new MyTicker

export default class Reel extends PIXI.Container {
    constructor(icons, x, y, dudesCord) {
        super()
        this.icons = icons
        this.x = x;
        this.y = y;
        this.dudesCord = []

        console.log(icons);

        this.speed = 1;
        this.onBoardSpinEndSignal = new Signal()
        this._renderInitialState()
    }
    _renderInitialState() {
        this.icons.forEach((icon, idx) => {
            let icon1 = new PIXI.Sprite.from(`img/${icon}.png`)
            icon1.texture = PIXI.Texture.from(`img/${this._getNextIcon()}.png`)
            // console.log(icon1.texture);
            this.addChild(icon1)
            // console.log(this.children);
            icon1.y = idx * 162
            // console.log(this);
            this.dudesCord.push(icon1)
        })
    }
    spining() {
        this.dudesCord.forEach(dude=>{
            console.log(dude);
                    let deltaY = 1;
                 if(dude.y-210 > 720  ){
                   this._rotateIcons()
                         dude.y = -76
                        }else if (dude.y < 0) {
                            deltaY = 4  
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

        
       

       
        this.dudesCord.forEach(dude=>{
            if(dude.y-200 > 720  ){
            dude.texture = PIXI.Texture.from(`img/${this._getNextIcon()}.png`)
            }
        })

    }
    _stopSpin() {
        console.log("stop em linum ushacumov")
        ticker1.remove(this.spining, this)
        this.y = 0
        
    }

}

ticker1.start()


