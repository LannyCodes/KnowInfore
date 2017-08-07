/**
 * Created by Lanny on 2017/7/27.
 */
const Urls = {
    login: {
        userLogin: '/infore-pro-manager/app/Login/checkLogin', //登陆 Y
        getValidateCode: '/infore-pro-manager/app/loginValidate/getValidateCode',//手机验证 Y
        verifyOtp: '/infore-pro-manager/app/loginValidate/verifyOtp',//验证码校验 Y
        modifyPwd: '/infore-pro-manager/app/loginValidate/changePassword', //修改密码 Y
    },
    msg: {
        getInforeMessageList: '/infore-pro-manager/app/message/findMyMessage', //获取消息 Y
        updateMessageStatus: '/infore-pro-manager/app/message/updateMessageStatus2Read',//更新消息数量
        updateMessageStatus2Done: '/infore-pro-manager/app/message/updateMessageStatus2Done',//代办 任务7、8调用这个接口
        deleteMessageByStatus: '/infore-pro-manager/app/message/deleteMessage',//更新消息数量
        findNewMessageCnt: '/infore-pro-manager/app/message/findNewMessageCnt',//查询未读消息总数
    },
    personal: {
        updateUserInfo: '/infore-pro-manager/app/updateUserInfo',//修改个人信息
        updateUserHeadImg: '/infore-pro-manager/app/updateUserHeadImg',//修改头像
    },
};

export default Urls;
