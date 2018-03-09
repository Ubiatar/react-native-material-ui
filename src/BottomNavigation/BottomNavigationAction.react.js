/* eslint-disable import/no-unresolved, import/extensions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { ViewPropTypes } from '../utils';
/* eslint-enable import/no-unresolved, import/extensions */

import RippleFeedback from '../RippleFeedback';
import Icon from '../Icon';

const propTypes = {
    /**
    * Will be rendered above the label as a content of the action.
    * If string, result will be <Icon name={icon} ...rest />
    * If ReactElement, will be used as is
    */
    icon: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
    /**
    * Will be rendered under the icon as a content of the action.
    */
    label: PropTypes.string,
    /**
    * True if the action is active (for now it'll be highlight by primary color)
    */
    active: PropTypes.bool.isRequired,
    /**
    * Callback for on press event.
    */
    onPress: PropTypes.func,
    /**
    * Inline style of bottom navigation
    */
    style: PropTypes.shape({
        container: ViewPropTypes.style,
        active: Text.propTypes.style,
        disabled: Text.propTypes.style,
        tabIndicator: Text.propTypes.style
    }),
    /**
     * Set the tab indicator visible or not
     */
    tabIndicator: PropTypes.bool
};
const defaultProps = {
    label: null,
    onPress: null,
    active: false,
    disabled: false,
    style: {},
    tabIndicator: false
};
const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};
const defaultStyle = StyleSheet.create({
    tabIndicator: {
        position: 'absolute',
        height: 3,
        width: '150%',
        top: 0
    }
})

function getStyles(props, context) {
    const { bottomNavigationAction } = context.uiTheme;

    const local = {};
    const activeInactiveProps = {}
    const activeInactiveContext = {}

    if (props.active) {
        local.container = bottomNavigationAction.containerActive;
        local.icon = bottomNavigationAction.iconActive;
        local.label = bottomNavigationAction.labelActive;
        activeInactiveContext.icon = bottomNavigationAction.active;
        activeInactiveContext.label = bottomNavigationAction.active;
        activeInactiveContext.tabIndicator = bottomNavigationAction.tabIndicator
        activeInactiveProps.icon = props.style.active;
        activeInactiveProps.label = props.style.active;
    } else {
        activeInactiveContext.icon = bottomNavigationAction.disabled;
        activeInactiveContext.label = bottomNavigationAction.disabled;
        activeInactiveProps.icon = props.style.disabled;
        activeInactiveProps.label = props.style.disabled;
    }

    if (!props.label) {
        local.container = { paddingTop: 16, paddingBottom: 16 };
    }

    return {
        container: [
            bottomNavigationAction.container,
            local.container,
            props.style.container,
        ],
        icon: [
            bottomNavigationAction.icon,
            local.icon,
            activeInactiveContext.icon,
            activeInactiveProps.icon,
            props.style.icon,
        ],
        label: [
            bottomNavigationAction.label,
            local.label,
            activeInactiveContext.label,
            activeInactiveProps.label,
            props.style.label,
        ],
        tabIndicator: [
            bottomNavigationAction.tabIndicator,
            activeInactiveContext.tabIndicator,
            defaultStyle.tabIndicator,
            props.style.tabIndicator
        ]
    };
}

class BottomNavigationAction extends PureComponent {
    renderIcon(icon, styles, color) {
        let element;
        if (React.isValidElement(icon)) {
            // we need icon to change color after it's selected, so we send the color and style to
            // custom element
            element = React.cloneElement(icon, { style: styles.icon, color });
        } else {
            element = <Icon name={icon} style={styles.icon} color={color} />;
        }
        return element;
    }

    render() {
        const { icon, label, onPress, active, tabIndicator } = this.props;

        const styles = getStyles(this.props, this.context);
        const color = StyleSheet.flatten(styles.icon).color;

        const iconElement = this.renderIcon(icon, styles, color);

        return (
            <RippleFeedback onPress={onPress}>
                <View style={styles.container}>
                    { tabIndicator && active ? <View collapsable={false} style={styles.tabIndicator}></View> : null }
                    {iconElement}
                    <Text style={styles.label}>{label}</Text>
                </View>
            </RippleFeedback>
        );
    }
}

BottomNavigationAction.propTypes = propTypes;
BottomNavigationAction.defaultProps = defaultProps;
BottomNavigationAction.contextTypes = contextTypes;

export default BottomNavigationAction;
