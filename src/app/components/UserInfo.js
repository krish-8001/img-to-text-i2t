"use client";
import React, { useState,useEffect } from 'react';
import { Typography, Box, Button, Container, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { signOut, useSession } from "next-auth/react";
import axios from 'axios';

const SettingsPage = () => {
  const [name, setName] = useState('John Doe');
  const [subscription, setSubscription] = useState('Free');
  const { status, data: session } = useSession();
  const [userData, setUserData] = useState(null);

  const handleUpgrade = () => {
   
  };
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
  return (
    <Container maxWidth="sm">
      <Box my={4} md={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Account Settings
        </Typography>
        <Divider />
        <Box my={3}>
          <Box mb={3}>
            <Typography variant="h5" gutterBottom>
              Account Information
            </Typography>
            <Typography variant="body1">
              Name: {session?.user.name}
            </Typography>
            <Typography variant="body1">
              Email: {session?.user.email}
            </Typography>
          </Box>
          <Typography variant="h5" gutterBottom>
            Subscriptions
          </Typography>
          <Typography variant="body1" gutterBottom md={5}>
            Manage your subscription
          </Typography>
          <Box p={2} boxShadow={3} borderRadius={5} bgcolor="background.paper" className="subscription-details" mt={3}>
            <Typography variant="body1" className="text-muted">Current Plan</Typography>
            <Typography variant="h5" className="mb-4 mt-1">{userData?.plan_name} </Typography>
            {/* <Button variant="contained" color="primary" onClick={handleUpgrade}>Start Subscription Now</Button> */}
          </Box>
          <Box mt={3}>
            <Typography variant="h5" gutterBottom>
              Payment History
            </Typography>
            <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>EndDate</TableCell>

            <TableCell>Payment ID</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData && userData.paymentdata.map((payment, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(payment.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(payment.endDate).toLocaleDateString()}</TableCell>

              <TableCell>{payment.payment_id}</TableCell>
              <TableCell>${payment.price}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SettingsPage;
