import { Icon } from '@iconify/react';
import styled from 'styled-components';

import CartButton from './subcomponents/CartButton';

type Props = {
  title: string;
  productsCount: number;
  subtitle: string;
  setDrawerOpened: (value: boolean) => void;
};

const Navbar = ({ title, subtitle, productsCount, setDrawerOpened }: Props) => {
  return (
    <NavbarContainer>
      <div className="navbar-brand">
        <NavbarTitle>{title}</NavbarTitle>
        <NavbarSubtitle>{subtitle}</NavbarSubtitle>
      </div>
      <div className="actions">
        <CartButton
          startIcon={<Icon icon="fluent:cart-24-filled" />}
          color="primary"
          onClick={() => setDrawerOpened(true)}
        >
          {productsCount}
        </CartButton>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav(() => ({
  width: 'calc(100% - 128px)',
  height: '72px',
  backgroundColor: 'var(--primary)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 64px',
  position: 'absolute',
  top: '0',

  '@media (max-width: 768px)': {
    padding: '0 32px',
    width: 'calc(100% - 64px)',
    height: '56px',
  },
}));

const NavbarTitle = styled.span(() => ({
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#FFF',
  marginRight: '4px',
}));

const NavbarSubtitle = styled.span(() => ({
  fontWeight: '300',
  color: '#FFF',
}));

export default Navbar;
