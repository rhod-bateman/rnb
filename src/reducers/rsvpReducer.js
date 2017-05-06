/**
 * Created by qtj929 on 21/12/2016.
 */

import {RSVP_SUCCESS, RSVP_FAILED, RSVP_REQUESTED} from '../actions/actions';
import {combineForms} from 'react-redux-form';

const  initialState= {
};

const formReducer =  combineForms({
    rsvp: initialState,
});
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case RSVP_REQUESTED:
            return Object.assign({}, state, { inProgress: true});

        case RSVP_FAILED:
            return Object.assign({}, state, { status: 'failed', inProgress: false});

        case RSVP_SUCCESS:
            return Object.assign({}, state, { status: 'failed', inProgress: false, answer: action.answer});
    }

    return state;
};

export default formReducer;
