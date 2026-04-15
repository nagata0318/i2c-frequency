//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace I2CEx {

    //% block="I2C周波数を %freq に設定"
    export function setFrequency(freq: I2CFreq): void {
        __setFrequency(freq)
    }

    //% block="I2C周波数を %hz Hz に設定"
    export function setFrequencyRaw(hz: number): void {
        __setFrequency(hz)
    }

    // ⚠ shim は必ず “非公開・内部名” にする
    //% shim=I2CEx::__setFrequency
    function __setFrequency(hz: number): void {
        // simulator ではこの TS 実装が使われる（no-op）
    }

    export enum I2CFreq {
        //% block="100kHz"
        F100K = 100000,
        //% block="400kHz"
        F400K = 400000
    }
}
