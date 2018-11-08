import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import {Slider as ReactSlider} from 'react-native'
import {TextField, Typography} from '../index'
import {Validator, validationStates} from 'react-native-joi-form-decorator'
import Joi from 'react-native-joi'

const contextTypes = {
    uiTheme: PropTypes.object.isRequired
}

function getStyles(props, context) {
    const {palette} = context.uiTheme
    return {
        textColor: palette.darkGrey,
        errorColor: palette.error
    }
}

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    static propTypes = {
        label: PropTypes.string,
        hasInput: PropTypes.bool,
        hasValue: PropTypes.bool,
        minimumValue: PropTypes.number.isRequired,
        maximumValue: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
        onChangeText: PropTypes.func,
        color: PropTypes.string,
        step: PropTypes.number,
        unitOfMeasure: PropTypes.string
    }

    static defaultProps = {
        hasInput: false,
        label: null,
        step: 0.001
    }

    render() {
        const {hasValue, hasInput, label, minimumValue, maximumValue, value, onChangeText, color, step, unitOfMeasure} = this.props
        const customStyles = getStyles(this.props, this.context)
        return <View
            style={[this.props.style, {
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'flex-start'
            }]}>
            {
                hasValue && <Typography style={{left: ((100 * (this.state.value / maximumValue)) * 0.8).toString() + '%'}} type='darkBoldText'>{this.state.value + ' ' + unitOfMeasure}</Typography>
            }
            <View {...this.props}
                  style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                  }}>
                {
                    label &&
                    <Typography type='darkText' style={{color: customStyles.textColor}}>{label}</Typography>
                }
                <ReactSlider
                    minimumValue={minimumValue}
                    maximumValue={maximumValue}
                    style={{
                        width: (label && hasInput) ? '55%'
                            : label || hasInput ? '70%'
                                : '100%'
                    }}
                    step={step}
                    value={value}
                    minimumTrackTintColor={color}
                    thumbTintColor={color}
                    onValueChange={(value) => {
                        onChangeText(value)
                        this.setState({value: value})
                    }}
                />
                {
                    hasInput && <TextField ref={'input'}
                                           type={'light'}
                                           keyboardType='numeric'
                                           inputContainerStyle={{width: 80}}
                                           value={this.state.value}
                                           onChangeText={(value) => {
                                               onChangeText(value)
                                               this.setState({value: value})
                                           }}
                                           hideHelper/>
                }
            </View>
        </View>
    }
}

Slider.contextTypes = contextTypes
