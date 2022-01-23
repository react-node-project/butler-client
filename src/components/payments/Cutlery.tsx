import React, { useState } from 'react';
import { StyledBorderBox } from './Common.styled';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Switch } from '@mui/material';
import { StyledBox, StyledTextBox } from './Cutlery.styled';

export type CutleryProps = {};

const Cutlery = (props: CutleryProps) => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledBorderBox sx={{ margin: '1em 0', justifyContent: 'space-between' }}>
      <StyledBox sx={{ display: 'flex' }}>
        <LocalDiningIcon sx={{ marginRight: '15px' }} />
        <StyledTextBox>
          <span>Cutlery</span>
          <span>The restaurant will add cutlery for you, if they have some available.</span>
        </StyledTextBox>
      </StyledBox>
      <Switch checked={checked} onChange={handleChange} />
    </StyledBorderBox>
  );
};

export default Cutlery;
