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

const Rsvp = ({structure}) => (
    <Segment title={structure.title}>
        <p>Please rsvp to bethandrhod@gmail.com by April 20th.</p>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.rsvp
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



