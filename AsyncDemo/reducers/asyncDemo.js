/**
 * asyncDemo.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";

import * as types from "../actions/actionTypes";

const initialState = {
    "list": []
};

export default function asyncDemo(state = initialState, action = {}) {
    switch (action.type) {
        case types.FETCH_LIST:
            return {
                ...state,
                list: action.list
            };
        default :
            return state;
    }
}

