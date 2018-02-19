import React from 'react'
import { Header, Button, Icon } from 'semantic-ui-react';

import classes from './MainHeading.css'

const mainHeading = props => (
        <div className={classes.HeadingContent}>
            <Header
                as='h1'
                content='MeetFidoPDX'
                size='large'
                className={classes.HeaderContent}
                inverted
                textAlign="center"
            />
            <Header
                as='h2'
                content='Find your best friend a place to play and meet other furry pals.'
                inverted
                textAlign="center"
                className={classes.HeaderSubContent}
            />
            <Button
                primary size='huge'
                className={classes.Button}
            >
                Get Started
            <Icon name='right arrow' />
            </Button>
        </div>
    )

export default mainHeading
