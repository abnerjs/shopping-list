import './App.css';

import { Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductDrawer from './components/Drawer/ProductDrawer';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductItem from './components/ProductItem';
import { CartItem } from './model/CartItem';
import { Product, ProductList } from './model/product';
import API_URL, { obterProdutosPorAPI } from './repository/products';

function App() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [products, setProducts] = useState<ProductList>();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Array<CartItem>>([]);

  useEffect(() => {
    setLoading(true);
    API_URL.get('/products').then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  const addToCartHandler = (value: Product) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.product.id === value.id);
    if (itemIndex !== -1) {
      const newCart = cart;
      newCart[itemIndex].quantity += 1;
      setCart([...newCart]);
    } else {
      setCart([
        ...cart,
        {
          product: value,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <MainContainer>
      <Navbar
        title="MKS"
        subtitle="Sistemas"
        setDrawerOpened={setDrawerOpened}
        productsCount={cart?.length}
      />

      <ProductsGrid container>
        {!loading &&
          products?.products.map((item) => (
            <ItemGrid item xs={12} sm={3} key={item.id}>
              <ProductItem onBuy={addToCartHandler} item={item} />
            </ItemGrid>
          ))}
        {loading &&
          Array.from(Array(8).keys()).map((item) => (
            <ItemGrid item xs={12} sm={3} key={item}>
              <Skeleton
                sx={{ borderRadius: 2 }}
                variant="rectangular"
                width={280}
                height={320}
              />
            </ItemGrid>
          ))}
      </ProductsGrid>

      <ProductDrawer
        drawerOpened={drawerOpened}
        setDrawerOpened={setDrawerOpened}
        cart={cart}
        setCart={setCart}
      />

      <Footer />
    </MainContainer>
  );
}

App.displayName = 'App';

const MainContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--bg-primary)',
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0 !important',
    backgroundColor: 'transparent !important',
  },
}));

const ProductsGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '72px 0 32px 0 !important',
  padding: '20px 90px',
  gap: '24px 0',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px !important',
    backgroundColor: 'transparent !important',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '8px !important',
    backgroundColor: 'rgba(0, 0, 0, 0.1) !important',
  },
}));

const ItemGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default App;
