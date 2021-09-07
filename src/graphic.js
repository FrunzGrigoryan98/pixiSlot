import * as PIXI from 'pixi.js'


const mask = new PIXI.Graphics()


export function drawSlotLines(stage, mainStage) {
    mask.lineStyle(1, 0x00A964, 1);
    mask.drawRect(340, 40, 0, 1500);
    mask.endFill();

    mask.lineStyle(1, 0x00A964, 1);
    mask.drawRect(130, 40, 0, 1500);
    mask.endFill();

    mask.lineStyle(1, 0x00A964, 1);
    mask.drawRect(535, 40, 0, 1500);
    mask.endFill();

    mask.lineStyle(1, 0x00A964, 1);
    mask.drawRect(730, 40, 0, 1500);
    mask.endFill();

    mask.lineStyle(1, 0x00A964, 1);
    mask.drawRect(935, 40, 0, 1500);
    mask.endFill();

    mask.lineStyle(1, 0x00A964, 1);
    mask.drawRect(1130, 40, 0, 1500);
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
    mainStage.addChild(refn)

}


export function addSpinMask(iconsParent, x, y, width, height) {
    const mask = new PIXI.Graphics();
    mask.beginFill(0x00ffff);
    mask.drawRect(x, y, width, height);
    iconsParent.addChild(mask);
    iconsParent.mask = mask;
}



export function StopSpinBtnCreator(renderer, mainStage, spin, graphics1) {


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

    let text = 'Stop'

    graphics1.lineStyle(5, 0xFF0000);
    graphics1.beginFill(0xFC471F)
    graphics1.drawCircle(100, 250, 72);
    graphics1.x = renderer.view.width - 180
    graphics1.y = 390
    graphics1.interactive = true
    graphics1.buttonMode = true
    graphics1.visible = false
    mainStage.addChild(graphics1)
    const basicText = new PIXI.Text(`${text}`, stopStyle);
    basicText.x = 57
    basicText.y = 223
    graphics1.addChild(basicText)

}