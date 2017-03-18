/**
 * Created by qtj929 on 21/12/2016.
 */

import {ADD_SONG_REQUESTED, ADD_SONG_FAILED, ADD_SONG_SUCCESS} from '../actions/actions';

const initialState = {
    inProgress: false,
    added: false,
    failed: false,
    songs: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_SONG_REQUESTED:
            return Object.assign({}, state, { inProgress: true });

        case ADD_SONG_FAILED:
            return Object.assign({}, state, { status: 'failed', inProgress: false});

        case ADD_SONG_SUCCESS:
            return Object.assign({}, state, { status: 'sucess', inProgress: false, songs: state.songs.push(action.song)});
    }

    return state;
};

export default reducer;
