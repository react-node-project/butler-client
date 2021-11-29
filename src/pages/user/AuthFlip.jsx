import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import _SignUp from '../../components/Sign/SignUp';
import _SignIn from '../../components/Sign/SignIn';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function AuthFlip() {
  const [isFlipped, setFlip] = useState(false);
  return (
    <>
      <Box sx={{ marginTop: '450px' }}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <_SignIn />
          <_SignUp />
        </ReactCardFlip>
        <Button onClick={() => setFlip(!isFlipped)}>Button</Button>
      </Box>
    </>
  );
}
