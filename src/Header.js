import React ,{useState}from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar,Grid, Typography} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  Card, CardContent } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const mock = [
  {
    step:"step 1",
    title: 'Submit your information',
    subtitle:
    ' Fill out our simple and secure form to send your information to lenders.',  
    logo:"https://rapidfundcenter.com/static/assets/images/req1.svg",
    
  },
  {
    step:"step 2",
    title: 'Get approval',
    subtitle:
    'Lenders will approve or deny your loan request as soon as next business day.',
    logo:'https://rapidfundcenter.com/static/assets/images/req2.svg',
       
  },
  {
    step:"step 3",
    title: 'Check your account',
    subtitle:
    ' If your request is approved, the fund get directly transferred into your account in as soon as next business day.',
    logo:"https://rapidfundcenter.com/static/assets/images/req3.svg"
  },
];

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};


const Header = () => {
  const[mobileOpen,setMobileOpen]=useState(false)
  //handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const defaultTheme = createTheme();
  
   
  // Validation Form 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    loanAmount: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    loanAmount: ''
  });

  const customTheme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif', // Set font-family to Inter
    },
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before submitting
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // Check if there are no errors before submitting
    if (Object.values(newErrors).every((error) => !error)) {
      // Perform form submission logic here
      console.log('Form submitted successfully:', formData);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: ''})
    
  };

  const validateForm = (data) => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      loanAmount: ''
    };

    // Example validation - add your own validation logic here
    if (!data.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!data.loanAmount.trim()) {
      newErrors.loanAmount = 'Loan Amount is required';
    } else if (isNaN(data.loanAmount) || +data.loanAmount <= 0) {
      newErrors.loanAmount = 'Invalid loan amount';
    }

    return newErrors;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <ThemeProvider theme={customTheme}>
    <Box >
      {/* Header */}
        <Box>
          <AppBar component={'nav'} sx={{ bgcolor: "#f8f9fa" }}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <span className="navbar-brand mb-0 ms-1 h1">
                  <img src="https://rapidfundcenter.com/static/assets/images/logo.svg" alt="RapidFoundCenter Logo" style={{ height: '40px', marginRight: '10px' }} />
                </span>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Hero */}
        <Grid container spacing={2} sx={{ pt: { xs: 12, sm: 17 }, px: { xs: 5, sm: 7 } }}>
            {/* Content on the left */}
            <Grid item xs={12} md={6}>
                <div>
                <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 'bold', maxWidth: '90%' }}>
                  <h1>
                    <b>We take your financial <br/>
                     problem <span className='text-primary'>seriously.</span> 
                    </b></h1>
                </Typography>
                <Typography variant="body1">
                Get started by submitting a loan request. Enter amount below between $100 - $10000.
                </Typography>
                <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="given-name"
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            required
                             fullWidth
                             name="firstName"
                             label="firstName"
                             type="firstName"
                             id="firstName"
                             value={formData.firstName}
                             onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                             error={!!errors.lastName}
                             helperText={errors.lastName}
                             required
                             fullWidth
                             name="lastName"
                             label="lastName"
                             type="lastName"
                             id="lastName"
                             autoComplete="off"
                             value={formData.lastName}
                             onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                           error={!!errors.email}
                           helperText={errors.email}
                           required
                           fullWidth
                           name="email"
                           label="Email"
                           type="email"
                           id="email"
                           autoComplete="off"
                           value={formData.email}
                           onChange={handleChange}
                            
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                              error={!!errors.loanAmount}
                              helperText={errors.loanAmount}
                              required
                              fullWidth
                              name="loanAmount"
                              label="Loan Amount"
                              type="number"
                              id="loanAmount"
                              autoComplete="off"
                              value={formData.loanAmount}
                              onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '10px' }}>
                  &copy; By clicking 'Request Now', you agree to our
                  <span className='text-primary'> Privacy Policy, Terms, E-Consent, Rate & Fees, </span>
                  and receive special offers from us and our marketing partners via email communication.
                </Typography>
              </Grid>

                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Register Now
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>  
                </div>
            </Grid>
            {/* Image on the right */}
            <Grid item xs={12} md={6}>
                <img src="https://rapidfundcenter.com/static/assets/images/banner.svg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
            </Grid>       
        </Grid>
        {/* About */}
        <Container sx={{ my: 10 }}>
            <Typography variant="h2" mt={4} mb={4} sx={{textAlign:"center", marginTop:"100px", marginBottom:"80px"}}>About<span className='text-primary'> Us ?</span></Typography>
            <Grid container spacing={4} sx={{paddingBottom:"80px",textAlign:"center"}}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold'}}>Easy</Typography>
                    <Typography variant="body2" component="p">Loan Request</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardContent >
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold'}}>Easy</Typography>
                    <Typography variant="body2" component="p">Processing Time</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold'}}>Minimal</Typography>
                    <Typography variant="body2" component="p">Lending Sources</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}  md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold'}}>Simple & Secure</Typography>
                    <Typography variant="body2" component="p">Process</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            </Container>

      {/* request */}
      <Box sx={{ px: { xs: 5, sm: 5 }, pb: 10 }}>
              <Box marginBottom={4}>
                <Box marginBottom={2}>
                  <Typography
                    variant="h3"
                    color="text.primary"
                    align={'center'}
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                   How to <span className='text-primary'>Request</span>
                  </Typography>
                </Box>
               
              </Box>
              <Grid container spacing={2} >
                {mock.map((item, i) => (
                  <Grid item xs={12} md={4} key={i}>
                    <Box width={1} height={1} data-aos={'fade-up'}>
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                      >
                       
                        {/* <Box
                          component={Avatar}
                          width={60}
                          height={60}
                          marginBottom={2}
                          bgcolor={alpha(theme.palette.primary.main, 0.1)}
                          color={theme.palette.primary.main}
                        >
                          {item.icon}
                        </Box> */}
                        <Box
                              component={Avatar}
                              width={60}
                              height={60}
                              marginBottom={2}
                              bgcolor={alpha(theme.palette.primary.main, 0.1)}
                              color={theme.palette.primary.main}
                            >
                              <img src={item.logo} alt="logo" />
                        </Box>
                        <Typography
                          variant={'h6'}
                          gutterBottom
                          sx={{ fontWeight: 500, textAlign: 'left' }}
                        >
                          {item.step}
                        </Typography>
                        <Typography
                          variant={'h6'}
                          gutterBottom
                          sx={{ fontWeight: 500 }}
                          align={'center'}
                        >
                          {item.title}
                        </Typography>
                        <Typography align={'center'} color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'center'}
                  style={{ paddingTop: '50px', paddingBottom: '50px' }} // Adjust the padding values as needed

                >
                  <Button
                    component={'a'}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={isMd ? false : true}
                    href={'https://mui.com/store/items/the-front-landing-page/'}
                    target={'_blank'}
                    
                  >
                    Request Now
                  </Button>
                </Box>
            </Box>
          {/* Faq */}
          <Box sx={{ px: { xs: 2, sm: 5 }, pb: 4 }}>
              <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
              Frequently Asked<br/><span className='text-primary'>Questions</span> 
              </Typography>
            </Box>
            <Box style={{marginLeft:"100px", marginRight:"100px" ,marginTop:"70px"}} >
              <Box marginBottom={6} >
                <FaqGroupItem align={'center'}
                  items={[
                    {
                      title: 'Can I purchase a gift certificate?',
                      subtitle:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    },
                    {
                      title: 'What is your return policy?',
                      subtitle:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    },
                    {
                      title: 'Do you sell gift cards?',
                      subtitle:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    },
                    {
                      title: 'Can I change plans later on?',
                      subtitle:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    },
                    {
                      title: 'Is this a subscription service?',
                      subtitle:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    },
                  ]}
                />
              </Box>
              
            </Box>

            <Box sx={{ px: { xs: 2, sm: 5 }, pb: 10 }}>
              <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
              Ready To Request <span className='text-primary'>Seamlessly?</span> 
              </Typography>
              <Typography
                variant={'h6'}
                component={'p'}
                color={'text.secondary'}
                align={'center'}
              >
                Request now from the comfort of your home and you may receive funds as
                <br />
                soon as the next business day, if approved by the lender.           
                 </Typography>
                 <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'center'}
                  style={{ paddingTop: '50px', paddingBottom: '50px' }} // Adjust the padding values as needed

                >
                  <Button
                    component={'a'}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={isMd ? false : true}
                    href={'https://mui.com/store/items/the-front-landing-page/'}
                    target={'_blank'}
                    
                  >
                    Request Now
                  </Button>
                </Box>

            </Box>
                <Grid container spacing={2} style={{ backgroundColor: '#2f3042' }} sx={{ px: { xs: 2, sm: 5 }, pb: 10 }}>
                  {/* First Column (Logo) */}
                  <Grid item xs={12} sm={12} md={6}>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      width={1}
                      flexDirection={{ xs: 'column', sm: 'row' }}
                    >
                      <img src="https://rapidfundcenter.com/static/assets/images/logo-f.svg" alt=" Logo" width="200" height="100"/>
                    </Box>
                  </Grid>

                  {/* Second Column (Links and Address) */}
                  <Grid item xs={12} sm={6} md={3} style={{ color: '#EEEEEE99' }} sx={{ pt: '15px' }}>
                    <ul style={{paddingTop: '20%'}}>
                       <p><h5>How It Work</h5></p>
                      <p><h5>Terms of Services</h5></p>
                      <p><h5>Privacy Policy</h5></p>
                      <p><h5>Do not sell my information</h5></p>
                    </ul>
                  </Grid>
                  {/* Third Column (Links and Address) */}
                  <Grid item xs={12} sm={6} md={3} style={{ color: '#EEEEEE99' }} sx={{ pt: '15px' }}>
                  <ul style={{paddingTop: '20%'}}>
                    <p><h5>E-Consent</h5></p>
                    <p><h5>Disclaimer</h5></p>
                    <p><h5>FAQs</h5></p>
                    <p><h5>Unsubscribe</h5></p>
                    </ul>
                  </Grid>

                  {/* Fourth Column (Text) */}
                  <Grid item xs={12}>
                    <Typography variant="body2" color="textPrimary" fontSize="12px" lineHeight="14px" marginBottom="0" padding="78px 0 0" display='flex'>
                      <p style={{ color: '#EEEEEE99' }}> {/* Change text color to white */}
                        THE OPERATOR OF THIS WEBSITE IS NOT A LENDER, is not a loan broker, and does not make lending decisions on behalf of lenders. This Web Site does not constitute an offer or solicitation to lend. This site will submit the information you provide to a lender who makes short-term cash loans to borrowers who meet its lending criteria. Providing your information on this Website does not guarantee that you will be approved for a short term cash loan. The operator of this Web Site is not an agent, representative or broker of any lender and does not endorse any particular lender or charge you for any service or product. Not all lenders can provide the maximum amount advertised. Cash transfer times may vary between lenders and may depend on your individual financial institution. In some circumstances faxing may be required. This service is not available in all states, and the states serviced by this Web Site may change from time to time and without notice. For details, questions or concerns regarding your short-term cash loan, please contact your lender directly. Short term cash loans are meant to address immediate cash needs and are not a long-term solution for financial problems.
                        Residents of some states may not be eligible for a short term cash loan based upon lender requirements.
                      </p>
                    </Typography>
                  </Grid>
                </Grid>
    
    </Box>
    </ThemeProvider>
  )
};

export default Header