import React, { Component } from 'react';

import { Segment, Container, Header, Icon, Button  } from 'semantic-ui-react'

import HomepageHeading from '../../components/HomepageHeading/HomepageHeading';

class Home extends Component {
    render() {
        return (
            <div>
                <HomepageHeading />
            </div>
        );
    }
}

export default Home;