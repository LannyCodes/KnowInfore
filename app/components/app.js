/**
 * Created by Lanny on 2017/7/26.
 */
import React, {Component} from 'react';
import Navigation from '../base/navigation/StackConfig'
import {USER_KEY, SPLASH_TIME} from '../constants/ContextConst'
import {resetNavigation, globalUser} from '../utils/Common'
let route = '';
class App extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        let self = this;
    }

    componentDidMount() {
        let self = this;
        console.log(self._navigation._navigation);
        global._CONTEXT_ = this._navigation._navigation;

        storage.load({
            key: USER_KEY.USERSTAGE_KEY,
        }).then(data => {
            if (!isNull(data.userToken)) {

                route = 'TabHome'
            }else{
                route = 'Login'
            }
            resetNavigation(self._navigation._navigation, route);
        }).catch(err =>{
            log('BridgeScene 捕获到一个问题:', err);
            route = 'Login';
            resetNavigation(self._navigation._navigation, route);
        })
    }

    render() {
        return (
            <Navigation
                ref={(navigation) => {
                    this._navigation = navigation
                }}/>
        )
    }
}

export default App;