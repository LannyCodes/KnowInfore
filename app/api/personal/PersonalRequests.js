/**
 * Created by Lanny on 2017/8/7.
 */
import BaseRequest from '../baseRequest'
import Urls from '../../constants/Urls'

/**
 * 修改个人信息
 */
class UpdateUserInfoRequest extends BaseRequest {
    requestUrl() {
        return Urls.personal.updateUserInfo
    }
}

/**
 * 修改头像
 */
class UpdateUserHeadImgRequest extends BaseRequest {
    requestUrl() {
        return Urls.personal.updateUserHeadImg
    }
}

export {UpdateUserInfoRequest, UpdateUserHeadImgRequest};