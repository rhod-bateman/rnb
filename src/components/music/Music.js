/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './music.css';
import Segment from '../segment/Segment';
import actionCreator from '../../actions/actionCreator';
import Input from '../input/input'
import {music} from '../../data/text';


const songItems = (items) => {
    var list = [];
    items && items.map((song) => {
        list.push(<li>{song}</li>);
    });
    return list;
};

const SongList = ({songs}) => {
    if (songs && songs.length) {
        return (
            <div>
                <h3>Your songs so far...</h3>
                <ul>
                    {songItems(songs)}
                </ul>
            </div>);
    }
    return null;
};

const Music = ({addSong, added, failed, songs}) => (
    <Segment title={music.title} name="music">
        <p>{music.p1}</p>
        <p>{music.p2}</p>
        <p>{music.p3}</p>
        <Input placeholder="This awesome song by this awesome band" onSubmit={addSong}></Input>
        {
            failed && <p>Something went wrong...</p>
        }
        <SongList songs={songs} ></SongList>

    </Segment>
);

const mapStateToProps = state => ({
    added: state.music.added,
    failed: state.music.failed,
    songs: state.music.songs
});

const mapDispatchToProps = dispatch => ({
    addSong: bindActionCreators(actionCreator.addSong, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Music);



