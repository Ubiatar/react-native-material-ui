import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import TextField from './field';

const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};


export default class CustomTextField extends PureComponent {
    render() {
        // const otherProps = getStyles(this.props, this.context);
        return (
            <TextField
                {...StyleSheet.flatten(this.context.uiTheme.textfield)}
                {...this.props}
            />
        );
    }
}

CustomTextField.contextTypes = contextTypes;
