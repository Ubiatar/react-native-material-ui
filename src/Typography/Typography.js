import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {
    Text
} from 'react-native'

const contextTypes = {
  uiTheme: PropTypes.object.isRequired
}

function getStyles(props, context) {
  const { palette, fontFamily } = context.uiTheme;

  return {
    textColor: palette.textColor,
    regularFont: fontFamily
  }
}


export default class Typography extends PureComponent {
  static propTypes = {
      ...Text.propTypes,
      style: Text.propTypes.style
  }

  render() {

      const customStyles = getStyles(this.props, this.context)

      let textStyle = {
        color: customStyles.textColor,
        fontFamily: customStyles.regularFont
      }
      return <Text {...this.props} style={[textStyle, this.props.style]}>{this.props.children}</Text>
  }
}

Typography.contextTypes = contextTypes;
