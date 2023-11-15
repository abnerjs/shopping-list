import { Button, ButtonProps, styled } from '@mui/material';

const CartButton = ({ children, ...props }: ButtonProps) => {
  return (
    <div className="button-badge">
      <CartButtonWithoutBadge {...props}>{children}</CartButtonWithoutBadge>
    </div>
  );
};

const CartButtonWithoutBadge = styled(Button)<ButtonProps>(() => ({
  boxShadow: 'none',
  backgroundColor: '#FFF',
  color: '#000',
  fontWeight: 700,
  borderRadius: 8,
  padding: '0.3rem 1rem',
  transition: 'all ease .3s',

  '&:hover': {
    backgroundColor: '#FFF',
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.25)',
  },
}));

export default CartButton;
