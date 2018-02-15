import React from 'react';

import pawPrintLogo from '../../assets/images/paw-print.png'
import classes from './Logo.css';

const logo = props => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={pawPrintLogo} alt="MeetFidoPDX Logo" />
    </div>
)

export default logo;