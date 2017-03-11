/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './music.css';
import Segment from '../segment/Segment';
import actionCreator from '../../actions/actionCreator';
import Input from '../input/input'
import {music} from '../../data/text';

const Music = ({addSong}) => (
    <Segment title={music.title}>
        <p>{music.p1}</p>
        <p>{music.p2}</p>
        <p>{music.p3}</p>
        <Input placeholder="This awesome song by this awesome band" onSubmit={addSong}></Input>
    </Segment>
);

const mapStateToProps = state => ({
    structure: state.segments.music
});

const mapDispatchToProps = dispatch => ({
    addSong: bindActionCreators(actionCreator.addSong, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Music);



