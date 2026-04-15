//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace I2CEx {

    /**
     * I2C周波数を設定
     */
    //% block="I2C周波数を %freq に設定"
    export function setFrequency(freq: I2CFreq): void {
        try {
            _setFrequency(freq)
        } catch {
            // Simulator では何もしない
        }
    }

    /**
     * 任意周波数設定（上級者向け）
     */
    //% block="I2C周波数を %hz Hz に設定"
    export function setFrequencyRaw(hz: number): void {
        try {
            _setFrequency(hz)
        } catch {
            // Simulator では何もしない
        }
    }

    // shim（JS実装なし、C++に直結）
    //% shim=I2CEx::_setFrequency
    declare function _setFrequency(hz: number): void;

    export enum I2CFreq {
        //% block="100kHz"
        F100K = 100000,
        //% block="400kHz"
        F400K = 400000
    }
}
