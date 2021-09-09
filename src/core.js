import * as PIXI from 'pixi.js'


export default class MyTicker extends PIXI.Ticker {
    constructor() {
        super()
    }
    executeWithDelay(delay, handler) {
        let t = +new Date()

        let onPassed = () => {
            let passed = +new Date() -t

            if (passed >= delay) {
                handler()
                this.remove(onPassed)
            }
        }

        this.add(onPassed)
    }
}