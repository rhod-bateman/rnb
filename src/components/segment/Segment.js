/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './segment.css';
import {toggleSegment as toggleSegmentActionCreator} from '../../actions/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const bindToggleVisible = boundActionCreator => (name) => {
    return boundActionCreator(name);
};

const Segment = ({title, children, toggleSegment, openSegment, name}) => {

    var isVisible = openSegment && openSegment === name;

    return (
        <div className={styles.container}>
            <h2 className={styles.header} onClick={() => toggleSegment(name)}>{title} </h2>
            {
                isVisible && <div className={styles.contentBox}>{children}</div>
            }
        </div>);
}


const mapStateToProps = state => ({
    openSegment: state.segment
});

const mapDispatchToProps = dispatch => ({
    toggleSegment: bindToggleVisible(bindActionCreators(toggleSegmentActionCreator, dispatch)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Segment);


