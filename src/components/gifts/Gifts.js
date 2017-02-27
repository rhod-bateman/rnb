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

const Food = ({structure}) => (
    <Segment title={structure.title}>
        <p>After the ceremony we will providing a picnic.</p>
        <p>In the evening there will be a hog roast.</p>
        <p>If you have any allergies we should know about please let us know.</p>
        <input type="text" placeholder="I am allergic to..."></input>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.gifts
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Food);



