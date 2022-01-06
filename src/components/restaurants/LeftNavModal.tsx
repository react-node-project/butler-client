import { Button, FormControlLabel, Modal, Radio } from '@mui/material';
import React, { useState } from 'react';
import {
  StyledButton,
  StyledChildButton,
  StyledChildModalContent,
  StyledCityModal,
  StyledContent,
  StyledLayout,
  StyledLayoutChild,
  StyledModalTitle,
  StyledRadioGroup,
} from './LeftNavModal.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { setFilter as setFilterStore } from '@store/features/restaurants';

export type LeftNavModalProps = {
  open: boolean;
  filter: 'delivery' | 'pick-up' | 'table-service';
  city?: string;
  onClose: () => void;
};

const ChildModalCity = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickSearch = () => {};

  return (
    <>
      <Button onClick={handleOpen}>Change</Button>
      <Modal open={open} onClose={handleClose}>
        <StyledLayoutChild>
          <StyledModalTitle>Where</StyledModalTitle>
          <StyledChildModalContent>서치박스 부분</StyledChildModalContent>
          <StyledChildButton>
            <Button variant="contained" size="large" onClick={onClickSearch}>
              Search
            </Button>
          </StyledChildButton>
        </StyledLayoutChild>
      </Modal>
    </>
  );
};

const LeftNavModal = (props: LeftNavModalProps) => {
  const { open, filter: _filter, city = 'no city', onClose } = props;
  const [filter, setFilter] = useState(_filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = (event.target as HTMLInputElement).value as 'delivery' | 'pick-up' | 'table-service';
    if (filter !== filterValue) {
      setFilter(filterValue);
    }
  };

  const onClickConfirm = () => {
    console.log('filter', filter);
    console.log('city', city);
    dispatch(setFilterStore(filter));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledLayout>
        <StyledContent>
          <p>Where and when</p>
          <div>
            <StyledRadioGroup
              aria-label="filter"
              name="controlled-radio-buttons-group"
              value={filter}
              onChange={handleChangeFilter}
            >
              <FormControlLabel value="delivery" control={<Radio size="small" />} label="Delivery" />
              <FormControlLabel value="pick-up" control={<Radio size="small" />} label="Pickup" />
              <FormControlLabel value="table-service" control={<Radio size="small" />} label="Table Service" />
            </StyledRadioGroup>
          </div>
          <StyledCityModal>
            <LocationOnIcon />
            <span>{city}</span>
            <ChildModalCity />
          </StyledCityModal>
        </StyledContent>
        <StyledButton>
          <Button variant="contained" size="large" onClick={onClickConfirm}>
            Confirm
          </Button>
        </StyledButton>
      </StyledLayout>
    </Modal>
  );
};

export default LeftNavModal;