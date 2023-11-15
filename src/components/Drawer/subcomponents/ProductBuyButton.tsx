import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';

const ProductBuyButton = ({ children, onClick }: ButtonProps) => {
  return (
    <ProductBuyButtonStyled onClick={onClick} variant="contained" fullWidth>
      {children}
    </ProductBuyButtonStyled>
  );
};

const ProductBuyButtonStyled = styled(Button)(() => ({
  backgroundColor: '#000 !important',
  borderRadius: '0 !important',
  height: '72px !important',
  minHeight: '72px !important',
  fontWeight: 700,
  fontSize: '1.2rem !important',
  transition: 'background-color .6s ease-in-out !important',
  '&:hover': {
    backgroundColor: '#000000DD !important',
  },
}));

export default ProductBuyButton;
