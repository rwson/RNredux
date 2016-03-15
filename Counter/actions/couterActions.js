/**
 * couterActions.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";

import * as Types from "./actionType";

export function increase() {
    return {
        type: Types.INCREMENT
    };
}

export function decrease() {
    return {
        type:Types.DECREMENT
    };
}