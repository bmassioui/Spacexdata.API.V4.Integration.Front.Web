import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Content from './Content';

const SignOutWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function SignIn() {
  return (
    <SignOutWrapper>
      <Helmet>
        <title>SpaceX management UI</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Content />
        </Card>
      </Container>
    </SignOutWrapper>
  );
}

export default SignIn;
