import './App.css';

import { Grid } from '@mui/material';
import styled from 'styled-components';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <MainContainer>
      <Navbar title="MKS" subtitle="Sistemas" productsCount={10} />

      <ProductsGrid container>
        {Array.from(Array(8).keys()).map((item) => (
          <ItemGrid item xs={3} key={item}>
            <ProductItem />
          </ItemGrid>
        ))}
      </ProductsGrid>

      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--bg-primary)',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}));

const ProductsGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '72px 0 32px 0 !important',
  maxWidth: 'calc(100% - 280px) !important',
  maxHeight: 'calc(100% - 104px) !important',
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
  padding: '24px 16px !important',
}));

export default App;
