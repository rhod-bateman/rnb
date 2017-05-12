/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import Segment from '../segment/Segment';
import {spotifyLink} from '../../data/index';
import NewTablink from '../utils/newTabLink/index'


const Music = () => (
    <Segment title="Music" name="music">
        <section>
            <p>Please follow our <NewTablink href={spotifyLink} >spotify playlist</NewTablink> and add your favourite songs</p>
            <p>On mobile, Spotify tries to hide to follow button from you. Its behind the helpful "you can add songs to this playlist" message.</p>
        </section>
    </Segment>);

export default Music;



