/**
 * Created by Lanny on 2017/7/28.
 */
import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Modal,
    Dimensions,
} from 'react-native'

/**
 * 通过Model写的模板。
 * 可以在里面添加想要的效果，比如Dialog
 * defaultClickClose属性设置为false，则点击不可消失，要调用closeModal才可以消失。
 */

export default class OverlayContainer extends Component {
    static propTypes = {
        defaultClickClose: React.PropTypes.bool,
    };

    static defaultProps = {
        defaultClickClose: true,
    };

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    showModal() {
        this.setState({
            modalVisible: true,
        })
    }

    closeModal() {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <Modal
                visible={this.state.modalVisible}
                //显示是的动画默认none
                //从下面向上滑动slide
                //慢慢显示fade
                animationType={'fade'}
                //是否透明默认是不透明 false
                transparent={true}
                //关闭时调用
                onRequestClose={() => this.closeModal()}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => {
                        if (this.props.defaultClickClose) {
                            if (this.state.modalVisible) {
                                this.closeModal();
                            }
                        }
                    }}>
                        <View style={styles.overlay}/>
                    </TouchableWithoutFeedback>
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(00,00,00,0)'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#000',
        opacity: 0.5
    }
});

