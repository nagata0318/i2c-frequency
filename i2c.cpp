#include "pxt.h"

using namespace pxt;

namespace I2CEx {

    // CODALから直接取得（安全）
    CODAL_I2C* getI2C() {
        return uBit.i2c;
    }

    void _setFrequency(int hz) {

        // 安全制限
        if (hz <= 100000) {
            hz = 100000;
        } else if (hz <= 250000) {
            hz = 250000;
        } else {
            hz = 400000;
        }

        // I2C取得
        CODAL_I2C* i2c = getI2C();

        if (i2c) {
            i2c->setFrequency(hz);
        }
    }
}
