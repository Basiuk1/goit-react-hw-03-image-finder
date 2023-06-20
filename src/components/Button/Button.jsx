import PropTypes from 'prop-types';
import React from 'react';
import { LoadButton, ButtonContainer } from './Button.styled';

const Button = ({ onLoadMore }) => (
  <ButtonContainer>
    <LoadButton type="button" onClick={onLoadMore}>
      Load more
    </LoadButton>
  </ButtonContainer>
);

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
