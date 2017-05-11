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

    let state = getState();
    let formState = state.form.rsvp;

    dispatch(rrfActions.setPending('rsvp', true));
    dispatch(rsvpRequested());
    let promise = rsvpApi(formState)
        .then((result) => {
            dispatch(rsvpSuccess(answer));
            dispatch(rrfActions.setSubmitted('rsvp', true));
        })
        .catch((result) => {
            dispatch(rrfActions.setSubmitFailed('rsvp'));
            dispatch(rsvpFailed({ status: result.status, data: result.data}));
        });

    dispatch(rrfActions.submit('rsvp', promise));
};

export const toggleSegment = (name) => (dispatch) => {
    dispatch(toggleSegmentAction(name));
    dispatch(() => {
        var element = document.getElementById("section-"+name);
        var scrollPosition = document.body.scrollTop;
        setTimeout(() => {
            if (scrollPosition > element.offsetTop) {
                window.scrollTo(0, element.offsetTop);
            }
         }, 0);
    });
}

export default { rsvp, toggleSegment };
