/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import Segment from '../segment/Segment';
import {spotifyLink} from '../../data/data';


const Music = () => (
    <Segment title="Music" name="music">
        <section>
            <p>Please follow our <a href={spotifyLink} >spotify playlist</a> and add your favourite songs</p>
            <p>Spotify tries to hide to follow button from you, its behind the helpful "you can add songs" message.</p>
        </section>
    </Segment>);

export default Music;



