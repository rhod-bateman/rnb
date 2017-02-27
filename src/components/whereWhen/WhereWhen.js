/**
 * Created by qtj929 on 27/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './whereWhen.css';
import Segment from '../segment/Segment';

const Rsvp = ({structure}) => (
    <Segment title={structure.title}>
        <p>GU48rd at 12pm. This needs to be a link to launch google maps. </p>
        <p>The ceremony will be held in the woods, please ensure you bring suitable footware.</p>
        <p>Dress code: anything fabulous goes</p>
        <p>CHILD CODE: We have limited space so please dont bring your baby unless you can prove you need to breast feed.</p>
        <div>Google Maps goes here</div>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.whereWhen
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsvp);



