import * as PIXI from 'pixi.js'

export default class Signal {
    constructor() {
        this.subscriptions = []
    }
    on(handler) {
        this.subscriptions.push(handler)
    }
    off(handler) {
        let handlerIdx = this.subscriptions.findIndex(s => s === handler)
        if (handlerIdx > -1) {
            this.subscriptions.splice(handlerIdx, 1)
        }
    }
    trigger() {
        this.subscriptions.forEach(s => s())
    }
}