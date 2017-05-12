/**
 * Created by qtj929 on 12/05/2017.
 */

import React, { PropTypes } from 'react';
import Segment from '../segment/Segment';
import {photosAlbum} from '../../data/index';
import NewTabLink from '../utils/newTabLink/index'

const Photos = () => (
    <Segment title="Photos" name="photos">
        <p>Please share any wedding photos in our <NewTabLink href={photosAlbum}>album</NewTabLink></p>
    </Segment>
);


export default Photos;
