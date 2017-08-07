/**
 * Created by Lanny on 2017/7/26.
 */
function log(msg, tag) {
    if (__DEV__) {
        tag ? console.log(msg, tag) : console.log(msg);
    }
}

/**
 * 判断字符串为空
 * @param str
 * @returns {boolean}
 */
function isNull(str) {
    return (str === null || str === undefined || str === '' || str === 'null')
}

export {log, isNull}