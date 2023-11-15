import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

import { Product } from '../model/product';

type Props = {
  item: Product;
};

const ProductItem = ({ item }: Props) => {
  return (
    <ProductCard>
      <CardMedia sx={{ height: 180 }} image={item.photo} />
      <StyledCardContent>
        <CardHeader>
          <Typography
            sx={{
              color: '#2C2C2C',
              fontFamily: 'Montserrat',
              fontSize: 16,
            }}
          >
            {item.name}
          </Typography>
          <CardPrice>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Montserrat',
                fontSize: 15,
                lineHeight: '15px',
                whiteSpace: 'nowrap',
                fontWeight: 700,
              }}
            >
              {`R$ ${(~~item.price).toString()}`}
            </Typography>
          </CardPrice>
        </CardHeader>
        <Typography
          sx={{
            color: '#2C2C2C',
            fontFamily: 'Montserrat',
            fontSize: 10,
            fontWeight: 300,
          }}
        >
          Redesigned from scratch and completely revised.
        </Typography>
      </StyledCardContent>
      <BuyActions>
        <BuyButton startIcon={<Icon icon="icon-park-outline:mall-bag" />}>
          Comprar
        </BuyButton>
      </BuyActions>
    </ProductCard>
  );
};

const ProductCard = styled(Card)(() => ({
  borderRadius: '8px !important',
  maxWidth: '280px !important',
  height: '320px !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '16px !important',
  flexGrow: 1,
}));

const CardHeader = styled.div(() => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '12px',
}));

const CardPrice = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#373737',
  borderRadius: '8px',
  padding: '4px 8px',
  marginLeft: '8px',
}));

const BuyActions = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: '0 !important',
  height: 'auto !important',
}));

const BuyButton = styled(Button)(() => ({
  width: '100% !important',
  backgroundColor: '#0F52BA !important',
  color: '#fff !important',
  borderRadius: '0 0 8px 8px !important',
  fontWeight: '600 !important',
  fontFamily: 'Montserrat !important',
  lineHeight: '2 !important',
}));

export default ProductItem;
