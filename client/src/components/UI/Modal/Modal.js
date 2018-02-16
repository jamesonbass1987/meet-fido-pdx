import React from 'react';
import { Header, Modal, Image } from 'semantic-ui-react';

// import classes from './Modal.css'

const modal = props => {

    console.log(props.show)

    return (
        <Modal open={props.show} closeIcon onClose={props.handleClose} >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )

}
 


export default modal;