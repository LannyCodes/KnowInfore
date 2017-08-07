/**
 * Created by Lanny on 2017/8/7.
 */
import React, {Component} from 'react';
import {View, TextInput, DeviceEventEmitter} from 'react-native';
import {USER_KEY} from '../../../constants/ContextConst'
import Toast from 'react-native-root-toast'
import TitleBar from '../../widget/TitleBar'
import DialogBox from '../../widget/DialogBox'
import {isTel, isMail, isDeskTel} from '../../../utils/Common'
import {UpdateUserInfoRequest} from '../../../api/personal/PersonalRequests'
const StyleSheet = require('../../../base/StyleSheet')
let title = '修改信息';
let placeHolder = '请输入修改信息';
let keyboard = 'default';
let inputInfo = '';
let maxLength = 11;
let modifyValues = '';
class ModifyPersonInfoScene extends Component {

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        padding: 3,
        backgroundColor: 'white'
    },
    input: {
        textAlign: 'left',
        height: 40,
        fontSize: 16,
        color: '#333333'
    }
});

export default ModifyPersonInfoScene;
