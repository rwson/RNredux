/**
 * count.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";
import React,{
    Component,
    View,
    Text,
    TouchableOpacity
} from "react-native";

import * as Style from "../style";

export default class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {counter,increase,decrease} = this.props;
        return (
            <View style={Style.Counter}>
                <Text>{counter}</Text>
                <TouchableOpacity onPress={increase} style={Style.button}>
                    <Text>up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrease} style={Style.button}>
                    <Text>down</Text>
                </TouchableOpacity>
            </View>
        );
    }

}
