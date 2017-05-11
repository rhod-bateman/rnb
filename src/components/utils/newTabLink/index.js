/**
 * Created by qtj929 on 27/02/2017.
 */
/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './index.css';

const NewTabLink = ({href, children}) =>
    (<a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">{children}</a>);

export default NewTabLink;



