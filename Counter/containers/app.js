/**
 * app.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";
import React,{Component} from "react-native";
import {createStore,applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers";
import CounterApp from "./CounterApp";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

console.log(reducers);
console.log(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}
