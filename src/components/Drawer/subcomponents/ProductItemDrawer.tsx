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
        <StyledCardMedia
          style={{ objectFit: 'contain' }}
          component="img"
          image={item.product.photo}
        />
        <StyledCardContent>
          <StyledCardTitle>{item.product.name}</StyledCardTitle>

          <BottomTextController>
            <div className="quantityBox">
              <OcasionalText>Qtd:</OcasionalText>
              <QuantityInput onChange={changeQuantityHandler} value={item.quantity} />
            </div>
            <PriceText>
              {`R$ ${(~~item.product.price * item.quantity).toString()}`}
            </PriceText>
          </BottomTextController>
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

  '@media (max-width: 768px)': {
    height: '240px',
  },
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

  '@media (max-width: 768px)': {
    height: '240px',
    flexDirection: 'column',
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  width: '104px !important',
  maxHeight: '104px !important',
  objectFit: 'contain',
  backgroundSize: 'contain !important',
  marginLeft: '8px !important',

  '@media (max-width: 768px)': {
    width: '100% !important',
    maxHeight: 'unset !important',
    height: '60%',
    marginLeft: '0 !important',
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  padding: '0 16px 0 12px !important',
  gap: '24px',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '0 16px 0 16px !important',
    width: 'unset',
  },
}));

const StyledCardTitle = styled(Typography)(() => ({
  margin: '0',
  fontSize: 13,
  color: '#2C2C2C',
  width: '40%',
  fontFamily: 'Montserrat !important',

  '@media (max-width: 768px)': {
    width: '100%',
    minWidth: '100%',
  },
}));

const OcasionalText = styled(Typography)(() => ({
  color: '#333',
  fontSize: '8px !important',
  fontWeight: '400 !important',
  fontFamily: 'Montserrat !important',
  position: 'absolute',
  transform: 'translate(0, -120%)',

  '@media (max-width: 768px)': {
    display: 'none',
  },
}));

const BottomTextController = styled.div(() => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
}));

const PriceText = styled(Typography)(() => ({
  fontFamily: 'Montserrat !important',
  fontWeight: '700 !important',
  fontSize: '14px !important',
  color: '#FFF !important',
  backgroundColor: '#373737 !important',
  padding: '4px 8px !important',
  borderRadius: '4px !important',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 768px)': {
    fontSize: '18px !important',
    padding: '4px 8px !important',
  },
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
