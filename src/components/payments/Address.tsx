import { AccordionDetails, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { StyledBorderBox } from './Common.styled';
import AddIcon from '@mui/icons-material/Add';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledButtons,
  StyledInputItem,
  StyledTextareaAutosize,
} from './Address.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { addressType, setAddress } from '@store/features/paymentsSlice';
import AddressItem from './AddressItem';

export type AddressProps = {};

type AddressExtendsType = 'panelAdress' | null;

type AddressDialogProps = {
  expanded: AddressExtendsType;
  onClickSubmit: (data: any) => void;
  onClickClose: () => void;
  setExpanded: (expanded: AddressExtendsType) => void;
};

const AddressAccordion = (props: AddressDialogProps) => {
  const { expanded, onClickSubmit, onClickClose, setExpanded } = props;
  // TODO: PR 완료후 validationSchema는 utill로 이사
  const validationSchema = yup.object().shape({
    address: yup.string().required('This is a required entry.'),
    city: yup.string().required('This is a required entry.'),
    postcode: yup.string().required('This is a required entry.'),
    phonenumber: yup.string().required('This is a required entry.'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const isDisabledSubmit = Object.keys(errors).length !== 0;

  const onChange = (expandedValue: AddressExtendsType) => () => {
    if (expandedValue === expanded) {
      setExpanded(null);
    } else {
      setExpanded(expandedValue);
    }
  };

  return (
    <StyledAccordion expanded={expanded === 'panelAdress'} onChange={onChange('panelAdress')}>
      <StyledAccordionSummary aria-controls="adress-content" id="adress-header" expanded={expanded}>
        <AddIcon /> Add a new address
      </StyledAccordionSummary>
      <AccordionDetails>
        <Box component="form" onSubmit={handleSubmit(onClickSubmit)} noValidate>
          <StyledInputItem>
            <span>Apartment (optional)</span>
            <TextField
              size={'small'}
              fullWidth
              id="apartment"
              label="apartment"
              name="apartment"
              placeholder="e.g. Apartment 10"
            />
          </StyledInputItem>
          <StyledInputItem>
            <span>Street address</span>
            <TextField
              required
              size={'small'}
              fullWidth
              id="address"
              label="address"
              placeholder="e.g. 1 Cousin Lane"
              {...register('address')}
              helperText={errors.address?.message}
              error={Boolean(errors.address)}
            />
          </StyledInputItem>
          <StyledInputItem>
            <span>City/town</span>
            <TextField
              required
              size={'small'}
              fullWidth
              id="city"
              label="city"
              placeholder="e.g. London"
              {...register('city')}
              helperText={errors.city?.message}
              error={Boolean(errors.city)}
            />
          </StyledInputItem>
          <StyledInputItem>
            <span>Postcode</span>
            <TextField
              required
              size={'small'}
              fullWidth
              id="postcode"
              label="postcode"
              placeholder="e.g. EC4R 3XJ"
              {...register('postcode')}
              helperText={errors.postcode?.message}
              error={Boolean(errors.postcode)}
            />
          </StyledInputItem>
          <StyledInputItem>
            <span>Phone number</span>
            <TextField
              required
              size={'small'}
              fullWidth
              id="phonenumber"
              label="phonenumber"
              placeholder="e.g. 07123 456 789"
              {...register('phonenumber')}
              helperText={errors.phonenumber?.message}
              error={Boolean(errors.phonenumber)}
            />
          </StyledInputItem>
          <StyledInputItem>
            <span>Add directions to help your rider find you (optional)</span>
            <StyledTextareaAutosize placeholder="e.g. Take the lift to floor 5 and turn left, it's the second door" />
          </StyledInputItem>
          <StyledButtons>
            <Button onClick={onClickClose} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" disabled={isDisabledSubmit} variant="outlined">
              Add address
            </Button>
          </StyledButtons>
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );
};

const Address = (props: AddressProps) => {
  const [expanded, setExpanded] = useState<AddressExtendsType>(null);
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.payments.address);
  const handleSubmit = (data: addressType) => {
    dispatch(setAddress([...address, data]));
    setExpanded(null);
  };
  const handleClose = () => {
    setExpanded(null);
  };

  return (
    <div>
      <h3>Delivery address</h3>
      <div>
        {address?.map((addressItem, index) => (
          <AddressItem key={addressItem.city + index} address={addressItem} />
        ))}
      </div>
      <StyledBorderBox>
        <AddressAccordion
          expanded={expanded}
          onClickSubmit={handleSubmit}
          onClickClose={handleClose}
          setExpanded={setExpanded}
        />
      </StyledBorderBox>
    </div>
  );
};

export default Address;
