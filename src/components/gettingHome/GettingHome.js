/**
 * Created by qtj929 on 27/02/2017.
 */

import React, { PropTypes } from 'react';
import Segment from '../segment/Segment';
import {bookingLink} from '../../data/index';
import NewTabLink from '../utils/newTabLink/index'

const GettingHome = () => (
    <Segment title="...Then Getting Home" name="gettingHome">
        <p><NewTabLink href={bookingLink}>Booking.com</NewTabLink> has a few hotels in the area. </p>
    </Segment>
);


export default GettingHome;



