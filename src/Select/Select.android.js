import React, { Component } from 'react';

import { string, array, func } from 'prop-types';

import { View, Picker, StyleSheet } from 'react-native';
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

        let initialItems = Array.from(props.options);
        initialItems.splice(0, 0, {value: '', label: props.placeHolder});

        this.state = {
            items: initialItems
        }
    }

    componentWillReceiveProps (nextProps) {
        const {options, placeHolder} = nextProps

        let items = Array.from(options);
        items.splice(0, 0, {value: '', label: placeHolder});

        this.setState({items: items})
    }

    render () {
        const {labelText, selectedValue, type, onValueChange} = this.props;
        const {items} = this.state

        return (
            <View>
                <Typography style={s.textContainer} type={type !== 'dark' ? 'darkText' : 'text'}>
                    {labelText}
                </Typography>
                <View style={type === 'dark' ? s.valueContainerDark : s.valueContainer}>
                    <Picker
                        onValueChange={onValueChange}
                        selectedValue={selectedValue}
                        mode='dialog'
                        style={{color: 'white'}}
                    >
                        {
                            items.map((item, index) =>
                                <Picker.Item
                                    value={item.value}
                                    label={item.label}
                                    key={index}
                                />)
                        }
                    </Picker>
                </View>
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
