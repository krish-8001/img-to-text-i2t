"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  createTheme,
} from "@mui/material";
import logoImage from "../../../public/imaging.png";
import Signin from "./Signin";
import { signOut, useSession } from "next-auth/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const { status, data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
  };
  return (
    <>
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            flexWrap: "wrap",
            ml: { xs: 2, md: 22 },
            mr: { xs: 2, md: 22 },
            mb: 1,
            mt: 2,
          }}
        >
          
            <Image
              src={logoImage}
              alt="Logo"
              width={50}
              height={50}
              sx={{ ml: 2, mr: { xs: 2, md: 8 } }}
              onClick={() =>{ router.push("/")}}

            />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                ml: { xs: 2, md: 0 },
                fontWeight: "bold",
                textDecoration: 'none',
                '&:hover': {
                  cursor: 'default', 

                },
                textTransform: 'none',
              }}
              onClick={() =>{ router.push("/")}}

            >
              Image to Text Convert
            </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              onClick={() =>{ router.push("/")}}
              
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                  cursor: 'default', 

                },
                textTransform: 'none',
              }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick={() =>{ router.push("/#Features")}}

              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                  cursor: 'default', 

                },
                textTransform: 'none',
              }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick={() =>{ router.push("/#pricing")}}

              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                  cursor: 'default', 

                },
                textTransform: 'none',
              }}
            >
              Pricing
            </Link>
            <Link
              variant="button"
              color="text.primary"
              onClick={() =>{ router.push("/#FAQs")}}
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: 'none',
                '&:hover': {
                  color: '#5095f8',
                  cursor: 'default', 

                },
                textTransform: 'none',
              }}
            >
              FAQs
            </Link>
          </nav>

          {status === "authenticated" ? (
            <>
                          <div style={{ position: "relative" }}>

              <IconButton sx={{
                borderColor: '#1976d2',

              }}
                onClick={handleClick}>
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
              >
                <MenuItem onClick={() => router.push("/user")}>Settings</MenuItem>
                <MenuItem onClick={() =>{ router.push("/")
                signOut()
                                          }}
                >Logout</MenuItem>
              </Menu>
              </div>
            </>
          ) : (
            <Button
              href="#"
              variant="contained"
              color="primary"
              sx={{
                my: 0.5,
                mx: 1,
                padding: "6px 20px",
                borderRadius: "30px",
                textTransform: "none",
              }}
              onClick={() => {
                setIsSigninOpen(true);
              }}
            >
              Register or Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {isSigninOpen && (
        <Signin open={true} onClose={() => setIsSigninOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
