"use client";

import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { signOut, useSession } from "next-auth/react";
import Signin from "./Signin";
import Payment from "./Payment";
import axios from 'axios';


export default function Pricing() {

  const { status, data: session } = useSession();
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setselectedPlan] = useState(null);
  const [userData, setUserData] = useState(null);
  console.log("Pricing ~ userData:", userData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/userdata',{user:session});
        console.log("fetchData ~ response:", response)
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (status === "authenticated") {
      fetchData();
    }
  }, [status]);

  const plans = [
    {
      title: 'Free',
      price: '0',
      description: [

        'Image Size Upto 10 MB',
        'Limited converts *',
        'Help center access',
        'No credit card required',

      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Standard',
      subheader: 'Recommended',
      price: '5',
      description: [
        'Image Size Upto 25 MB',
        '10K Images for per Week',
        'Help center access',
        'Email Support',
        'Dedicated Support',
      ],
      buttonText: 'Start now',
      buttonVariant: 'contained',
    },
    {
      title: 'Premium',
      price: '10',
      description: [
        'Image Size Upto 50 MB',
        '25k Images for per Week',
        'Help center access',
        'Email Support',
        'Dedicated Support',
        'High Priority Support',
      ],
      buttonText: 'Start now',
      buttonVariant: 'outlined',
    },
  ];





  return (<>

    <Container
      id="pricing"
      sx={{
        pt: { xs: 2, sm: 6 },
        pb: { xs: 6, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        //     background: 'radial-gradient(97.99% 1370.78% at 0.83% 2.6%, rgb(198, 218, 255, 50%) 0%, rgba(204, 225, 255, 0.5) 100%)',

      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h3" >
          Pricing
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Choose the plan that suits you.

        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {plans.map((tier) => (

          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Standard' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Standard' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Standard'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color:
                      tier.title === 'Standard' ? 'primary.contrastText' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Standard' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color:
                      tier.title === 'Standard'
                        ? 'primary.contrastText'
                        : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Standard'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Standard'
                            ? 'primary.contrastText'
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                {status === "authenticated" ? (<Button
  fullWidth
  variant={tier.buttonVariant}
  component="a"
  disabled={
    (userData?.plan_name === "Premium") ||
    (userData?.plan_name === "Standard" && (tier.title === "Free" || tier.title === "Standard")) ||
    tier.title === "Free"
  }  onClick={() => {
    setselectedPlan(tier);
    setIsPaymentOpen(true);
  }}
  style={{
    color: (tier.buttonVariant === "contained" ) ? 'white' : 'inherit'
  }}
>
  {userData?.plan_name === tier.title ? "CURRENT PLAN" : tier.buttonText}
</Button>

                ) : (
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    component="a"
                    onClick={() => {
                      setIsSigninOpen(true);
                    }}

                  >
                    {tier.buttonText}
                  </Button>
                )}

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    {isSigninOpen && <Signin open={true} onClose={() => setIsSigninOpen(false)} />}
    {isPaymentOpen && <Payment open={true} onClose={() => setIsPaymentOpen(false)} selectedPlan={selectedPlan}
    />}


  </>

  );
}