import {FETCH_DELIVERY_INFO} from "../actions";
import _ from 'lodash';

export default function (state = {}, action) {
    console.log("fetch delivery");
    switch (action.type) {

        case FETCH_DELIVERY_INFO:
            return {...state, [action.payload["tracking-detail"].pin]: action.payload["tracking-detail"]["significant-events"]["occurrence"]};
    }
    return state;
}