import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const StyledImg = styled('img')(({ theme }) => ({
  maxHeight: '100%',
}));

export const StyledButton = styled(Box)((props) => ({
  '& .cancelBtn': {
    color: props.theme.palette.primary.main,
  },
}));
