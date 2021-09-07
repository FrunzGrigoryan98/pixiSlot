import * as PIXI from 'pixi.js'
import Reel from './reel' 

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

        // this.children.forEach(reel =>{
        //     // reel.dudesCord.forEach((dude, idx)=>{
        //     //     // dude.y = idx *160

        //     //     // gsap.from(dude, { duration: 2.5, ease: "elastic.out(1, 0.3)", y: 0});


        //     // })
        //     // reel.icons.forEach(iconNumber => {
        //     //     console.log(iconNumber);

        //     // });

        //     console.log(reel.children[1].y, 'children.y');


        //         console.log(reel.icons[1], 'icons');

        //         if (reel.children[1].y==200) {
        //             console.log('fjhfd');
        //         }




        //     })

        // ticker.remove(startSpin)


    }

}