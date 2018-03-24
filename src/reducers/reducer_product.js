import {FETCH_PRODUCT} from "../actions";
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_PRODUCT:
            console.log(action.payload);
            return {...state, [action.payload.productId]: action.payload};
    }
    return state;
}