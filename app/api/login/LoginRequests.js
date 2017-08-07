/**
 * Created by Lanny on 2017/7/27.
 */
import BaseRequest from '../baseRequest'
import Urls from '../../constants/Urls'

class LoginRequest extends BaseRequest {
    requestUrl() {
        return Urls.login.userLogin
    }
}

class GetValidateCodeRequest extends BaseRequest {
    requestUrl() {
        return Urls.login.getValidateCode
    }
}

/**
 * 验证OTP
 */
class VertifyOTPRequest extends BaseRequest {
    requestUrl() {
        return Urls.login.verifyOtp
    }
}

/**
 * 修改密码
 */
class ModifyPwdRequest extends BaseRequest {
    requestUrl() {
        return Urls.login.modifyPwd
    }
}

export {LoginRequest, GetValidateCodeRequest, VertifyOTPRequest, ModifyPwdRequest};

