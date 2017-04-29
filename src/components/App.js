/**
 * Created by qtj929 on 20/12/2016.
 */
import React, { PropTypes } from 'react';
import styles from './app.css';
import BigDay from './bigDay/bigDay'
import GettingHere from './gettingHere/GettingHere'
import Music from './music/Music'
import Food from './accomodation/Accomodation'
import Gifts from './gifts/Gifts'
import Rsvp from './rsvp/Rsvp';
import Image from './image/index';
import backgroundImage from  '../assets/headerBackground.jpg';

let imageUrl = "https://lh3.googleusercontent.com/cFD6F57NHrLySwON8Mfu6hi6BovVPmozqkuylI0Bm_uQPeDqkPJM_j0o4dStZ0RXWxj2OxwmVk3aMv2mSjvCuj2QTUGZ4ive9IUXWeaDEW8vXMdhrzQkUORK8yW4j3xGmVsG-nNFjsUzuNJ5dgl7_nybpGQsiKbJ78SRaBbesqUmUuETOwTUQ9fTgpxisNca2lwCt-beTdGUwGE9dRSDMpFN90BLgw2BD-_nHkbhstsIuiJB00FEmDXqmzrL_VNK2HISUUTgQTXKcfcSXkN5zRhdjOz_RpPcL7_rQIUOJntsK2ZLC49aDcBM0uystYc-LlljzsycWAkkOxbtMTL2P3sITX4jAwujMcntWPrF_7HQ1K1fUHlFCYEUwgmZPAu_d67jf69fiG-dnrdWBLe0RMoxLafyDu3AJCwOTx9g9r-kdLY3IKQYC452iwPvPQOkV0-NmjKFJJ-9YT3N-ZoTyGjPKfBrisNMl15yB6HboTQl405hF-sa5Mcni4eKiocvzfkF06nqrAVmaRE9sSuaYO2VIMgIEG6hNggsZp_C_PZ9DmIzr_zf9WMr2t6W7blqANWWtmJ4f37fhleCNDtlQ2Wo5z_rbBLDw7TWdObcdTEGRiUBNloVOA=w435-h589-no";

 const App = () => (
 <div className={styles.appContainer}>
    <Image className={styles.backgroundImage} src={imageUrl}/>
    <h1 className={styles.header}>Beth and Rhods Woodland Wedding</h1>
     <BigDay/>
     <GettingHere/>
     <Rsvp/>
    <Music/>
    <Gifts/>
    <Food/>
</div>
);

export default App;
