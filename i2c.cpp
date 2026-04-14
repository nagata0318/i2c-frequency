#include "pxt.h"

using namespace pxt;

// micro:bit内部I2Cインスタンス
extern CODAL_I2C i2c;

namespace I2CEx {

    // 周波数設定
    void _setFrequency(int hz) {
        // --- 安全制限 ---
        // Nordic仕様範囲外は丸める
        if (hz <= 100000) {
            hz = 100000;
        } else if (hz <= 250000) {
            hz = 250000;
        } else {
            hz = 400000;
        }

        // 周波数適用
        i2c.setFrequency(hz);
    }
}
