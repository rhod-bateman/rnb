/**
 * Created by qtj929 on 27/02/2017.
 */
import {
    addSongRequested, addSongFailed, addSongSuccess,
    rsvpRequested, rsvpSuccess, rsvpFailed
} from './actions';
import api from '../api'

export const rsvp = answer =>
    (dispatch) => {
        dispatch(rsvpRequested());
        return api.rsvp(answer)
            .then((result) => {
                dispatch(rsvpSuccess());
            })
            .catch((result) => {
                dispatch(rsvpFailed());
            });
    }

export const addSong = name =>
    (dispatch) => {
        dispatch(actions.addSongRequested());
        return api.addSong(name)
            .then((result) => {
                dispatch(addSongSuccess());
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
