/**
 * Created by Lanny on 2017/7/26.
 */
import React, {
    Component
} from 'react'
import App from './components/app';
import {init} from "./base/def/init"
import {Provider} from 'react-redux';
import store from './store/configStore';

class RootScene extends Component {
    constructor(props) {
        super(props);
        this.state = {store: store};
        // 这里执行初始化global，后续其他初始化方法也放在init，通过promise来处理异步的成功失败的逻辑
        init().then(() => log('init complete'))
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App/>
            </Provider>
        )
    }
}

export default RootScene;