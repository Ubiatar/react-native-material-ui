import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {
    Text
} from 'react-native'

const contextTypes = {
    uiTheme: PropTypes.object.isRequired
}

function getStyles(props, context) {
    const {palette, fontFamily, typography} = context.uiTheme;
    const {type} = props;

    if (type === 'title')
        return {
            textColor: palette.textColor,
            regularFont: fontFamily,
            fontSize: typography.appBar.fontSize
        }
    if (type === 'text')
        return {
            textColor: palette.textColor,
            regularFont: fontFamily
        }
    if (type === 'button')
        return {
            textColor: palette.primaryColor,
            regularFont: fontFamily
        }
    if (type === 'tutorial')
        return {
            textColor: palette.textColor,
            regularFont: fontFamily,
            fontSize: typography.subheading.fontSize
        }
    if (type === 'darkText')
        return {
            textColor: palette.darkPrimary,
            regularFont: fontFamily
        }
}


export default class Typography extends PureComponent {
    static propTypes = {
        ...Text.propTypes,
        type: PropTypes.string,
        style: Text.propTypes.style
    }

    static defaultProps = {
        type: 'text'
    }

    render() {

        const customStyles = getStyles(this.props, this.context)

        let textStyle = {
            color: customStyles.textColor,
            fontWeight: customStyles.fontWeight,
            fontFamily: customStyles.regularFont,
            fontSize: customStyles.fontSize
        }
        return <Text {...this.props} style={[textStyle, this.props.style]}>{this.props.children}</Text>
    }
}

Typography.contextTypes = contextTypes;
