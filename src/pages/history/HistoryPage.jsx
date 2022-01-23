import React from 'react';
import { Container, Box, Grid, Card, CardContent, Avatar, Button, Typography } from '@mui/material';
import { StyledGrid } from '../../styles/sharedElement.styled';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ORDERS= [
    {
order_number:3,
shop_name:"Pizza Express",
status:"delivered",
date:"24 June 2021",
amount:"£ 21.05"},
{order_number:23,
shop_name:"Libertine Burger",
status:"delivered",
date:"03 Jan 2022",
amount:"£ 15.30"},
{order_number:33,
shop_name:"Co-op",
status:"rejected",
date:"13 Jan 2022",
amount:"£ 16.50"},
]

export default function HistoryPage() {
  return (
    <Container>
      <Box>
        <Grid m={2} p={2} container spacing={1}>
          <StyledGrid item xs={12} md={12} height={'10vh'}>
            <h2>Order History</h2>
          </StyledGrid>

          {/* order history list */}
          <StyledGrid item xs={12} md={12} height={'80vh'}>
            <Box p={2} >
                {
                ORDERS.map(item=>(
                    <Card key={item.order_number} style={{padding:"1rem",justifyContent:"space-between",marginBottom:"0.5rem",display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <Avatar  sx={{padding:"1rem"}}>
                      <AssignmentIcon />
                    </Avatar>
                    <div style={{width:"80%",textAlign:"left",paddingLeft:"0.5rem"}}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {item.shop_name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {item.status}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.date}
                    </Typography>
                    </div>
                  <Button endIcon={<ArrowForwardIosIcon />} variant="outlined" size="large">
                    DETAILS
                  </Button>
                </Card>
                ))
                }
            </Box>
          </StyledGrid>
        </Grid>
      </Box>
    </Container>
  );
}
