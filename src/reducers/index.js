/**
 * Created by qtj929 on 21/12/2016.
 */

import { combineReducers } from 'redux';
import rsvp from './rsvpReducer';
import music from './musicReducer';



const rootReducer = combineReducers({
    rsvp: rsvp,
    music: music
});

export default rootReducer;
