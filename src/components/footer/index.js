import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { ExpandMore, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { FOOTERDATA } from '../Landing/data';
import { StyledBox, StyledLink } from './footer.styled';

export default function Footer() {
  return (
    <div>
      <Box>
        {/* Accordions*/}
        {FOOTERDATA.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography varian="h5">{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StyledBox textAlign="left">
                <StyledLink href={item.link1.url}>{item.link1.title}</StyledLink>
                <StyledLink href={item.link2.url}>{item.link2.title}</StyledLink>
                <StyledLink href={item.link3.url}>{item.link3.title}</StyledLink>
              </StyledBox>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* socials */}
        <Box mt={2} textAlign="center">
          <IconButton size="large">
            <Facebook />
          </IconButton>
          <IconButton size="large">
            <Twitter />
          </IconButton>
          <IconButton size="large">
            <Instagram />
          </IconButton>
        </Box>
        <Box pt={2} textAlign="center">
          Butler global &reg;{new Date().getFullYear()}
        </Box>
      </Box>
    </div>
  );
}
