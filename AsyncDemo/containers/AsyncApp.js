/**
 * AsyncApp.js
 * build by rwson @3/16/16
 * mail:rw_Song@sina.com
 */

"use strict";
import React,{Component,View} from "react-native";
import {bindActionCreators} from "redux";
import Async from "../component/async";
import * as asyncActions from "../actions/asyncActions";
import {connect} from "react-redux";

export class AsyncApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {actions,list} = this.props;
        return (
            <View>
                <Async {...actions} list={list}/>
            </View>
        );
    }

}

function mapStateToProps(state){
    return {
        list:state.asyncDemo.list
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(asyncActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AsyncApp);
