import { Button, ButtonProps, styled } from '@mui/material';

const ProductBuyButton = ({ children }: ButtonProps) => {
  return (
    <ProductBuyButtonStyled variant="contained" fullWidth>
      {children}
    </ProductBuyButtonStyled>
  );
};

const ProductBuyButtonStyled = styled(Button)(() => ({
  backgroundColor: '#000 !important',
  borderRadius: '0 !important',
  height: '72px !important',
  fontWeight: 700,
  fontSize: '1.2rem !important',
  transition: 'background-color .6s ease-in-out !important',
  '&:hover': {
    backgroundColor: '#000000DD !important',
  },
}));

export default ProductBuyButton;
