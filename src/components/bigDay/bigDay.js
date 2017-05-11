/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './bigDay.css';
import Segment from '../segment/Segment';
import TimeTable from '../timetable/Timetable';
import {address} from '../../data/text';
import {googleMapsLink} from '../../data/data';
import NewTabLink from '../utils/newTabLink';
import {cushion1Link, cushion1Image, cushion2Link, cushion2Image} from '../../data/data';
import Image from '../utils/image';

const BigDay = () => (
    <Segment title="The Big Day" name="bigDay">
        <section>
            We will wed in the woods in Rhod's parents' garden followed by a picnic on the lawn.
        </section>
        <section>
            Come and join us at 12:45 on July 15th at <NewTabLink href={googleMapsLink} >{address}</NewTabLink>
        </section>

        <TimeTable></TimeTable>

        <section>
            <h3>Dress Code</h3>
            <p>Whatever makes you feel most fabulous</p>
            <p>Please bear in mind that you will be walking though leaf litter in the woods and sitting on a picnic blanket later on.</p>
        </section>

        <section><h3>What to bring:</h3>
            <ul>
                <li>Suntan lotion</li>
                <li>Suitable footwear for woodland and lawns.</li>
                <li>If you want a cushion for the picnic, amazon has some cushion-chairs;
                    <NewTabLink href={cushion1Link} > <Image src={cushion1Image} className={styles.amazonImage} /></NewTabLink>
                    <NewTabLink href={cushion2Link} > <Image src={cushion2Image} className={styles.amazonImage} /></NewTabLink>
                </li>
            </ul>
        </section>
    </Segment>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BigDay);



