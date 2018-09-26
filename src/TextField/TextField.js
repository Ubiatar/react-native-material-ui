import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { TextField } from 'react-native-material-textfield';

const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
}


export default class CustomTextField extends PureComponent {
    static propTypes = {
        ...TextField.propTypes,
    };

    render() {
        return (
            <TextField
                {...this.context.uiTheme.textfield}
                {...this.props}
            />
        );
    }
}

CustomTextField.contextTypes = contextTypes;
