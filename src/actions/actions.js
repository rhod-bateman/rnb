/**
 * Created by qtj929 on 27/02/2017.
 */

export const ADD_SONG_REQUESTED = "ADD_SONG_REQUESTED";
export const ADD_SONG_SUCCESS = "ADD_SONG_SUCCESS";
export const ADD_SONG_FAILED = "ADD_SONG_FAILED";

export const RSVP_REQUESTED = "RSVP_REQUESTED";
export const RSVP_SUCCESS = "RSVP_SUCCESS";
export const RSVP_FAILED = "RSVP_FAILED";
export const TOGGLE_SEGMENT = "TOGGLE_SEGMENT";

export const ADD_ALLERGY = "ADD_ALLERGY";

export const addSongRequested = () => {
    return {
        type: ADD_SONG_REQUESTED
    };
};

export const addSongSuccess = (song) => {
    return {
        type: ADD_SONG_SUCCESS,
        song: song
    };
}

export const addSongFailed = () => {
    return {
        type: ADD_SONG_FAILED
    };
}

export const rsvpRequested = () => {
    return {
        type: RSVP_REQUESTED
    };
};

export const rsvpSuccess = (answer) => {
    return {
        type: RSVP_SUCCESS,
        answer: answer
    };
}

export const rsvpFailed = (error) => {
    return {
        type: RSVP_FAILED,
        error:error
    };
};

export const toggleSegment = (name) => {
    return {
        type: TOGGLE_SEGMENT,
        name: name
    };
}
