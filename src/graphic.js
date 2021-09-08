import { _ticker } from 'gsap/gsap-core';
import * as PIXI from 'pixi.js'
const ticker = new PIXI.Ticker()

const mask = new PIXI.Graphics()

export function drawSlotLines(stage, mainStage) {
    mask.lineStyle(3, 0xff0000, 1);
    mask.drawRect(340,0, 0, 2000);
    mask.endFill();

    mask.lineStyle(3, 0xff0000, 1);
    mask.drawRect(535, 0, 0, 2000);
    mask.endFill();

    mask.lineStyle(3, 0xff0000, 1);
    mask.drawRect(730, 0, 0, 2000);
    mask.endFill();

    mask.lineStyle(3, 0xff0000, 1);
    mask.drawRect(935, 0, 0, 2000);
    mask.endFill();


    stage.addChild(mask)
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#FFFFFF', '#00FF99'], // gradient
        stroke: '#4A1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
        lineJoin: 'round',
    });
    const refn = new PIXI.Text('FIRST SLOT', style)
    refn.x = 1280 / 2 - 110
    refn.y = 10


    mainStage.addChild(refn);

    refn.interactive = true
    refn.buttonMode = true

    refn.on('pointerdown', rotationText);

    function rotationText() {
        ticker.add(() => {
            if (refn.rotation <= 6.2) {
                refn.rotation += 0.1;
            }
            else { return 0; }
        })
        ticker.start()
    }
}

export function addSpinMask(iconsParent, x, y, width, height) {
    const mask = new PIXI.Graphics();
    mask.beginFill(0x03FFBA);
    mask.drawRect(x, y, width, height);
    iconsParent.addChild(mask);
    iconsParent.mask = mask;
}


export function StopSpinBtnCreator(renderer, mainStage, spin, graphics1) {
    const border = PIXI.Sprite.from('img/border.png')
    border.y = 4
    mainStage.addChild(border)
    spin.width = 150
    spin.height = 150
    spin.x = renderer.view.width - 155
    spin.y = renderer.view.height - 155
    spin.interactive = true
    spin.buttonMode = true
    mainStage.addChild(spin)


    const stopStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#FFFFFF', '#FFAA73'], // gradient
        stroke: '#4A1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
        lineJoin: 'round',
    });

    let text = 'Stop';
    graphics1.lineStyle(5, 0xFF0000);
    graphics1.beginFill(0xFC471F);
    graphics1.drawCircle(100, 250, 72);
    graphics1.x = renderer.view.width - 180;
    graphics1.y = 570;
    graphics1.interactive = true;
    graphics1.buttonMode = true;
    graphics1.visible = false;
    mainStage.addChild(graphics1);
    const basicText = new PIXI.Text(`${text}`, stopStyle);
    basicText.x = 57;
    basicText.y = 223;
    graphics1.addChild(basicText);
}