import React, { Component } from 'react';

import Navbar from '../components/Navigation/Navbar'

import classes from './Layout.css';


class Layout extends Component {


    render(){
        return(
            <React.Fragment>
                <Navbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;