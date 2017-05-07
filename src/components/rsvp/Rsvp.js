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
import {rsvp as rsvpAction} from '../../actions/actionCreator';
import { Form, Control } from 'react-redux-form';



const Rsvp = ({submitRsvp, inProgress, success, failed}) => (
    <Segment title="RSVP" name="rsvp">
        <Form
            model="rsvp"
            onSubmit={submitRsvp}
            className={styles.rsvpForm}
        >
            <div >
                <fieldset>
                    <legend >Please RSVP by May 25th</legend>

                    <section >
                        <p>We have opted for a kid-free wedding to indulge our penchant for TenaciousD and stories about bad
                            judgement. And more practically because we just dont have the space. We will obviously make an exception for recent arrivals who cannot be left but please let us know in
                            advance if you need to bring them.</p>
                    </section>

                    <div className={styles.field}>
                        <label>So are you coming?</label>
                        <Control.select
                            model="rsvp.answer">
                            <option value="Yes with bells on">Yes with bells on</option>
                            <option value="Yes but with no bells">Yes but with no bells</option>
                            <option value="No, because I hear there might be bells">No, because I hear there might be bells</option>
                        </Control.select>
                    </div>

                    <div className={styles.field}>
                        <label>We really dont want to poison you during the day; is there anything we shouldn't feed you?
                        (This is for the caterer so please tell us even if we'd normally get it right when you come for
                            dinner)</label>
                        <Control.textarea
                            model="rsvp.allergies"/>
                    </div>

                    <div className={styles.field}>
                        <label>Please suggest any songs you think we should have on the playlist. </label>
                        <Control.textarea
                            model="rsvp.songs"/>
                    </div>
                </fieldset>
                <button type="submit" className={inProgress ? "inProgress" : false}>
                    { success ? "Thanks for sending!" : "Send"}
                </button>
                {failed && <p className={styles.failedText}>
                    Sorry, something went a bit wrong. Please try again or let us know at bethandrhod@gmail.com</p>}
            </div>
        </Form>
    </Segment>);

const mapStateToProps = state => ({
    rsvp: state.rsvp,
    inProgress: state.rsvp.inProgress,
    success: state.rsvp.success,
    failed: state.rsvp.error
});

const mapDispatchToProps = dispatch => ({
    submitRsvp: bindActionCreators(rsvpAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



