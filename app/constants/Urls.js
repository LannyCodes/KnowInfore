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
    work: {
        queryOrgList: '/infore-pro-manager/app/dataAnalysis/queryOrgList', //查询当前用户所能看到的事业部列表
        queryProjetStaticsByOrg: '/infore-pro-manager/app/dataAnalysis/queryProjectStatisticsByOrg', //根据事业部查询项目信息
        getAppProbudgetData: '/infore-pro-manager/app/dataAnalysis/getAppProbudgetData', //根据用户ID查询本事业部项目预算统计数据
        getInforeTaskList: '/infore-pro-manager/app/message/findMyTask' //获取任务列表
    },
    projectManage: {
        getProjectManageList: '/infore-pro-manager/app/project/selectAll',//获取项目管理列表 Y
        getProjectPlanList: '/infore-pro-manager/app/project/getProjectGantt',//获取项目计划 Y
        getProjectDetail: '/infore-pro-manager/app/project/selectByPrimaryKey',//获取项目详情 Y
        getProjectMemberList: '/infore-pro-manager/app/project/getProjectUsers', //获取项目成员 Y
        getProjectFileList: '/infore-pro-manager/app/project/getProjectFiles', //获取项目文件 Y
        getProjectDynamicList: '/infore-pro-manager/app/getProjectDynamicList', //获取项目动态 N
        saveSecurityLog: '/infore-pro-manager/app/securityLog/saveSecurityLog', //新建项目安全日志
        getSecurityLogList: '/infore-pro-manager/app/securityLog/getSecurityLogList', //获取项目安全日志列表
        getQuestionDetailRequest: '/infore-pro-manager/app/problem/selectProjectProblemAllList',//获取问题详情
        getQuestionBackRequest: '/infore-pro-manager/app/problem/selectByAll',//获取问题反馈
        solveProblemRequest: '/infore-pro-manager/app/problem/updateStatus',//立即处理问题
        saveProblemRequest: '/infore-pro-manager/app/problem/saveProblem',//新建问题
        getProblemInfoRequest: '/infore-pro-manager/app/problem/getProblemInfo',//获取问题信息
        findTypeDictionary: '/infore-pro-manager/app/project/FindTypeDictionary',//获取项目筛选类型
        selectByPrimaryKeyHead: '/infore-pro-manager/app/project/selectByPrimaryKeyHead',//项目详情头部
        getProjectOverView: '/infore-pro-manager/app/project/getProjectOverView',//项目概况
    },
    stockManage: {
        getStockInfo: '/infore-pro-manager/app/procurement/findContractList', //获取采购管理信息 Y
        getStockDetail: '/infore-pro-manager/app/procurement/getProcurementDtoMapList', //获取采购管理详细信息 Y
        batchConfirm: '/infore-pro-manager/app/procurement/batchConfirm',//确认到货
    },
};

export default Urls;
