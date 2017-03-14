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
import {rsvp as rsvpAction} from '../../actions/actionCreator'


const Option = ({onClick, buttonStyle, buttonText}) => (
    <div className={buttonStyle} onClick={onClick} >{buttonText}</div>
);

const Rsvp = ({rsvpYes, rsvpNo}) => (
    <Segment title="RSVP">
        <section className={styles.rsvpForm}>
            <p>Please RSVP below by April 15th</p>
            <div className={styles.paragraph}>
                <Option buttonStyle={styles.rsvpYes} onClick={rsvpYes} buttonText="Yes"/>
                <Option buttonStyle={styles.rsvpNo} onClick={rsvpYes} buttonText="No"/>
            </div>
        </section>

        <section>
            <p>We really dont want to poison you during the day; is there aything we shouldnt feed you?</p>
            <p>(This is for the caterer so please tell us even if we'd normally get it right when you come for dinner)</p>
        </section>

        <section >
            <p>We have opted for a kid-free wedding to indulge our penchant for TenaciousD and stories about bad judgement.
                And more practically because we just dont have the space.</p>
            <p>We will obviously make an exception for recent arrivals who cannot be left but please let us know in advance if you need to bring them.</p>
        </section>
    </Segment>
);

const mapStateToProps = state => ({
    answer: state.rsvp.answer
});

const createOnClick = (value, boundActionCreator) => (event) => {
    event.preventDefault();
    return boundActionCreator(value);
};

const mapDispatchToProps = dispatch => ({
    rsvpYes: createOnClick("Yes", bindActionCreators(rsvpAction, dispatch)),
    rsvpNo: createOnClick("No", bindActionCreators(rsvpAction, dispatch))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



