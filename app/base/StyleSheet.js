/**
 * Created by Lanny on 2017/7/26.
 */
'use strict';

import {StyleSheet, Platform} from 'react-native';
import {resize2Dp} from './commonFunc'
export function create(styles: Object): { [name: string]: number } {
    const platformStyles = {};
    Object.keys(styles).forEach((name) => {
        let {ios, android, ...style} = {...styles[name]};
        resize2Dp(style);
        if (ios && Platform.OS === 'ios') {
            style = {...style, ...ios};
        }
        if (android && Platform.OS === 'android') {
            style = {...style, ...android};
        }
        platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
}