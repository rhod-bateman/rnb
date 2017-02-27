/**
 * Created by qtj929 on 27/02/2017.
 */

import React, { PropTypes } from 'react';
import styles from './input.css';

const handleSubmit = (event, onSubmit) =>{
    onSubmit(event.target.input.value);
    event.preventDefault();
    return false;
}


const Input = ({placeholder, onSubmit}) => (
    <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
        <input type="text" name="input" placeholder={placeholder}></input>
        <input type="submit"></input>
    </form>
);

export default Input;



