import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledFilterTitle,
  StyledLayout,
  StyledRadioGroup,
} from './LeftNavBar.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { setFilter } from '@store/features/restaurants';

export type LeftNavBarProps = {
  cityName?: string;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LeftNavBar = (props: LeftNavBarProps) => {
  const { cityName = 'Liverpool City Centre' } = props;
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.restaurants.filter);
  const [modalOpen, setModalOPen] = useState<boolean>(false);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filter !== filterValue) {
      dispatch(setFilter(filterValue));
    }
  };

  const handleSetModalOpen = () => {
    setModalOPen(!modalOpen);
  };

  const handleChangeSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('v', (event.target as HTMLInputElement).value);
  };
  return (
    <StyledLayout>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <StyledFilterTitle>
              <Box className="thumb" />
              <Box className="text">
                <span>Now</span>
                <span className="city">{cityName}</span>
              </Box>
              <Button size="small" onClick={handleSetModalOpen}>
                Change
              </Button>
              <Modal
                open={modalOpen}
                onClose={handleSetModalOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal>
            </StyledFilterTitle>
          </FormLabel>
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
        </FormControl>
      </div>
      <div>
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Sort</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="sort"
                defaultValue="Distance"
                name="radio-buttons-group"
                onChange={handleChangeSort}
              >
                <FormControlLabel value="Distance" control={<Radio size="small" />} label="Distance" />
                <FormControlLabel value="Recommended" control={<Radio size="small" />} label="Recommended" />
                <FormControlLabel value="Time" control={<Radio size="small" />} label="Time" />
                <FormControlLabel value="Top rated" control={<Radio size="small" />} label="Top rated" />
              </RadioGroup>
            </FormControl>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>
    </StyledLayout>
  );
};

export default LeftNavBar;
