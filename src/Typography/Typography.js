import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {
    Text
} from 'react-native'

const contextTypes = {
  uiTheme: PropTypes.object.isRequired
}

function getStyles(props, context) {
  const { palette, fontFamily, typography } = context.uiTheme;
  const { type } = props;

  console.log(type,context)
  if(type === 'title')
    return {
        textColor: palette.textColor,
        regularFont: fontFamily,
        fontSize: typography.appBar.fontSize
    }
  if(type === 'text')
    return {
        textColor: palette.textColor,
        regularFont: fontFamily
    }
   if(type === 'button')
    return {
        textColor: palette.primaryColor,
        regularFont: fontFamily
    }
}


export default class Typography extends PureComponent {
  static propTypes = {
      ...Text.propTypes,
      type: PropTypes.string,
      style: Text.propTypes.style
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
