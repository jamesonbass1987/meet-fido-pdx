import React from 'react';
import classes from './PageHeading.css'

import { Header, Icon } from 'semantic-ui-react';

const pageHeading = props => {
    return (
        <Header as={props.as} textAlign={props.textAlignment} className={classes.Header} icon>
            <Icon name={props.iconName} />
                {props.headingText}
            <Header.Subheader>
                {props.subheadingText}
            </Header.Subheader>
        </Header>
    );
};

export default pageHeading;