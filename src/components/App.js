/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './app.css';
import Header from './Header'
import BigDay from './bigDay/bigDay'
import GettingHere from './gettingHere/GettingHere'
import Music from './music/Music'
import Food from './accomodation/Accomodation'
import Gifts from './gifts/Gifts'
import Rsvp from './rsvp/Rsvp'

const App = () => (
<div>
    <Header/>
    <BigDay/>
    <GettingHere/>
    <Rsvp/>
    <Music/>
    <Gifts/>
    <Food/>
</div>
);

export default App;
