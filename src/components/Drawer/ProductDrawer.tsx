import { Icon } from '@iconify/react';
import { Drawer, IconButton } from '@mui/material';
import styled from 'styled-components';

import { CartItem } from '../../model/CartItem';
import ProductBuyButton from './subcomponents/ProductBuyButton';
import ProductItemDrawer from './subcomponents/ProductItemDrawer';

type Props = {
  drawerOpened: boolean;
  setDrawerOpened: (value: boolean) => void;
  cart: Array<CartItem>;
  setCart: (value: Array<CartItem>) => void;
};

const ProductDrawer = ({ drawerOpened, setDrawerOpened, cart, setCart }: Props) => {
  return (
    <ProductDrawerStyled
      anchor="right"
      open={drawerOpened}
      onClose={() => setDrawerOpened(false)}
    >
      <ProductDrawerHeader>
        <ProductDrawerTitle>
          Carrinho
          <br />
          de compras
        </ProductDrawerTitle>

        <CloseDrawerButton onClick={() => setDrawerOpened(false)}>
          <Icon icon="fluent:dismiss-12-regular" color="#FFF" width={24} height={24} />
        </CloseDrawerButton>
      </ProductDrawerHeader>

      <ProductDrawerItemList>
        {cart.map((item) => (
          <ProductItemDrawer
            cart={cart}
            setCart={setCart}
            item={item}
            key={item.product.id}
          />
        ))}
      </ProductDrawerItemList>

      <ProductsTotalPrice>
        <span>Total</span>
        <span>
          {`R$ ${cart.reduce(
            (acc, item) => acc + Number.parseFloat(item.product.price) * item.quantity,
            0,
          )}`}
        </span>
      </ProductsTotalPrice>

      <ProductBuyButton
        onClick={() => {
          setCart([]);
          setDrawerOpened(false);
        }}
      >
        Finalizar compra
      </ProductBuyButton>
    </ProductDrawerStyled>
  );
};

const ProductDrawerStyled = styled(Drawer)(() => ({
  width: '480px !important',
  '& .MuiDrawer-paper': {
    width: '480px !important',
    backgroundColor: 'var(--primary) !important',
    overflow: 'hidden !important',
  },
}));

const ProductDrawerHeader = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '16px 16px 32px 40px',
}));

const ProductDrawerTitle = styled.h2(() => ({
  fontSize: '1.5rem',
  lineHeight: '1.8rem',
  fontWeight: 700,
  color: '#FFF',
  margin: '0',
}));

const ProductDrawerItemList = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '8px 32px',
  overflowY: 'auto',
}));

const ProductsTotalPrice = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'calc(100% - 64px)',
  padding: '8px 32px',
  marginTop: 'auto',
  marginBottom: '12px',
  color: '#FFF',
  fontWeight: 700,
  fontSize: '1.2rem',
}));

const CloseDrawerButton = styled(IconButton)(() => ({
  backgroundColor: '#000 !important',
  transition: 'all .6s ease-in-out !important',
  '&:hover': {
    backgroundColor: '#000000BB !important',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.25)',
  },
}));

export default ProductDrawer;
