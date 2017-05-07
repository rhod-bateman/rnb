/**
 * Created by qtj929 on 21/12/2016.
 */

import {RSVP_SUCCESS, RSVP_FAILED, RSVP_REQUESTED} from '../actions/actions';

export const initialFormState = {
    answer: "Yes"
};


const reducer = (state = {}, action) => {

    switch (action.type) {
        case RSVP_REQUESTED:
            return Object.assign({}, state, { inProgress: true, error: undefined });

        case RSVP_FAILED:
            return Object.assign({}, state, { error: action.error, inProgress: false });

        case RSVP_SUCCESS:
            return Object.assign({}, state, { success: true, inProgress: false });
    }

    return state;
};

export default reducer;
