/**
 * Created by qtj929 on 27/02/2017.
 */
import actions from './actions';
import api from '../api'


export const addSong = name =>
    (dispatch) => {
        dispatch(actions.addSongRequested());
        return api.addSong(name)
            .then((result) => {
                dispatch(actions.addSongSuccess());
            })
            .catch((result) => {
                dispatch(actions.addSongFailed());
            });
    };

export const addFood = name =>
    (dispatch) => {
        dispatch(actions.addSongRequested());
        return api.addSong(name)
            .then((result) => {
                dispatch(actions.addSongSuccess());
            })
            .catch((result) => {
                dispatch(actions.addSongFailed());
            });
    };

export default { addSong, addFood };
