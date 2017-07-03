/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './thingsToKnow.css';
import Segment from '../segment/Segment';
import NewTabLink from '../utils/newTabLink';
import Image from '../utils/image';
import {cushion1Link, cushion1Image, cushion2Link, cushion2Image} from '../../data/index';

const ThingsToKnow = () => (
    <Segment title="Things you should know" name="thingsToKnow">
        <section>
            <h3>Dress Code</h3>
            <p>Whatever makes you feel most fabulous</p>
            <p>Please bear in mind that you will be walking though leaf litter in the woods and sitting on a picnic blanket later on.</p>
        </section>

        <section><h3>What to bring:</h3>
            <ul>
                <li>Suntan lotion</li>
                <li>Suitable footwear for woodland and lawns.</li>
                <li>Something warm for when the sun goes down.</li>
                <li>If you want a cushion for the picnic, amazon has some cushion-chairs;
                    <NewTabLink href={cushion1Link} > <Image src={cushion1Image} className={styles.amazonImage} /></NewTabLink>
                    <NewTabLink href={cushion2Link} > <Image src={cushion2Image} className={styles.amazonImage} /></NewTabLink>
                </li>
            </ul>
        </section>
    </Segment>
);

export default ThingsToKnow;
