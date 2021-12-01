import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import _HHSignUp from '../../components/Sign/SignUpHH';
import _HHSignIn from '../../components/Sign/SignInHH';
import Box from '@mui/material/Box';

const AutoFlip = () => {
  const [isFlipped, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!isFlipped);
  };

  return (
    <>
      <Box>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <_HHSignIn handleFlip={cardFlip} />
          <_HHSignUp handleFlip={cardFlip} />
        </ReactCardFlip>
      </Box>
    </>
  );
};

export default AutoFlip;
