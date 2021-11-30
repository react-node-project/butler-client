import React, { useCallback, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import _SignUp from '../../components/Sign/SignUp';
import _HHSignUp from '../../components/Sign/SignUpHH';
import _HHSignIn from '../../components/Sign/SignInHH';
import _SignIn from '../../components/Sign/SignIn';
import Button from '@mui/material/Button';
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
