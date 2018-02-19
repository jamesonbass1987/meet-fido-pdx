import React from 'react'
import ModalWrapper from '../UI/Modal/Modal';
import { Modal, Image, Header } from 'semantic-ui-react'


const parkModal = props => {

    const isFenced = props.selectedPark.fenced ? "Fenced" : "Open Off Leash Area"
    const parkAddress = !props.selectedPark.address_2 ? `${props.selectedPark.address_1}` : `${props.selectedPark.address_1} and ${props.selectedPark.address_2}`
    const hours = `${props.selectedPark.hours_open} A.M. to ${props.selectedPark.hours_close}`
    const directionsURL = `https://www.google.com/maps/search/?api=1&query=${props.selectedPark.loc_latitude},${props.selectedPark.loc_longitude}`

    return (
        <ModalWrapper
            park={props.selectedPark}
            show={props.showModal}
            size="large"
            handleClose={props.handleModalClose}
        >
            <Modal.Header>{props.selectedPark.name}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={props.selectedPark.image_url} />
                <Modal.Description>
                    <Header>About The Park:</Header>
                    <p>{props.selectedPark.description}</p>
                    <p><strong>Address: </strong>{parkAddress} <a target="_blank" href={directionsURL}>(Get Directions)</a></p>
                    <p><strong>Park Hours: </strong>{hours}</p>
                    <p><strong><em>{isFenced}</em></strong></p>
                </Modal.Description>
            </Modal.Content>
        </ModalWrapper>
    )
}


export default parkModal
