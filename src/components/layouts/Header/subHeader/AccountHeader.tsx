import React from 'react';
import Typography from '@mui/material/Typography';
import { theme } from '../../../../styles/theme';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

type Props = {};

const AccountHeader = (props: Props) => {
  const { name, email } = useSelector((state: RootState) => state.user);

  return (
    <Box style={{ width: '60%' }} sx={{ m: 2 }}>
      <Typography style={{ color: theme.palette.primary.contrastText, fontSize: '3.5rem' }} className="username">
        {name}
      </Typography>
      <Typography style={{ color: theme.palette.primary.contrastText }} className="email">
        {email}
      </Typography>
    </Box>
  );
};

export default AccountHeader;
