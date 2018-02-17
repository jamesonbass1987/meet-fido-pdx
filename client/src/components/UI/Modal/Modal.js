import React from 'react';
import { Modal } from 'semantic-ui-react';

const modal = props => {
    return (
        <Modal 
            open={props.show} 
            closeIcon 
            onClose={props.handleClose}
        >
            {props.children}
        </Modal>
    )
}
 


export default modal;