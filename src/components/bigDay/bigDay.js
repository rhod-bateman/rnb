/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Segment from '../segment/Segment';
import TimeTable from '../timetable/Timetable';
import {googleMapsLink} from '../../data/index';
import NewTabLink from '../utils/newTabLink';
import {address} from '../../data/index';

const BigDay = () => (
    <Segment title="The Big Day" name="bigDay">
        <section>
            We will wed in the woods in Rhod's parents' garden followed by a picnic on the lawn.
        </section>
        <section>
            Come and join us at 12:45 on July 15th at <NewTabLink href={googleMapsLink} >{address}</NewTabLink>
        </section>

        <TimeTable></TimeTable>

    </Segment>
);

export default BigDay;
