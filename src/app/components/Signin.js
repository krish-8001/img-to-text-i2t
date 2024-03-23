import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import GoogleIcon from '@/public/google.png';
import Image from 'next/image';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { signIn } from "next-auth/react";

 const GoogleSignInPopup =({ open, onClose })  => {

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
                    </Grid>
                    <Grid item xs={1} container justifyContent="flex-end">
                        <Button onClick={onClose} style={{ padding: 16, minWidth: 0, width: 'auto', height: 'auto' }}>
                            <CloseIcon fontSize="large" />
                        </Button>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid container direction="column" alignItems="center" >
                    <h2>Let’s get started
</h2>
                    <Button
                        href="#"
                        variant="outlined"
                        sx={{ my: 2, mx: 1, padding: '6px 20px', borderRadius: '30px', textTransform: 'none' }}
                        onClick={() => signIn("google")}
                    >
                        <Image src={GoogleIcon} alt="Google" width={30} style={{ marginRight: '10px' }} />
                        Sign in With Google
                    </Button>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
export default GoogleSignInPopup;