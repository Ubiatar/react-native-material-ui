import React, { Component } from 'react';

import { string, array, func, object } from 'prop-types';

import {
    View,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Picker,
    Modal, Dimensions
} from 'react-native';
import Button from '../Button'
import Typography from '../Typography/Typography'


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
        confirmLabel: string,
        containerStyle: object
    };
    static defaultProps = {
        options: [],
        onValueChange: () => {}
    }

    constructor (props) {
        super(props);

        this.state = {
            pickerOpen: false,
            val: ''
        }
    }

    render () {
        const {labelText, selectedValue, options, placeHolder, onValueChange, confirmLabel, containerStyle} = this.props;
        const {pickerOpen, val} = this.state
        let selected = options.find(el => el.value === selectedValue)
        let label = selected ? selected.label : placeHolder;

        return (
            <View>
                {labelText && <Typography style={s.textContainer} type='darkText'>
                    {labelText}
                </Typography>}
                <TouchableOpacity onPress={() => this.setState({pickerOpen: true})}>
                    <View style={[s.valueContainer, containerStyle]}>
                        <Typography type='darkText'>
                            {label}
                        </Typography>
                    </View>
                </TouchableOpacity>
                {
                    pickerOpen &&
                    <Modal isVisible={pickerOpen} transparent={true}
                           onDismiss={() => this.setState({pickerOpen: false})}
                           animationType='slide'
                    >
                        <TouchableWithoutFeedback onPress={() => this.setState({pickerOpen: false})}>
                            <View style={s.modalOutside}>
                                <TouchableWithoutFeedback onPress={() => {}}>
                                    <View style={s.modalInside}>
                                        <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-around'}}>
                                            <Typography style={{fontSize: 20}} type='darkText'>{labelText}</Typography>
                                        </View>
                                        <Picker
                                            selectedValue={val}
                                            style={{ height: 250, width: 250 }}
                                            onValueChange={value => this.setState({val: value})}
                                            itemStyle={{color: 'black'}}
                                        >
                                            <Picker.Item label={placeHolder} value='' key={0}/>
                                            {options.map((opt, index) => <Picker.Item label={opt.label} value={opt.value} key={index + 1}/>)}
                                        </Picker>
                                        <Button
                                            primary
                                            onPress={() => {
                                                onValueChange(val)
                                                this.setState({pickerOpen: false})
                                            }}
                                            text={confirmLabel}
                                            upperCase={false}
                                            style={{text: {fontSize: 18}}}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                }
            </View>
        );

    }
}

const s = StyleSheet.create({
    valueContainer: {
        padding: 0,
        height: 44,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textContainer: {
        paddingLeft: 12,
        paddingBottom: 5,
        fontSize: 12
    },
    modalOutside: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(29, 28, 50, 0.4)'
    },
    modalInside: {
        width: '90%',
        height: 350,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});


export default Select;
