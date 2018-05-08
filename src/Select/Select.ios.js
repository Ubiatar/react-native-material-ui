import React, { Component } from 'react';

import { string, array, func } from 'prop-types';

import { View, TouchableOpacity, ActionSheetIOS, StyleSheet } from 'react-native';
import Typography from "../Typography/Typography";


class Select extends Component {

    /**
     * labelText: label on top left of the selector
     * options: array of object with value and label fields
     * **/

    static propTypes = {
        labelText: string,
        options: array,
        onValueChange: func,
        selectedValue: string,
        placeHolder: string,
        cancelLabel: string,
        type: string
    };
    static defaultProps = {
        options: [],
        onValueChange: () => {},
        type: 'dark'
    }

    constructor (props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress () {
        const {labelText, onValueChange, cancelLabel} = this.props;
        let options = Array.from(this.props.options);
        //@TODO is this a good idea?
        options.push({value: '', label: cancelLabel});

        ActionSheetIOS.showActionSheetWithOptions({
            title: labelText,
            cancelButtonIndex: options.length - 1,
            options: options.map(opt => opt.label),
        }, index => onValueChange(options[index].value))
    }

    render () {
        const {labelText, selectedValue, options, placeHolder, type} = this.props;
        let selected = options.find(el => el.value === selectedValue)
        let label = selected ? selected.label : placeHolder;

        return (
            <View>
                <Typography style={s.textContainer} type={type !== 'dark' ? 'darkText' : 'text'}>
                    {labelText}
                </Typography>
                <TouchableOpacity onPress={this.onButtonPress}>
                    <View style={type === 'dark' ? s.valueContainerDark : s.valueContainer}>
                        <Typography style={{marginLeft: 12}} type={type !== 'dark' ? 'darkText' : 'text'}>
                            {label}
                        </Typography>
                    </View>
                </TouchableOpacity>
            </View>
        );

    }
}

const s = StyleSheet.create({
    valueContainerDark: {
        padding: 0,
        height: 44,
        borderRadius: 4,
        backgroundColor: 'rgba(29, 28, 50, 0.4)',
        justifyContent: 'space-around',
    },
    valueContainer: {
        padding: 0,
        height: 44,
        borderRadius: 4,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
    },
    textContainer: {
        paddingLeft: 12,
        paddingBottom: 5,
        fontSize: 12
    }
});


export default Select;
