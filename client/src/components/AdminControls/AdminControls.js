import React from 'react';

import { Segment, } from 'semantic-ui-react';
import ConfirmableButton from '../UI/ConfirmableButton/ConfirmableButton'

const adminControls = props => {
    return (
        <Segment>
            <ConfirmableButton 
                open={props.open}
                handleShow={props.show}
                cancelButton='Never mind'
                confirmButton="Let's do it"
                handleCancel={props.handleCancel}
                handleConfirm={props.handleConfirm}
                color={props.color}
                fluid={props.fluid}
                message={props.message}
            />
        </Segment>
    );
};

export default adminControls;