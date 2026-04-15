#include "pxt.h"

namespace I2CEx {

    void _setFrequency(int hz) {

        if (hz <= 100000) hz = 100000;
        else if (hz <= 400000) hz = 400000;
        else hz = 400000;

        // CODAL経由（環境依存だが標準ルート）
        uBit.i2c.setFrequency(hz);
    }
}
