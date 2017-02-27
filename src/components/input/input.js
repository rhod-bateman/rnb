/**
 * Created by qtj929 on 27/02/2017.
 */

import React, { PropTypes } from 'react';
import styles from './input.css';

const Input = ({placeholder, onSubmit}) => (
    <form submit={onSubmit}>
        <input type="text" placeholder={placeholder}></input>
    </form>
);

export default Input;



