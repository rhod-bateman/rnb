/**
 * Created by qtj929 on 27/02/2017.
 */
import {
    addSongRequested, addSongFailed, addSongSuccess,
    rsvpRequested, rsvpSuccess, rsvpFailed
} from './actions';
import {rsvpApi, addSongApi} from '../api'

export const rsvp = answer =>
    (dispatch) => {
        dispatch(rsvpRequested());
        return rsvpApi(answer)
            .then((result) => {
                dispatch(rsvpSuccess(answer));
            })
            .catch((result) => {
                dispatch(rsvpFailed());
            });
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

export default { addSong, addFood };
