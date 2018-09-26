import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';

const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
}

function getStyles(props, context) {
    const { typography } = context.uiTheme;
    const { type } = props;
    const themeStyle = typography[type] ? typography[type] : {};
    return {
        ...StyleSheet.flatten(themeStyle),
        ...StyleSheet.flatten(props.style),
    };
}


export default class Typography extends PureComponent {
    static propTypes = {
        ...Text.propTypes,
        type: PropTypes.string,
        style: Text.propTypes.style,
    };
    static defaultProps = {
        type: 'text',
        style: {},
    };

    render() {
        const textStyle = getStyles(this.props, this.context)
        return (
            <Text
                {...this.props}
                style={textStyle}
            >
                {this.props.children}
            </Text>
        );
    }
}

Typography.contextTypes = contextTypes;
