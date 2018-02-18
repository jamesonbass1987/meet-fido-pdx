import React from 'react';
import User from './User/User'

const users = props => {
    return (
        <div>
            <h4>Users List</h4>
            <User />
            <User />
            <User />
        </div>
    );
};


export default users;