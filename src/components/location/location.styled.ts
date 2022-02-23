import { styled } from '@mui/styles';
import { Card, Button, Box, Stack, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '1.5rem 3rem',
}));


export const StyledBox= styled(Box)({
    maxWidth:"36rem",
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    padding:'1rem',
    margin: '0.5rem',
    '& input':{
        width:'10rem',
        paddingRight:"0.2rem"
    },
    '& .login':{
        textAlign:'center',
        color:'inherit',
        fontSize:'0.9rem',
        marginTop:"0.5rem",
        fontWeight:500
    }
  });
  