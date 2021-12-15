import React from 'react';
import { Typography, Link, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";
import { FOOTERDATA } from '../Landing/data';

export default function Footer() {
    return (
        <div>
            <Box>
                {/* Accordions*/}
                {FOOTERDATA.map((item, idx) => (
                    < Accordion key={idx} sx={{ background: "#eee" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography varian="h5">{item.heading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ display: "flex", flexDirection: "column" }} textAlign="left">
                                <Link href="/">Contact us</Link>
                                <Link href="/signup">Signup</Link>
                                <Link href="/signin">Signin</Link>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
                {/* socials */}
                <Box mt={2}>
                    <Typography mt={5} variant="button">
                        tweeter instagram facebook
                    </Typography>
                </Box>
                <Box pt={2} textAlign="center">
                    Butler global &reg;{new Date().getFullYear()}
                </Box>
            </Box>
        </div>
    )
}
