import * as PIXI from 'pixi.js'
import Reel from './reel' 
import gsap from 'gsap'

const REEL_WIDTH = 200
export default class Board extends PIXI.Container {
    constructor() {
        super()
        this.x = 180
        this.y = 65
    }
    renderReels(reelIcons) {
        reelIcons.forEach((reelIcon, i) => {
            let ReelContainer = new Reel(reelIcon, i * REEL_WIDTH,0);
            ReelContainer.onBoardSpinEndSignal.on(() => {
                console.log("reel spin ended")
            })
            this.addChild(ReelContainer)
        })
    }
 
    startSpin() {
        this.children.forEach(reel => {
               reel.spin()
        })

    }

    stopSpin() {
        this.children.forEach(
            /**
             * 
             * @param {Reel} reel 
             * @param {Number} idx 
             */
            (reel, idx) => {
                reel.stopSpin(idx * 200)
                reel.onBoardSpinEndSignal.on(() => {
                    console.log("imacanq vor spin verjacav");

                })
            })

        this.children.forEach(reel =>{
            reel.dudesCord.forEach((dude,idx)=>{
                dude.y = idx * 162  
            })
        })
       
    }

}