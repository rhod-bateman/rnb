/**
 * Created by qtj929 on 27/02/2017.
 */

export const RSVP_REQUESTED = "RSVP_REQUESTED";
export const RSVP_SUCCESS = "RSVP_SUCCESS";
export const RSVP_FAILED = "RSVP_FAILED";
export const TOGGLE_SEGMENT = "TOGGLE_SEGMENT";

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
