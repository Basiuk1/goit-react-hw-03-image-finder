import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled';

const Modal = ({ selectedImage, onCloseModal }) => (
  <Overlay onClick={onCloseModal}>
    <ModalStyle>
      <img src={selectedImage.largeImageURL} alt="" />
    </ModalStyle>
  </Overlay>
);

export default Modal;

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
