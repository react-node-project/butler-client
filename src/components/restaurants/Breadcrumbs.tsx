import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export type BreadcrumbsProps = {
  title: string;
};

const BreadcrumbsBox = (props: BreadcrumbsProps) => {
  const navigate = useNavigate();
  const { title } = props;

  const onClickButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <IconButton onClick={onClickButton} color="primary">
        <KeyboardBackspaceIcon sx={{ padding: 0 }} />
      </IconButton>
      <h2>{title}</h2>
    </div>
  );
};

export default BreadcrumbsBox;
