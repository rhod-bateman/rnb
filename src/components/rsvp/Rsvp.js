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

const Confirmation = (coming) => {
    if (coming) {
        return <p> Look forward to seeing you there! </p>
    } else {
        return <p> Sorry you cant make it. Catch up soon... </p>
    }
};

const rsvpForm = (rsvpYes, rsvpNo) => {
    return (
    <div className={styles.paragraph}>
        <Option buttonStyle={styles.rsvpYes} onClick={rsvpYes} buttonText="Yes"/>
        <Option buttonStyle={styles.rsvpNo} onClick={rsvpNo} buttonText="No"/>
    </div>);
    /*{
        !!inProgress && <p>Saving...</p>
    }
    {
        !!failed && <p>Something went wrong.</p>
    });*/
}

const Rsvp = ({answer, inProgress, status, rsvpYes, rsvpNo}) => {
    let failed = status == 'failed';

    let html = (<Segment title="RSVP">
        { !answer && <section className={styles.rsvpForm}>
            <p>Please RSVP by April 15th to bethandrhod@gmail.com</p>
            {false && rsvpForm(rsvpYes, rsvpNo)}
        </section>}

        {
            !!answer && <section>
                <p>Thanks for rsvping!</p>
                <Confirmation coming={answer == 'coming'} />
            </section>
        }

        <section>
            <p>We really dont want to poison you during the day; is there aything we shouldnt feed you?</p>
            <p>(This is for the caterer so please tell us even if we'd normally get it right when you come for
                dinner)</p>
        </section>

        <section >
            <p>We have opted for a kid-free wedding to indulge our penchant for TenaciousD and stories about bad
                judgement.</p>
            <p>And more practically because we just dont have the space.</p>
            <p>We will obviously make an exception for recent arrivals who cannot be left but please let us know in
                advance if you need to bring them.</p>
        </section>
    </Segment>);

    return html;
};

const mapStateToProps = state => ({
    answer: state.rsvp.answer,
    inProgress: state.rsvp.inProgress,
    status: state.rsvp.status
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



