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
        setTimeout(() => {
            var element = document.getElementById("section-"+name);
            var sectionTop = element ? element.offsetTop : 0;
            let sectionOutOfView = sectionTop < document.body.scrollTop;
            sectionOutOfView && document.querySelector("#section-"+name).scrollIntoView({
                behavior: 'smooth'
            });
        }, 1);
    });
}

export default { rsvp, toggleSegment };
