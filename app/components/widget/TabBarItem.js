/**
 * Created by Lanny on 2017/7/26.
 */
import React, {Component} from 'react';
import {View, Image} from 'react-native';
const StyleSheet = require('../../base/StyleSheet');

class TabBarItem extends Component {
    static propTypes = {
        ...View.PropTypes,
        showMessage: React.PropTypes.bool,
    };

    static defaultProps = {
        showMessage: false,
    };

    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage;
        return (
            <View>
                <Image
                    resizeMode={'contain'}
                    source={this.props.focused
                        ? selectedImage
                        : this.props.normalImage}
                    style={styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 26,
        height: 24
    }
});

export default TabBarItem;
