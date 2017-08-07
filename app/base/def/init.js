/**
 * Created by Lanny on 2017/7/26.
 */
import {log, isNull} from './global.function.def'
import {Platform, AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

export async function init() {
    console.disableYellowBox = true;
    let storage = new Storage({
        // 最大容量，默认值1000条数据循环存储
        size: 1000,

        // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
        // 如果不指定则数据只会保存在内存中，重启后即丢失
        storageBackend: AsyncStorage,

        // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
        defaultExpires: 1000 * 60,

        // 读写时在内存中缓存数据。默认启用。
        enableCache: true,
    });

    await function () {
        global._USERID_ = '';//初始化global userId
        global._USERTOKEN_ = '';//初始化global token
        global._SHOW_SAFE_ = '';//安全的权限控制初始化
        global._SHOW_PROCUREMENT_ = false;//采购的权限控制初始化
        global.log = log;
        global.isNull = isNull;
        global._IOS_ = (Platform.OS === 'ios');
        global._Android_ = (Platform.OS === 'android');
        global.storage = storage;
        //Loading转圈展示时间
        global._loading_ = 300;
        global._PAGESIZE_ = 10;
    }()
}