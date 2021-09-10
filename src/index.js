import * as PIXI from 'pixi.js'
import MyTicker from './core/myTicker'
import Board from './board'
import BetBar from './betbar'
import { drawSlotLines, addSpinMask, StopSpinBtnCreator } from './graphic'
import { shuffle } from './helpers'

const renderer = new PIXI.Renderer({
    width: 1280,
    height: 900,
})

renderer.backgroundColor = 0x3652a6;


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

addSpinMask(stage, 100, 172, 1100, 500)
board.renderReels([[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]])
stage.addChild(board)


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
const betbar = new BetBar(800)
mainStage.addChild(betbar)

StopSpinBtnCreator(renderer, mainStage, spin, graphics1)
const betbar = new BetBar(800, spin)

mainStage.addChild(betbar)

 function startSpin() {
        board.startSpin()
        spin.visible = false
        graphics1.visible = true
        betbar.balancevalue()
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









