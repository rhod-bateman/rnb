/**
 * Created by qtj929 on 27/02/2017.
 */
import { post }  from './api';


export const addSongApi = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100);
    });
}


export const rsvpApi = (answer) => {
    return post({uri: '/rsvp'}, {answer: answer});
}
