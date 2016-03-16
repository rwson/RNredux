/**
 * app.js
 * build by rwson @3/16/16
 * mail:rw_Song@sina.com
 */

"use strict";
import React,{Component} from "react-native";
import {createStore,applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers";
import AsyncApp from "./AsyncApp";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        );
    }

}
