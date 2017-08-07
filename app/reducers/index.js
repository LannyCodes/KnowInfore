/**
 * Created by Lanny on 2017/7/28.
 */
import {combineReducers} from 'redux';
import message from './message'
import questionback from './questionback'
import approval from './approval'
import paymentDetail from './payment'
let MainReducer = combineReducers({
    message: message,
    questionBackPersons: questionback,
    approval: approval,
    paymentDetail: paymentDetail,
});

module.exports = MainReducer;