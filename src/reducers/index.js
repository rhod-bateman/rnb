/**
 * Created by qtj929 on 21/12/2016.
 */

import { combineReducers } from 'redux';

const initialState = {
    segments: {
        rsvp: {
            title: "RSVP",
        },
        whereWhen: {
            title: "Where and When"
        },
        timetable: {
            title: "Time table"
        },
        dressCode: {
            title: "Dress Code"
        },
        gifts: {
            title: "Gifts"
        },
        music: {
            title: "Music"
        },
        food: {
            title: "Food"
        },
        transport: {
            title: "transport"
        },
        accomodation: {
            title: "accomodation"
        }
    }
}

const reducer = (state = initialState, action) => state;

export default reducer;
