import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Box from '@mui/material/Box';
import LogIn from '../../components/auth/Login';
import SignUp from '../../components/auth/SignUp';

const AutoFlip = () => {
  const [isFlipped, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!isFlipped);
  };

  return (
    <>
      <Box>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <LogIn handleFlip={handleFlip} />
          <SignUp handleFlip={handleFlip} />
        </ReactCardFlip>
      </Box>
    </>
  );
};

export default AutoFlip;
