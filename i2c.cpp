#include "pxt.h"

using namespace pxt;

namespace I2CEx {

    //% shim=I2CEx::_setFrequency
    void _setFrequency(int hz) {

        if (hz <= 100000) {
            hz = 100000;
        } else if (hz <= 250000) {
            hz = 250000;
        } else {
            hz = 400000;
        }

        uBit.i2c.setFrequency(hz);
    }
}
