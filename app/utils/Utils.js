/**
 * Created by Lanny on 2017/8/7.
 */
let lastClickTime = 0;
class Utils {
    static isFastClick() {
        let timeNow = new Date().getTime();
        if (timeNow - lastClickTime < 1000) {
            return true;
        }
        lastClickTime = timeNow;
        return false;
    }
}

export default Utils;