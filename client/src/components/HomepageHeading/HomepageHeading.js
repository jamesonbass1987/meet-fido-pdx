import React from 'react';
import { Container } from 'semantic-ui-react';
import HeadingContent from './HeadingContent/HeadingContent'

import DogParkVideo from '../../assets/videos/dog-park-homepage.mp4'
import classes from './HomepageHeading.css'

const homepageHeading = props => {
    return (
        <Container text className={classes.Heading}>
            <video className={classes.BackgroundVideo} id="background-video" loop autoPlay>
                <source src={DogParkVideo}
                type="video/mp4" />
            </video>
            <div className={classes.BackgroundOverlay} />
            <HeadingContent />
        </Container>
    );
};


export default homepageHeading;