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

const Navigator = StackNavigator({
    ...CommonScene,
    ...Tab,
    ...Login,
    ...Message,
    ...Person,
});

export default Navigator;