import * as PIXI from 'pixi.js'
import gsap from 'gsap'
import MyTicker from './core'
import Board from './board'
import BetBar from './betbar'
import { drawSlotLines, addSpinMask, StopSpinBtnCreator } from './graphic'

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
board.renderReels([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]])
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
console.log(mainStage);
spin.on('pointerdown', handleSpinButtonClick)
graphics1.on('pointerdown', handleSpinButtonClick)
ticker.start()

ticker.add(loop1)
function loop1() {
    renderer.render(mainStage);
}









