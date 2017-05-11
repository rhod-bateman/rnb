/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './app.css';
import BigDay from './bigDay/bigDay'
import GettingHere from './gettingHere/GettingHere'
import Music from './music/Music'
import GettingHome from './gettingHome/GettingHome'
import Gifts from './gifts/Gifts'
import Rsvp from './rsvp/Rsvp';
import Image from './utils/image/index';
import backgroundImage from  '../assets/woodsBlurHD.jpg';
require('smoothscroll-polyfill').polyfill();

 const App = () => (
 <div className={styles.appContainer}>
    <Image className={styles.backgroundImage} src={backgroundImage}/>
    <h1 className={styles.header}>Beth and Rhods Woodland Wedding</h1>
     <BigDay/>
     <Rsvp/>
     <Music/>
    <Gifts/>
     <GettingHere/>
     <GettingHome/>
</div>
);

export default App;
