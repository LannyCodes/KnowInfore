/**
 * Created by Lanny on 2017/7/27.
 */
import {USER_KEY} from '../constants/ContextConst'
import Toast from 'react-native-root-toast'
import {resetNavigation} from '../utils/Common'

const TOKEN_ERROR = '422';
export function interceptor(code) {
    if (code === TOKEN_ERROR) {
        Toast.show('登录超时，请重新登录。', {
            duration: Toast.durations.LONG,
            position: -100
        });
        storage.remove({
            key: USER_KEY.USERSTAGE_KEY,
        });
        global._USERNAME_ = '';
        global._USERID_ = '';
        global._USERTOKEN_ = '';
        global._SHOW_SAFE_ = false;
        global._SHOW_PROCUREMENT_ = false; //采购的权限控制
        global._SHOW_PROBUGETDATA_ = false;
        try {
            resetNavigation(_CONTEXT_, 'Login');
        } catch (e) {
            return true;
        }
        return true;
    } else {
        return false;
    }
}