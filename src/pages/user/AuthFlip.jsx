import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Box from '@mui/material/Box';
import SignIn from '../../components/Sign/SignIn/index';
import SignUp from '../../components/Sign/Signup/index';

const AutoFlip = () => {
  const [isFlipped, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!isFlipped);
  };

  return (
    <>
      <Box>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <SignIn handleFlip={cardFlip} />
          <SignUp handleFlip={cardFlip} />
        </ReactCardFlip>
      </Box>
    </>
  );
};

export default AutoFlip;
