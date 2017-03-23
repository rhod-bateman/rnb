/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './segment.css';

class Segment extends React.Component {
    constructor({title, children}) {
        super();
        this.title = title;
        this.children = children;
        this.state = {
            contentVisible: false
        };
    }

    toggleVisible() {
        let visible = this.state.contentVisible;
        this.setState({contentVisible: !visible});
    }

    render() {
        return (
        <div className={styles.container}>
            <h2 className={styles.header} onClick={() => this.toggleVisible()}>{this.title} </h2>
            {
                this.state.contentVisible && <div className={styles.contentBox}>{this.children}</div>
            }
        </div>);
    }
}


const mapStateToProps = state => ({
    segments: state.segments
});

const mapDispatchToProps = dispatch => ({
    formSubmitAction: bindActionCreators(loginActionCreators.submitLoginForm, dispatch)
});

export default Segment;


