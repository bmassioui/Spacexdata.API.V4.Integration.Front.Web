import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';


function LaunchDetails() {
  return (
    <>
      <Helmet>
        <title>Launch - Details</title>
      </Helmet>
      <PageTitleWrapper>
      </PageTitleWrapper>
      <Container maxWidth="lg">
       Details here
      </Container>
      <Footer />
    </>
  );
}

export default LaunchDetails;
