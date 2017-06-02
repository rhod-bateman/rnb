/**
 * Created by qtj929 on 27/02/2017.
 */

import React, { PropTypes } from 'react';
import Segment from '../segment/Segment';
import {bookingLink} from '../../data/index';
import NewTabLink from '../utils/newTabLink/index'

const GettingHome = () => (
    <Segment title="...Then Getting Home" name="gettingHome">
        <p>Guildford has the most choice in hotels; there arent many bargains in the local area.</p>
        <p>If you would like to be closer, <NewTabLink href={bookingLink}>Booking.com</NewTabLink> has a few hotels nearby (ish). </p>
    </Segment>
);


export default GettingHome;



