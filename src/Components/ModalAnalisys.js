import React from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { CloseButton } from "react-bootstrap";
import HomeAnalise from "../Views/HomeAnalise";

const ModalAnalisys = (props) => {
    return (
        <Modal
            show={props.isOpen}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {/* {props.imageUrl} */}
                    <h2>Computer Vision Analysis</h2>
                </Modal.Title>
                <CloseButton onClick={props.onClose} />
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Centered Modal</h4> */}
                <HomeAnalise imageUrl={props.imageUrl}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAnalisys;