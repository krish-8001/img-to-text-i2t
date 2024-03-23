
"use client";
import { Box, Typography, Grid, Container,Card} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { Add, Remove } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,

} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const FeaturesComponent = () => {
  const containerStyle = {
    flexGrow: 1,
    background: 'radial-gradient(97.99% 1370.78% at 0.83% 2.6%, rgb(198, 218, 255, 50%) 0%, rgba(204, 225, 255, 0.5) 100%)',
  };
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const stepIconStyle = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    marginRight: '8px',
  };
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question: 'What is Image to Text Convert?',
      answer: 'Image to Text Convert is an online platform that allows you to convert image to text in one click. It is free for use.'
    },
    {
      question: 'Which file formats are supported by the system?',
      answer: 'Multiple file formats are supported, including JPG, PNG, JPEG, BMP, GIF, and TIFF for images.'
    },
    {
      question: 'Is Image to Text Convert free to use?',
      answer: 'Yes, we will offer a permanent free version for users, reserving the right to make adjustments to relevant policies in the future.'
    },
    {
      question: 'How does our Photo To Text Tools Works?',
      answer: 'Photo to text converter is an online tool that convert a photo into text. It works by analyzing the pixels of the image and then converting them into words. The technology can be used to convert scanned documents into text or digital formats..'
    },
    {
      question: 'Is it free for commercial?',
      answer: 'Yes, Text2VoiceConvert is free for commercial use as well as personal use.'
    },
  ];
  
  const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title: 'Low-resolution image extractor',
      description:
        'Our text extractor efficiently retrieves text from blurry, low-resolution images with high accuracy, including books, handwritten works, and dim screenshots.',
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: 'Detect mathematical syntax',
      description:
        'Our converter adeptly extracts complex mathematical expressions from images, treating them as easily readable text, thanks to extensive machine learning data.',
    },

    {
      icon: <AutoFixHighRoundedIcon />,
      title: 'Data extraction',
      description:
        'It is used to extract text from invoices, receipts, forms,tables, and other documents to create databases and spreadsheets.',
    },
    
    {
      icon: <AccountBalanceRoundedIcon />,
      title: 'Financial Data Analysis',
      description:
        'Extracting and analyzing financial data from images such as balance sheets, income statements, and financial reports.',
    },
    {
      icon: <CodeRoundedIcon />,
      title: 'Source Code Extraction',
      description:
        'Convert source code snippets from images into text format for further analysis or editing.',
    },
  
    {
      icon: <FormatListBulletedRoundedIcon />,
      title: 'List Extraction',
      description:
        'Extract lists and bullet points from images, such as shopping lists, to-do lists, or itemized content.',
    },
   
  
  ];

  return (
    <>

      <div style={{ backgroundColor: 'white' }}>
        <Container maxWidth="md" mt={6}      id="Features"
>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3"
              align="center"
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="0" mt={6}>Quick Tutorial</Typography>
          </Box>
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                <span style={stepIconStyle}>1</span>Upload Images

              </Typography>
              <Typography mt={1}>
              You can drag and drop Images into the input box above or select images from your local device. Supported image formats are JPG, PNG, JPEG.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                <span style={stepIconStyle}>2</span> Click on Convert Button

              </Typography>
              <Typography mt={1}>
              Our Image to text converter automatically extracts text from images and transforms it into editable text.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                <span style={stepIconStyle}>3</span> Download/Copy Options

              </Typography>
              <Typography mt={1}>
              Download your converted text by clicking the download Button or copy content to the clipboard using copy button 
              </Typography>
            </Grid>
           
          </Grid>
        </Container>
      </div>
      <Box
 id="Features"
       sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 2, sm: 4 },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h3">
            Features
          </Typography>
         
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: '#1976d2',
                  background: 'transparent',
                  backgroundColor: 'blue.100',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom style={{ color: '##1976d2'
 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.900' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
      <Container maxWidth="md"     id="FAQs"
 >
        <Typography variant="h3"
          align="center"
          data-aos-duration="500"
          data-aos="fade-down"
          data-aos-delay="0" mt={3}>
          FAQ
        </Typography>
        <Grid container spacing={2} mt={3}>
          {faqData.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleToggle(index)}
                sx={{ justifyContent: 'space-between', textTransform: 'none' }}
              >
                <Typography variant="subtitle1" mt={1}>
                  {item.question}
                </Typography>
                {openIndex === index ? <Remove /> : <Add />}
              </Button>
              <Collapse in={openIndex === index}>
                <Typography variant="body1" mt={2}>
                  {item.answer}
                </Typography>
              </Collapse>
            </Grid>
          ))}
        </Grid>
      </Container>


      

    </>
  );
}
export default FeaturesComponent;