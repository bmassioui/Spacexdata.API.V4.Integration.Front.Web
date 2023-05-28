import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { LoginTwoTone } from '@mui/icons-material';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

function Content() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 4.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            SignOut
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 3 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            High performance management tool for SpaceX management UI, SignIn
            and explore our features
          </TypographyH2>

          <Grid container>
            <Grid item md={12}>
              <TypographyH2 sx={{ mb: 2 }} variant="h2">
                Sign Out successful.
                <br />
                We look forward to having you back to benefit from our features.
              </TypographyH2>{' '}
            </Grid>
          </Grid>

          <Button
            component={RouterLink}
            to="/auth/signin"
            size="large"
            variant="contained"
            startIcon={<LoginTwoTone />}
            sx={{
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
          >
            Sign In to SpaceX UI
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Content;
