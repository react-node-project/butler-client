import { FormControlLabelProps, Radio, RadioGroup, useRadioGroup, styled, FormControlLabel } from '@mui/material';
import { setMethod } from '@store/features/paymentsSlice';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { StyledBorderBox } from './Common.styled';

export type PaymentProps = {};

export type StyledFormControlLabelProps = FormControlLabelProps & {
  checked: boolean;
};

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const Payment = (props: PaymentProps) => {
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setMethod(value));
  };
  return (
    <div>
      <h3>Payment method</h3>
      <StyledBorderBox>
        <RadioGroup defaultValue={'paypal'} name="radio-buttons-group" onChange={onChange}>
          <MyFormControlLabel value="paypal" control={<Radio />} label="Paypal" />
          {/* <MyFormControlLabel value="direct" control={<Radio />} label="직접결제" /> */}
        </RadioGroup>
      </StyledBorderBox>
    </div>
  );
};

export default Payment;
