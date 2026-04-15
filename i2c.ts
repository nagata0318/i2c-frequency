//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace I2CEx {

    /**
     * I2C周波数を設定（安全版）
     */
    //% block="I2C周波数を %freq に設定"
    export function setFrequency(freq: I2CFreq): void {
        setFrequencyRaw(freq)
    }

    /**
     * 任意周波数設定（Hz）
     */
    //% block="I2C周波数を %hz Hz に設定"
    export function setFrequencyRaw(hz: number): void {

        // ---- 入力正規化 ----
        let f = normalizeFrequency(hz)

        // ---- 最優先：MakeCode標準API ----
        if ((pins as any).i2cFrequency) {
            // 安全に呼び出し
            (pins as any).i2cFrequency(f)
            return
        }

        // ---- フォールバック：何もしない ----
        // （未対応環境）
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
