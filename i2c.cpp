#include "pxt.h"

namespace I2CEx {

    // MakeCode内部APIを利用
    // pins.i2cFrequency() に相当
    void _setFrequency(int hz) {

        // 安全制限
        if (hz <= 100000) {
            hz = 100000;
        } else {
            hz = 400000;
        }

        // ★ ここが重要 ★
        // MakeCode公式経路を呼ぶ
        pxt::i2cFrequency(hz);
    }
}
