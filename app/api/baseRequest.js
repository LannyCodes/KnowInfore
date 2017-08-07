/**
 * Created by Lanny on 2017/7/26.
 */
import AppConst from '../constants/ContextConst';
import api from './api'
import Toast from 'react-native-root-toast'
import {interceptor} from './interceptor'
class BaseRequest {

    constructor(body) {
        if (!body) {
            body = {};
        }
        let userId;
        if (!body.hasOwnProperty('userId')) {
            if (_USERID_) {
                userId = _USERID_;
                Object.assign(body, {
                    userId: userId
                })
            }
        }
        Object.assign(body, {
            // body里添加请求参数（默认每条消息服务器提供的）
            deviceID: AppConst.deviceID,
            token: _USERTOKEN_ ? _USERTOKEN_ : '',
        });
        this.body = body;
    }

    requestUrl() {
        throw {message: 'function requestUrl must be override'};
    }

    async start(successCallback, failCallback, handleError) {
        let self = this;
        let url = this.requestUrl();
        let body = this.body;
        let formData = new FormData();
        for (let prop in body) {
            if (Array.isArray(body[prop])) {
                for (let value of body[prop]) {
                    formData.append(prop, value);
                }
            } else {
                formData.append(prop, body[prop]);
            }
        }
        let headers;
        if (_USERTOKEN_) {
            headers = {'Access-Token': _USERTOKEN_};
        } else {
            headers = {};
        }
        api(AppConst.WebServerUrl, headers).post(url, formData)
            .then((response) => {
                log(response);
                if (response.ok) {
                    if (response.status) {
                        if (response.status === 200) {
                            if (response.data.code === '0' || response.data.code === 0) {
                                self.handleResponse(response.data, successCallback);
                            } else {
                                failCallback && failCallback(response.data.message);
                                if (response.data.message) {
                                    Toast.show(response.data.message, {
                                        duration: Toast.durations.LONG,
                                        position: -100
                                    })
                                }
                            }
                        } else if ('NETWORK_ERROR' === response.problem) {
                            this._handleFail(failCallback, response, handleError);
                        }
                    } else {
                        this._handleFail(failCallback, response, handleError);
                    }
                } else {
                    if (response.data && response.data.code) {
                        if (!interceptor(response.data.code)) {
                            this._handleFail(failCallback, response, handleError);
                        }
                    } else {
                        this._handleFail(failCallback, response, handleError);
                    }
                }
            })

    }

    handleResponse(responseJson, successCallback) {
        if (!responseJson) {
            return;
        }
        if (responseJson.code === '0' || responseJson.code === 0) {
            successCallback(responseJson.body);
        }
    }

    _handleFail(failCallback, response, handleError) {
        if (handleError) {
            handleError(response.problem);
            return;
        }
        Toast.show('获取数据失败', {
            duration: Toast.durations.LONG,
            position: -100
        });
        failCallback && failCallback(response.problem);
    }
}

export default BaseRequest;