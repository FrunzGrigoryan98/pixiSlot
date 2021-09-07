import * as PIXI from 'pixi.js'
import gsap from 'gsap'
import MyTicker from './core'
import Board from './board'
import BetBar from './betbar'
import { drawSlotLines, addSpinMask, StopSpinBtnCreator } from './graphic'
import {shuffle} from './helpers'

const renderer = new PIXI.Renderer({
    width: 1280,
    height: 900,
})

renderer.backgroundColor = 0x03FFBA;


function resize() {
    if (renderer.view.width === 1280) {
        renderer.view.style.width = window.innerWidth + 'px';
    }
}
window.onresize = resize;
document.body.appendChild(renderer.view);

let ticker1 = new MyTicker()

ticker1.start()

const mainStage = new PIXI.Container()
const stage = new PIXI.Container()
mainStage.addChild(stage)
let board = new Board();


stage.addChild(board)


const graphicBetBar = new PIXI.Graphics()
// graphics.drawEllipse(200, 850, 80, 50);
const betbar = new BetBar()

betbar.createdBetBar(graphicBetBar, mainStage, 200, 830, 80, 50, "BALANCE", 140, 800)
betbar.createdBetBar(graphicBetBar, mainStage, 400, 830, 50, 30, "MIN", 375, 800)
betbar.createdBetBar(graphicBetBar, mainStage, 900, 830, 50, 30, "MAX", 870, 800)
betbar.createdBetBar(graphicBetBar, mainStage, 1044, 830, 80, 50, "WIN", 1025, 800)


betbar.createdBetBar(graphicBetBar, mainStage, 550, 830, 50, 30, "-", 530, 800)
betbar.createdBetBar(graphicBetBar, mainStage, 750, 830, 50, 30, "+", 750, 800)

betbar.createdBetBar(graphicBetBar, mainStage, 650, 830, 90, 40, "BET", 620, 800)




stage.addChild(betbar)

addSpinMask(stage, 100, 90, 1100, 600)

console.log(board);


board.renderReels([[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]])
stage.addChild(board)



 addSpinMask(stage, 100, 210, 1100,480)



// function updateY () {
//     let x ;
//     for (let i = 0; i < dudesCord.length; i++) {
//         continue;
//     x = dudesCord[i].y
//     dudesCord[i].x = 180
//     //  dudesCord[i].anchor.set(0.5, 0.5); 
//         let deltaY = 2;
//        console.log(deltaY);
//      if(dudesCord[i].y-850 > renderer.view.height  ){
//          dudesCord[i].y = -100
//          dudesCord[i].x = 200

//      }else if (dudesCord[i].y < 0) {
//          deltaY = 3  
//      }     
//     //  dudesCord[i].y += 0
//      dudesCord[i].y += 2
//     // console.log(dudesCord[i].y, 'y');
//     } 
// } 
drawSlotLines(stage, mainStage)

const spin = new PIXI.Sprite.from('img/spin.png')
const graphics1 = new PIXI.Graphics();
StopSpinBtnCreator(renderer, mainStage, spin, graphics1)


function startSpin() {
    console.log("start spin")
    board.startSpin()
    spin.visible = false
    graphics1.visible = true
}


function stopSpin() {
    spin.visible = true
    graphics1.visible = false
    board.stopSpin()
}

let spinning = false
function handleSpinButtonClick() {
    spinning = !spinning
    spinning ? startSpin()
        : stopSpin()
    spin.visible = !spinning
    graphics1.visible = spinning

}

const ticker = new PIXI.Ticker()
spin.on('pointerdown', handleSpinButtonClick)
graphics1.on('pointerdown', handleSpinButtonClick)
ticker.start()


ticker.add(loop1)
function loop1() {
    renderer.render(mainStage);
}









