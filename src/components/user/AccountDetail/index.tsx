import React from 'react';
import { Box } from '@mui/material';

type Props = {};

const AccountDetail = (props: Props) => {
  return (
    <Box>
      <div className="header">Account Details</div>
      <div className="content">
        <input type="text" />
        <input type="text" disabled />
        <input type="tel" />
      </div>
      <div className="footer">
        <span>You must supply your valid password</span>
        <input type="password" />
        <button>Save Change</button>
      </div>
    </Box>
  );
};

export default AccountDetail;
