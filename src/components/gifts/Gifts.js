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
        <section>
            Coming soon...
        </section>
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



