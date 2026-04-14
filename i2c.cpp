#include "pxt.h"

namespace I2CEx {

    //% shim=I2CEx::_setFrequency
    void _setFrequency(int hz) {
        // NOTE:
        // MakeCodeではI2C周波数変更APIは公開されていないため
        // ここでは何もしないダミー実装にする

        // （デバッグ用に値だけ保持する場合）
        (void)hz;
    }
}
