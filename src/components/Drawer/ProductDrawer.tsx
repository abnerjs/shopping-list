import { Icon } from '@iconify/react';
import { Drawer, IconButton } from '@mui/material';
import styled from 'styled-components';

type Props = {
  drawerOpened: boolean;
  setDrawerOpened: (value: boolean) => void;
};

const ProductDrawer = ({ drawerOpened, setDrawerOpened }: Props) => {
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
    </ProductDrawerStyled>
  );
};

const ProductDrawerStyled = styled(Drawer)(() => ({
  width: '400px !important',
  '& .MuiDrawer-paper': {
    width: '400px !important',
    backgroundColor: 'var(--primary) !important',
  },
}));

const ProductDrawerHeader = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '16px 16px 48px 40px',
}));

const ProductDrawerTitle = styled.h2(() => ({
  fontSize: '1.5rem',
  lineHeight: '1.8rem',
  fontWeight: 700,
  color: '#FFF',
  margin: '0',
}));

const CloseDrawerButton = styled(IconButton)(() => ({
  backgroundColor: '#000 !important',
}));

export default ProductDrawer;