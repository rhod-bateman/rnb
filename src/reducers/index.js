/**
 * Created by qtj929 on 21/12/2016.
 */

import { combineReducers } from 'redux';
import rsvp from './rsvpReducer';
import music from './musicReducer';
import segment from './segmentReducer';
import {combineForms} from 'react-redux-form';



const rootReducer = combineReducers({
    rsvp: rsvp,
    music: music,
    segment: segment
});

export default rootReducer;
