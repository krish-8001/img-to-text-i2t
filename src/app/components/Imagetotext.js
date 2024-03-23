"use client";
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import { Typography, Paper, Box } from '@mui/material';

import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useRouter } from 'next/navigation';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { signOut, useSession } from "next-auth/react";

const App = () => {
  const { status, data: session } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/userdata', { user: session });
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
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const acceptedFile = acceptedFiles[0];
      console.log("onDrop ~ acceptedFile:", acceptedFile)
      console.log("onDrop ~ acceptedFile:", status)
      const acceptedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];

      if (!acceptedTypes.includes(acceptedFile.type)) {
        setError('Please upload a valid image file ');
        return;
      }

      if (status === "authenticated") {
        if (userData?.plan_name === 'Free' && acceptedFile.size > 10 * 1024 * 1024) {
          setError(`Oops! The image size exceeds the allowed limit of 10 MB. Upgrade your plan for bigger and better uploads! 🚀`);
          return;
        }
        if (userData?.plan_name === 'Standard' && acceptedFile.size > 25 * 1024 * 1024) {
          setError(`Oops! The image size exceeds the allowed limit of 25 MB. Upgrade your plan for bigger and better uploads! 🚀`);
          return;
        }
        if (userData?.plan_name === 'Premium' && acceptedFile.size > 50 * 1024 * 1024) {
          setError(`Image size exceeds the allowed limit of 50 MB.`);
          return;
        }
      }
      else {
        if (acceptedFile.size > 8 * 1024 * 1024) {
          setError(`Image size exceeds the allowed limit of 8 MB. Please sign in to increase your upload limit.`);
          return;
        }
      }

      handleImageChange(acceptedFile);
    }
  }, [status,userData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop});

  const handleImageChange = (file) => {
    setImage(URL.createObjectURL(file));
    setError('');
  };

  const handleSubmit = () => {
    console.log(image.size, "image.size")
    if (!image) {
      setError('Please upload an image before converting.');
      return;
    }








    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Reset the "Copied" text after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
  };
  const router = useRouter();

  const redirectToHome = () => {
    setText('');
    setImage('');
  };
  return (
    <Container maxWidth="ls" id="home" >
      <Grid container alignItems="center" justifyContent="center" mt={11}>

        <Grid item xs={12} md={7}>

          <Typography variant="h4" align="center" gutterBottom>
            Image to Text Converter
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" gutterBottom md={4}>
            Turn picture into text with our free image to text converter. Simply upload your photos in our online OCR and extract text from image with a single click.



          </Typography>


          {isLoading && (
            <>
              <LinearProgress variant="determinate" value={progress} mt={3} />
              <Typography variant="body2" align="center" gutterBottom mt={3} >
                Converting: {progress}%
              </Typography>
            </>
          )}
          {!isLoading && !text && (
            <div >
              {image ? (

                <Grid mt={3} align="center"  >

                  <img src={image} alt="Preview" height="100" /> </Grid>
              ) : (
                <>
                  <Paper {...getRootProps({ className: 'dropzone' })} elevation={4} variant="outlined" style={{ height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px dashed #aaa', borderRadius: '8px' }}>
                    <input {...getInputProps({ accept: 'jpg,.jpeg,.gif,.png,.bmp,.jpe,.jif,.jfif,.jfi,.webp' })} accept=".jpg,.jpeg,.gif,.png,.bmp,.jpe,.jif,.jfif,.jfi,.webp" />
                    <IconButton>
                      <CloudUploadIcon />
                    </IconButton>
                    <Typography variant="body2" align="center" gutterBottom>
                      Drag 'n' drop an image here, or click to <span style={{ color: 'blue', textDecoration: 'underline' }}>select an image</span>
                    </Typography>
                  </Paper>


                </>
              )}
              {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                style={{ marginTop: '1rem' }}
              >
                Convert
              </Button>
            </div>
          )}
          {!isLoading && text && (
            <>
              <Button
                variant="outlined"
                startIcon={<FileCopyIcon />}
                onClick={handleCopyText}
                style={{ marginRight: '0.5rem' }}
                title={copied ? 'Copied' : 'Copy'}

              >
                Copy Text
              </Button>
              <Button
                variant="outlined"
                startIcon={<GetAppIcon />}
                onClick={handleDownloadText}
                style={{ marginRight: '0.5rem' }}
              >
                Download Text
              </Button>
              <Button variant="outlined" onClick={redirectToHome}>

                Start Over
              </Button>


              <TextareaAutosize
                rowsMin={15}
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: '100%', marginTop: '1rem' }}
              />

            </>
          )}

        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
