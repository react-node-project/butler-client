import React from 'react';
import { Container } from '@mui/material';
import AccountDetail from '@components/user/AccountDetail';
import SocialAccounts from '@components/user/SocialAccounts';
import Addresses from '@components/user/Addresses';
import DeactivateAccount from '@components/user/AccountDeactivate';

type Props = {};

const Account = (props: Props) => {
  return (
    <Container
      sx={{
        backgroundColor: '#eee',
        width: '100%',
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* 유저 수정*/}
      <AccountDetail />
      <Addresses />
      <SocialAccounts />
      <DeactivateAccount />
    </Container>
  );
};

export default Account;
