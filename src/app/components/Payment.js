import React ,{}from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import GoogleIcon from '@/public/google.png';
import Image from 'next/image';
import { Grid,Typography,Card,CardActions,CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Payment = ({ open, onClose,selectedPlan  }) => {
console.log("Payment ~ selectedPlan:", selectedPlan)
const { status, data: session } = useSession();
 const router = useRouter();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>
                <Grid container justifyContent="center">
                    <Grid item xs={11} container justifyContent="center">
                        <h2 style={{ textAlign: 'center' }}>Checkout</h2>
                    </Grid>
                    <Grid item xs={1} container justifyContent="flex-end">
                        <Button onClick={onClose} style={{ padding: 16, minWidth: 0, width: 'auto', height: 'auto' }}>
                            <CloseIcon fontSize="large" />
                        </Button>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
           
                <Grid  alignItems="center" justifyContent="center" ML={11} >
                <PayPalScriptProvider
                        options={{ 'client-id':"AWdXIA8XD5Ymld9ob3mAdn3BKM8hDkl7Z7BQ5mMAJOTVmiP5Czh7VlBQIzCguQ67yXvlDlQ7UySEauYq" }}
                    >
                        <PayPalButtons
                  style={{ layout: 'horizontal' }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value:  selectedPlan?.price ,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                      console.log("details:", details)
                      //handlePaymentSuccess(details, data);
                      fetch(`/api/user`, {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          selectedPlan,
                          userdata: session,
                          data,
                          details
                        }),
                      }).then((res) => {
                        
                          router.push('/user');
                        
                      }).catch((error) => {
                        console.error('Error:', error);
                      });
                    });
                  }}
                />
                        
                    </PayPalScriptProvider>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
export default Payment;
