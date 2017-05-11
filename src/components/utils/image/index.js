/**
 * Created by qtj929 on 13/02/2017.
 */
import React, { PropTypes } from 'react';
import styles from './Image.css';

class Image extends React.Component {
    constructor({src, className}) {
        super();
        this.src = src;
        this.className = className;
        this.state = {
            loaded: false
        };
    }

    onLoad(event) {
        this.setState({loaded: true});
    }

    render() {
        let classes = [this.className, styles.opacityTransition];
        !this.state.loaded && classes.push(styles.loading);

        return (
            <img src={this.src} onLoad={(event) => this.onLoad(event)} className={classes.join(' ')}/>
    )}
}

export default Image;


