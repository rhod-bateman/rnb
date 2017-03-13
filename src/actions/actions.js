/**
 * Created by qtj929 on 27/02/2017.
 */

export const ADD_SONG_REQUESTED = "ADD_SONG_REQUESTED";
export const ADD_SONG_SUCCESS = "ADD_SONG_SUCCESS";
export const ADD_SONG_FAILED = "ADD_SONG_FAILED";

export const ADD_ALLERGY = "ADD_ALLERGY";

export const addSongRequested = () => {
    return {
        type: ADD_SONG_REQUESTED
    };
};

export const addSongSuccess = () => {
    return {
        type: ADD_SONG_SUCCESS
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

export const rsvpSuccess = () => {
    return {
        type: RSVP_SUCCESS
    };
}

export const rsvpFailed = () => {
    return {
        type: RSVP_FAILED
    };
}
