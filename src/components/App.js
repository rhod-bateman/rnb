/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './app.css';
import Header from './Header'
import Rsvp from './rsvp/Rsvp'
import WhereWhen from './whereWhen/WhereWhen'
import TimeTable from './timetable/TimeTable'
import Music from './music/Music'
import Food from './food/Food'
import Gifts from './gifts/Gifts'


const App = () => (
<div>
    <Header></Header>
    <Rsvp></Rsvp>
    <WhereWhen></WhereWhen>
    <TimeTable></TimeTable>
    <div>Dress code</div>
    <Gifts></Gifts>
    <div>table plan</div>
    <Music></Music>
    <Food></Food>
    <div>Transport and travel</div>
    <div>Where to stay</div>
</div>
);

export default App;
