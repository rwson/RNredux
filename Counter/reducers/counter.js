/**
 * counter.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";

import * as types from '../actions/actionType';

const initialState = {
    count: 0
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}