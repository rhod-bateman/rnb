/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './gifts.css';
import Segment from '../segment/Segment';
import NewTablink from '../utils/newTabLink';
import { giftLink } from '../../data/'

const Gifts = () => (
    <Segment title="Gifts" name="gifts">
        <section>
            <p>We've been living together for enough years to have everything we need (and probably more).</p>
            <p>Please don't feel that you need to give us anything, we're happy enough that you're coming.</p>
            <p>But as people keep asking us for ideas, here are a few we thought of...</p>
        </section>
        <section>
            <ul>
                <li>There are a 1001 good causes in the world. You could pick your favourite and make a donation for us</li>
                <li>If you'd rather spend your money on us, life is all about experiences.</li>
                <li>Or if you really want to give us a thing, we still don't have proper curtains. We're setting up a <NewTablink href={giftLink} > John Lewis gift list </NewTablink>. </li>
            </ul>
        </section>
    </Segment>
);


export default Gifts;



