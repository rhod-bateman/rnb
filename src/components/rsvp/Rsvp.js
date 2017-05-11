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
import { Form, Control, Errors, Field } from 'react-redux-form';

const getErrorClass = (formState, name) => {
    let field = formState[name];
    let inValid = field && field.touched && !field.valid;
    return inValid ? styles.fieldError : "";
}

const Rsvp = ({submitRsvp, inProgress, success, failed, formState}) => (
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

                    <Field model=".name" className={styles.field} >
                        <label>Name(s)</label>
                        <Control
                            type="text"
                            model=".name"
                            required
                            className={getErrorClass(formState, "name")}/>
                        <Errors
                            className={styles.errors}
                            model=".name"
                            show="touched"
                            messages={{
                                valueMissing: 'Please give your names'
                            }} />
                    </Field>

                    <Field className={styles.field} model=".answer">
                        <label>So are you coming?</label>
                        <Control.select
                            model=".answer" >
                            <option value="Yes with bells on">Yes with bells on</option>
                            <option value="Yes but with no bells">Yes but with no bells</option>
                            <option value="No, because I hear there might be bells">No, because I hear there might be bells</option>
                        </Control.select>
                    </Field>

                    <Field className={styles.field} model=".allergies">
                        <label>We really dont want to poison you during the day; is there anything we shouldn't feed you?
                        (This is for the caterer so please tell us even if we'd normally get it right when you come for
                            dinner)</label>
                        <Control.textarea
                            model=".allergies"/>
                    </Field>

                    <Field className={styles.field} model=".songs">
                        <label>Please suggest any songs you think we should have on the playlist. </label>
                        <Control.textarea
                            model=".songs"/>
                    </Field>
                </fieldset>
                <button
                    type="submit"
                    model="."
                    className={inProgress ? "inProgress":""}>
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
    failed: state.rsvp.error,
    formState: state.form && state.form.forms && state.form.forms.rsvp && state.form.forms.rsvp ? state.form.forms.rsvp : {}
});

const mapDispatchToProps = dispatch => ({
    submitRsvp: bindActionCreators(rsvpAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



