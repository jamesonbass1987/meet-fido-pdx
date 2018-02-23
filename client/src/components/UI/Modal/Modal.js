import React from 'react';
import { Modal } from 'semantic-ui-react';

const modal = props => {
    console.log('opening modal', props.show)
    return (
        <Modal 
            open={props.show} 
            closeIcon 
            onClose={props.handleClose}
            basic={props.basic}
            > {props.children} </Modal>
    )
}
 
export default modal;