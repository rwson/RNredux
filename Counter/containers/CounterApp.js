/**
 * CounterApp.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";
import React,{Component} from "react-native";
import {bindActionCreators} from "redux";
import Counter from "../component/count";
import * as counterActions from "../actions/couterActions";
import {connect} from "react-redux";

class CounterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state,actions} = this.props;
        return (
            <Counter
                counter={state.count}
                {...actions}
                />
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);
