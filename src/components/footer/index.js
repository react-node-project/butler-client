import React from 'react';
import { Typography, Box, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { ExpandMore, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { FOOTERDATA } from '../Landing/data';
import { StyledAccordion, StyledBox, StyledLink } from './footer.styled';

const SOCIALS = [<Facebook />, <Twitter />, <Instagram />];

export default function Footer() {
  return (
    <div>
      <Box>
        {/* Accordions*/}
        {FOOTERDATA.map((item, idx) => (
          <StyledAccordion StyledAccordion key={idx}>
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
          </StyledAccordion>
        ))}
        {/* socials */}
        <Box mt={2}>
          {SOCIALS.map((item) => (
            <IconButton>{item}</IconButton>
          ))}
        </Box>
        <Box pt={2} textAlign="center">
          Butler global &reg;{new Date().getFullYear()}
        </Box>
      </Box>
    </div>
  );
}
