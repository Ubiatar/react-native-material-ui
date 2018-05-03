/**

 * Copyright (c) 2015-present, Facebook, Inc.

 *

 * This source code is licensed under the MIT license found in the

 * LICENSE file in the root directory of this source tree.

 *

 * @providesModule Select

 * @flow

 */



'use strict';

import SelectIOS from './SelectIOS.ios'

import SelectAndroid from './SelectAndroid.android'

var React = require('React');

const PropTypes = require('prop-types');

import { View, Text, Platform } from 'react-native'

var MODE_DIALOG = 'dialog';

var MODE_DROPDOWN = 'dropdown';


/**

 * Individual selectable item in a Select.

 */

class SelectItem extends React.Component<{

    label: string,

    value?: any,

    testID?: string,

}> {
    render() {

        // The items are not rendered directly

        throw null;

    }
}



/**

 * Renders the native picker component on iOS and Android. Example:

 *

 *     <Select

 *       selectedValue={this.state.language}

 *       onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>

 *       <Select.Item label="Java" value="java" />

 *       <Select.Item label="JavaScript" value="js" />

 *     </Select>

 */

class Select extends React.Component<{

    style?: $FlowFixMe,

    selectedValue?: any,

    onValueChange?: Function,

    enabled?: boolean,

    mode?: 'dialog' | 'dropdown',

    itemStyle?: $FlowFixMe,

    prompt?: string,

    testID?: string,

}> {

    /**

     * On Android, display the options in a dialog.

     */

    static MODE_DIALOG = MODE_DIALOG;



    /**

     * On Android, display the options in a dropdown (this is the default).

     */

    static MODE_DROPDOWN = MODE_DROPDOWN;



    static Item = SelectItem;



    static defaultProps = {

        mode: MODE_DIALOG,

    };

    render() {

        let {labelText} = this.props

        if (Platform.OS === 'ios') {

            // $FlowFixMe found when converting React.createClass to ES6

            return <SelectIOS {...this.props}>{this.props.children}</SelectIOS>;

        } else if (Platform.OS === 'android') {

            // $FlowFixMe found when converting React.createClass to ES6

            return <View>
                <Text style={{color: this.context.uiTheme.colors.textColor, fontFamily: 'Raleway-Regular', fontSize: 12, paddingLeft: 12, paddingBottom: 5}}>
                    {labelText}
                </Text>
                <View style={{padding: 0, height: 44, borderRadius: 4, backgroundColor: 'rgba(29, 28, 50, 0.4)'}}>
                    <SelectAndroid style={{marginLeft: 5}} {...this.props}>{this.props.children}</SelectAndroid>
                </View>
            </View>;

        } else {

            return <UnimplementedView />;

        }

    }
}



module.exports = Select;
