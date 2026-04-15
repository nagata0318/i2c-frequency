//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace I2CEx {

    //% block="I2C周波数を %freq に設定"
    export function setFrequency(freq: I2CFreq): void {
        _setFrequency(freq)
    }

    //% block="I2C周波数を %hz Hz に設定"
    export function setFrequencyRaw(hz: number): void {
        _setFrequency(hz)
    }

    //% shim=I2CEx::_setFrequency
    declare function _setFrequency(hz: number): void;

    export enum I2CFreq {
        //% block="100kHz"
        F100K = 100000,
        //% block="400kHz"
        F400K = 400000
    }
}
