import React, {Component} from 'react';

import {string, array, func, object} from 'prop-types';

import {View, Picker, StyleSheet} from 'react-native';


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
        cancelLabel: string
    };
    static defaultProps = {
        options: [],
        onValueChange: () => {
        }
    }

    constructor(props) {
        super(props);

        let initialItems = Array.from(props.options);
        initialItems.splice(0, 0, {value: '', label: props.placeHolder});

        this.state = {
            items: initialItems
        }
    }

    componentWillReceiveProps(nextProps) {
        const {options, placeHolder} = nextProps

        let items = Array.from(options);
        items.splice(0, 0, {value: '', label: placeHolder});

        this.setState({items: items})
    }

    render() {
        const {labelText, selectedValue, type, onValueChange} = this.props;
        const {items} = this.state
        console.log(selectedValue)
        return (
            <Picker
                onValueChange={onValueChange}
                selectedValue={selectedValue}
                mode='dialog'
                {...this.props}
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
        );

    }
}


export default Select;
