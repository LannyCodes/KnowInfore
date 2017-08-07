/** * Created by InforeXuan on 2017/5/17. */
const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');
const scale = width / 375.0;
export function resize2Dp(style: Object) {
    if (style.width !== undefined && typeof style.width === "number") {
        style.width *= scale
    }
    if (style.height !== undefined && typeof style.height === "number") {
        style.height *= scale
    }
    if (style.margin !== undefined && typeof style.margin === "number") {
        style.margin *= scale
    }
    if (style.marginTop !== undefined && typeof style.marginTop === "number") {
        style.marginTop *= scale
    }
    if (style.marginRight !== undefined && typeof style.marginRight === "number") {
        style.marginRight *= scale
    }
    if (style.marginLeft !== undefined && typeof style.marginLeft === "number") {
        style.marginLeft *= scale
    }
    if (style.marginBottom !== undefined && typeof style.marginBottom === "number") {
        style.marginBottom *= scale
    }
    if (style.padding !== undefined && typeof style.padding === "number") {
        style.padding *= scale
    }
    if (style.paddingLeft !== undefined && typeof style.paddingLeft === "number") {
        style.paddingLeft *= scale
    }
    if (style.paddingTop !== undefined && typeof style.paddingTop === "number") {
        style.paddingTop *= scale
    }
    if (style.paddingRight !== undefined && typeof style.paddingRight === "number") {
        style.paddingRight *= scale
    }
    if (style.paddingBottom !== undefined && typeof style.paddingBottom === "number") {
        style.paddingBottom *= scale
    }
    if (style.fontSize !== undefined && typeof style.fontSize === "number") {
        style.fontSize *= scale
    }
    if (style.borderRadius !== undefined && typeof style.borderRadius === "number") {
        style.borderRadius *= scale
    }
    if (style.borderWidth !== undefined && typeof style.borderWidth === "number") {
        style.borderWidth *= scale
    }
    if (style.lineHeight !== undefined && typeof style.lineHeight === "number") {
        style.lineHeight *= scale
    }
}