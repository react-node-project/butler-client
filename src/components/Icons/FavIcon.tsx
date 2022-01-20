import { Button } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export type FavIconProps = {
  active?: boolean;
  onClickIcon?: () => void;
};

const FavIcon = (props: FavIconProps) => {
  const { active = false, onClickIcon } = props;
  const [isActive, setIsActive] = useState<boolean>(active);

  const onClickButton = () => {
    setIsActive(!isActive);

    if (onClickIcon) {
      onClickIcon();
    }
  };

  return (
    <Button size="small" onClick={onClickButton}>
      {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Button>
  );
};

export default FavIcon;
