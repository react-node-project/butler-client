import React from 'react'
import { Typography, Link, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FOOTERDATA } from './../Landing/data';
export default function Footer() {
    return (
        <>
            <Box>
                <Typography variant="h6">
                    I'm footer
                </Typography>

                {/* Accordions*/}
                {FOOTERDATA.map((item, idx) => (
                    < Accordion key={idx} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography varian="h5">{item.heading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Box sx={{ display: "flex", flexDirection: "column" }} textAlign="left">
                                {/* <Link href="/signin">{item.link1.title}</Link> */}
                                <Link href="/">Contact us</Link>
                                <Link href="/signup">Signup</Link>
                                <Link href="/signin">Signin</Link>
                            </Box>

                        </AccordionDetails>
                    </Accordion>
                ))}

                {/* socials */}
                <Box></Box>

                <Box pt={2} textAlign="center">
                    Butler global &reg;{new Date().getFullYear()}
                </Box>
            </Box>
        </>
    )
};
