/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Color from './Color';
import {Icon} from '../Icon'

export default function Send({ text, containerStyle, onSend, children, textStyle, label }) {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={() => {
                onSend({ text: text.trim() }, true);
            }}
            accessibilityTraits="button"
            disabled={text.trim().length === 0}
        >
            <View>{children || <Icon size={28} name='send' color={text.trim().length > 0 ? '#6cccff' : '#ececec'} />}</View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: Color.backgroundTransparent,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
  children: null,
  alwaysShowSend: false,
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.element,
  alwaysShowSend: PropTypes.bool,
};
