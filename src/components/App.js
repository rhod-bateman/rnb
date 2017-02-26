/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const App = (structure) => (
    <div>
        <h1>Rhod and Beth Wedding</h1>
    </div>
);

const mapStateToProps = state => ({
    structure: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
