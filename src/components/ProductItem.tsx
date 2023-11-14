import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@mui/material';

const ProductItem = () => {
  return (
    <ProductCard>
      <CardMedia sx={{ height: 140 }} image="https://placehold.co/600x400.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apple Watch Series 4 GPS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Redesigned from scratch and completely revised.
        </Typography>
      </CardContent>
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
}));

const BuyActions = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 !important',
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
