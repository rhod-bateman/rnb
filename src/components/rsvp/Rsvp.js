/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './rsvp.css';
import Segment from '../segment/Segment';
import {rsvp} from '../../data/text';

const Rsvp = () => (
    <Segment title={rsvp.title}>
        <div className={styles.rsvpForm}>
            <p>Please RSVP below by April 15th</p>
            <div>
            <div className={styles.rsvpYes} >Yes</div>
            <div className={styles.rsvpNo} >No</div>
            </div>
        </div>

        <p>{rsvp.poison}</p>
        <p>{rsvp.poison2}</p>
        <p>{rsvp.kids1}</p>
        <p>{rsvp.kids2}</p>
        <p>{rsvp.kids3}</p>
    </Segment>
);

const mapStateToProps = state => ({
    answer: state.rsvp.answer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



