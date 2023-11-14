import './Navbar.css';

import { Icon } from '@iconify/react';

import CartButton from '../CartButton';

type Props = {
  title: string;
  productsCount: number;
  subtitle: string;
};

const Navbar = ({ title, subtitle, productsCount }: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
      <div className="actions">
        <CartButton startIcon={<Icon icon="fluent:cart-24-filled" />} color="primary">
          {productsCount}
        </CartButton>
      </div>
    </nav>
  );
};

export default Navbar;
