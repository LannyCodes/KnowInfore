/**
 * Created by Lanny on 2017/7/26.
 */
import {StackNavigator} from 'react-navigation';
//tab界面
import TabConfig from './TabConfig'
import Bridge from '../../components/pages/bridge'
import LoginScene from '../../components/pages/login'
import MessageDetailScene from '../../components/pages/message/MessageDetail'
import SearchMessageScene from '../../components/pages/message/search'
import ModifyPersonInfoScene from '../../components/pages/personal/ModifyPersonInfoScene'
//备货
import StockManageScene from '../../components/pages/stockmanage'
import StockDetailScene from '../../components/pages/stockmanage/stockdetail'
import StockReceiptScene from '../../components/pages/stockmanage/stockdetail/StockReceiptScene'
import StockConfirmScene from '../../components/pages/stockmanage/stockconfirm/StockConfirmScene'
import SearchStockScene from '../../components/pages/stockmanage/search'
let CommonScene = {
    Bridge: {
        screen: Bridge,
        navigationOptions: {
            header: null
        }
    }
};
let Tab = {
    TabHome: {
        screen: TabConfig
    }
};

const Login = {
    Login: {
        screen: LoginScene,
        navigationOptions: {
            header: null
        }
    }
};

const Message = {
    MessageDetail: {
        screen: MessageDetailScene,
        navigationOptions: {
            header: null
        }
    },
    SearchMessage: {
        screen: SearchMessageScene,
        navigationOptions: {
            header: null
        },
    },
};

const Person = {
    ModifyPersonInfo: {
        screen: ModifyPersonInfoScene,
        navigationOptions: {
            header: null
        }
    },
};

const StockManage = {
    StockConfirm: {
        screen: StockConfirmScene,
        navigationOptions: {
            header: null
        }
    },
    StockManage: {
        screen: StockManageScene,
        navigationOptions: {
            header: null
        }
    },
    StockDetail: {
        screen: StockDetailScene,
        navigationOptions: {
            header: null
        }
    },
    StockReceipt: {
        screen: StockReceiptScene,
        navigationOptions: {
            header: null
        }
    },
    SearchStock: {  //采购管理搜索页面
        screen: SearchStockScene,
        navigationOptions: {
            header: null
        }
    },
};

const Navigator = StackNavigator({
    ...CommonScene,
    ...Tab,
    ...Login,
    ...Message,
    ...Person,
    ...StockManage
});

export default Navigator;