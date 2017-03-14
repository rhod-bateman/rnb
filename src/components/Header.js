/**
 * Created by qtj929 on 13/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './header.css';
import {header as text} from '../data/text';
import backgroundImage from '../assets/headerBackground.jpg';

const Header = () => (
<div>
    <img src={backgroundImage} className={styles.backgroundImage} />
    <h1 className={styles.header}>{text.title}</h1>
</div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

