/**
 * asyncActions.js
 * build by rwson @3/15/16
 * mail:rw_Song@sina.com
 */

"use strict";

import * as type from "./actionTypes";

const url = "https://cnodejs.org/api/v1/topics";

export function fetchList() {

    return dispatch => fetch(url,{
        "method": "GET"
    }).then((res) => {
        return res.json();
    }).then((res) => {
        return dispatch({
            list: res.data,
            type:type.FETCH_LIST
        });
    }).catch((ex) => {
        console.log(ex);
    });

    //return {
    //    list: [
    //        {
    //            "title": "text1"
    //        },
    //        {
    //            "title": "text2"
    //        },
    //        {
    //            "title": "text3"
    //        },
    //        {
    //            "title": "text4"
    //        },
    //        {
    //            "title": "text5"
    //        },
    //        {
    //            "title": "text6"
    //        }
    //    ],
    //    type: type.FETCH_LIST
    //};

}
