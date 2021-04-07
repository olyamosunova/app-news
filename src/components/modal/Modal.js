import React, {useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import {useDispatch} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";
import "./Modal.scss";

const ModalBlock = ({message}) => {
    const dispatch = useDispatch();
    const resetErrorMessage = () => dispatch(ActionCreator.setErrorMessage(''));

    useEffect(() => {
        let timer = null;
        clearTimeout(timer);
        timer = setTimeout(resetErrorMessage, 500);
    }, []);

    return (
        <Modal.Dialog>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
        </Modal.Dialog>
    );
};

export default ModalBlock;
