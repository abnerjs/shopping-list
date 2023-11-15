import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
      <span>MKS sistemas © Todos os direitos reservados</span>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer(() => ({
  width: '100%',
  height: '32px',
  backgroundColor: '#EEE',
  color: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  position: 'fixed',
  bottom: 0,
}));

export default Footer;
