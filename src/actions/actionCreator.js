/**
 * Created by qtj929 on 27/02/2017.
 */
import {
    addSongRequested, addSongFailed, addSongSuccess,
    rsvpRequested, rsvpSuccess, rsvpFailed, toggleSegment as toggleSegmentAction
} from './actions';
import {rsvpApi, addSongApi} from '../api';
import {actions as rrfActions} from 'react-redux-form';

export const rsvp = answer =>
    (dispatch, getState) => {
    debugger;
    let state = getState();
    let formState = state.form.rsvp;

        dispatch(rsvpRequested());
        let promise = rsvpApi(formState)
            .then((result) => {
                dispatch(rsvpSuccess(answer));
            })
            .catch((result) => {
                dispatch(rsvpFailed({ status: result.status, data: result.data}));
            });

        dispatch(rrfActions.submit('rsvp', promise));
    };

export const addSong = song =>
    (dispatch) => {
        dispatch(addSongRequested());
        return addSongApi(song)
            .then((result) => {
                dispatch(addSongSuccess(song));
            })
            .catch((result) => {
                dispatch(addSongFailed());
            });
    };

export const addFood = name =>
    (dispatch) => {
        dispatch(addSongRequested());
        return api.addSong(name)
            .then((result) => {
                dispatch(actions.addSongSuccess());
            })
            .catch((result) => {
                dispatch(actions.addSongFailed());
            });
    };

export const toggleSegment = name => (dispatch) => {
    dispatch(toggleSegmentAction(name));
}

export default { addSong, addFood };
