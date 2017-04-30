/**
 * Created by qtj929 on 21/12/2016.
 */

import {TOGGLE_SEGMENT} from '../actions/actions';

const initialState = null;

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_SEGMENT:
            return state == action.name ? null : action.name;
    }

    return state;
};

export default reducer;
