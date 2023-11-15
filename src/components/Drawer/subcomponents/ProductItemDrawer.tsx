import { Icon } from '@iconify/react';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';

import { CartItem } from '../../../model/CartItem';
import QuantityInput from './QuantityButton';

type Props = {
  item: CartItem;
  cart: Array<CartItem>;
  setCart: (value: Array<CartItem>) => void;
};

const ProductItemDrawer = ({ item, cart, setCart }: Props) => {
  const changeQuantityHandler = (value: number) => {
    const cartIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === item.product.id,
    );

    if (cartIndex != -1) {
      const newCart = cart;
      newCart[cartIndex].quantity = value;
      setCart([...newCart]);
    }
  };

  return (
    <StyledCardController>
      <StyledCard>
        <CardMedia
          component="img"
          sx={{
            width: '104px !important',
            maxWidth: '104px !important',
            minWidth: '104px !important',
            marginLeft: '8px !important',
            backgroundSize: 'contain !important',
          }}
          image={item.product.photo}
        />
        <StyledCardContent>
          <Typography
            sx={{
              fontSize: 13,
              color: '#2C2C2C',
              width: '40%',
              fontFamily: 'Montserrat',
            }}
          >
            {item.product.name}
          </Typography>

          <div className="test">
            <Typography
              sx={{
                color: '#333',
                fontSize: 8,
                fontWeight: 400,
                fontFamily: 'Montserrat',
                position: 'absolute',
                transform: 'translate(0, -120%)',
              }}
            >
              Qtd:
            </Typography>
            <QuantityInput onChange={changeQuantityHandler} value={item.quantity} />
          </div>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: 14,
              color: '#000',
              whiteSpace: 'nowrap',
            }}
          >
            {`R$ ${(~~item.product.price * item.quantity).toString()}`}
          </Typography>
        </StyledCardContent>
      </StyledCard>
      <ItemDrawerDeleteButtonController>
        <ItemDrawerDeleteButton
          onClick={() => {
            const newCart = cart;
            const cartIndex = newCart.findIndex(
              (cartItem) => cartItem.product.id === item.product.id,
            );
            newCart.splice(cartIndex, 1);
            setCart([...newCart]);
          }}
        >
          <Icon icon="fluent:dismiss-12-regular" color="#FFF" width={12} height={12} />
        </ItemDrawerDeleteButton>
      </ItemDrawerDeleteButtonController>
    </StyledCardController>
  );
};

const StyledCardController = styled.div(() => ({
  position: 'relative',
  width: '100%',
  height: '104px',
  marginBottom: '24px',
}));

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  width: '100%',
  height: '104px',
  borderRadius: '8px !important',
  boxShadow: '-2px 2px 10px 0px rgba(0, 0, 0, 0.05)',
  '& .MuiPaper-root': {
    overflow: 'auto !important',
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0 32px 0 20px !important',
  gap: '24px',
}));

const ItemDrawerDeleteButtonController = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  position: 'absolute',
  transform: 'translate(0, -50%)',
  right: '0',
}));

const ItemDrawerDeleteButton = styled(IconButton)(() => ({
  backgroundColor: '#000 !important',
  width: '16px !important',
  height: '16px !important',
  padding: '0 !important',
  position: 'relative',
  transform: 'translate(50%, -104px)',
  zIndex: 2,
  transition: 'background-color .3s ease-in-out !important',
  '&:hover': {
    backgroundColor: 'var(--error) !important',
  },
}));

export default ProductItemDrawer;
