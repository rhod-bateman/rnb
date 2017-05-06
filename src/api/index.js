/**
 * Created by qtj929 on 27/02/2017.
 */
import { post }  from './api';


export const addSongApi = (song) => {
    return post({uri: '/addSong'}, {song: song});
}


export const rsvpApi = (form) => {
    return post({uri: '/rsvp'}, {form: form});
};
