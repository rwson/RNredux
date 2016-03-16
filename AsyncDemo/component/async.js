/**
 * async.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";

import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const style = StyleSheet.create({
    "container": {
        "flex": 1,
        "backgroundColor": "#fff",
        "alignItems": "center",
        "justifyContent": "center"
    },
    btn: {
        "width": 100,
        "height": 100,
        "backgroundColor": "red"
    },
    font: {
        "fontSize": 30
    },
    lists: {
        marginTop: 100
    },
    "loading": {
        "fontSize": 30
    }
});

export default class Async extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {list,fetchList} = this.props;
        const props = this.props;
        console.log(this.props);
        let ele = <Text style={style.loading}>loading</Text>;
        if (list && list.length) {
            ele = list.map((item) => {
                return (
                    <View style={[style.container,style.lists]}>
                        <Text>{item.title}</Text>
                    </View>
                );
            });
        }
        return (
            <View style={style.container}>
                <TouchableOpacity style={style.btn} onPress={fetchList}>
                    <Text style={style.font}>fetch</Text>
                </TouchableOpacity>
                {ele}
            </View>
        );
    }
}
