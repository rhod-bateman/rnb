/**
 * Created by qtj929 on 13/02/2017.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './header.css';
import text from './text';

const Header = (structure) => (

<div>
    <h1 className={styles.test}>{text.Header.title}</h1>
</div>
);

const mapStateToProps = state => ({
    structure: state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

