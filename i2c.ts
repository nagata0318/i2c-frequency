//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace I2CEx {

    /**
     * I2C周波数を設定
     */
    //% block="I2C周波数を %freq に設定"
    export function setFrequency(freq: I2CFreq): void {
        setFrequencyRaw(freq)
    }

    /**
     * 任意周波数設定
     */
    //% block="I2C周波数を %hz Hz に設定"
    export function setFrequencyRaw(hz: number): void {

        let f = normalizeFrequency(hz)

        // ★ 直接呼び出し（これが唯一安定）
        pins.i2cFrequency(f)
    }

    /**
     * 周波数正規化
     */
    function normalizeFrequency(hz: number): number {

        if (hz <= 100000) return 100000
        if (hz <= 250000) return 250000

        return 400000
    }

    export enum I2CFreq {
        //% block="100kHz"
        F100K = 100000,
        //% block="250kHz"
        F250K = 250000,
        //% block="400kHz"
        F400K = 400000
    }
}
