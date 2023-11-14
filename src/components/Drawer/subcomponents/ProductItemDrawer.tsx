import { Icon } from '@iconify/react';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';

import QuantityInput from './QuantityButton';

const ProductItemDrawer = () => {
  return (
    <StyledCardController>
      <StyledCard>
        <CardMedia
          component="img"
          sx={{ width: 104 }}
          image="https://via.placeholder.com/150"
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
            Xbox Series X 1TB SSD
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
            <QuantityInput />
          </div>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: 14,
              color: '#000',
            }}
          >
            R$10,00
          </Typography>
        </StyledCardContent>
      </StyledCard>
      <ItemDrawerDeleteButtonController>
        <ItemDrawerDeleteButton>
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
