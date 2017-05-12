/**
 * Created by qtj929 on 17/04/2017.
 */
import {songs} from '../data/index';

const addSong = (req, res, next) => {
    let song = req.data.song;
    console.log('add song: ', song);

    if (!song) {
        res.status(404);
        res.send();
    }

    songs.push(song);
    res.status(200);
    res.json(songs);
};

export default {addSong};
