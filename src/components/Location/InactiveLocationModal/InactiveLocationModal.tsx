import React, { forwardRef, useEffect, useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import Styled from '../MarkLocationModal/markLocationModal.styled';
import CloseIcon from '@mui/icons-material/Close';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { StringSchema } from 'yup';
import { useSendInactiveLocationMutation } from '../../../store/service/location';

type Props = {
  location: {
    lat: number;
    lng: number;
  };
  onClose(): void;
};

const InactiveLocationModal = forwardRef(({ location, onClose }: Props, ref) => {
  const [sendInactiveLocation] = useSendInactiveLocationMutation({});
  const [inputEmail, setInputEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const schema = new StringSchema().required('이메일 입력은 필수 입니다').email('이메일 형식으로 입력해주세요');

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };
  const checkValidInputEmail = async () => {
    try {
      await schema.validate(inputEmail);
      setIsError(false);
    } catch (e) {
      setIsError(true);
      throw e;
    }
  };
  const onCloseDelay = (ms = 500) => setTimeout(onClose, ms);

  const sendEmail = async () => {
    if (!inputEmail.length) return await checkValidInputEmail();

    try {
      await sendInactiveLocation({
        email: inputEmail,
        location,
      }).unwrap();
    } catch (e) {
      console.error(e);
    } finally {
      onCloseDelay();
    }
  };

  useEffect(() => {
    if (!isError) return setHelperText('');
    setHelperText(inputEmail.length ? 'Please enter in email format' : 'Please enter your email');
  }, [isError]);

  return (
    <Styled.Wrapper>
      <Styled.Container style={{ height: '40%' }}>
        <Styled.Header style={{ padding: '1.5rem' }}>
          <Box className="title">
            <Typography fontWeight="bolder">We're not thereYet</Typography>
          </Box>
          <Box className="close-button-wrapper">
            <IconButton aria-label="close-button" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Styled.Header>
        <Styled.Main>
          <div
            style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <DeliveryDiningIcon sx={{ width: '4rem', height: '4rem' }} />
          </div>
          <Typography fontSize="1rem">But we're working on it! We can send you an email when we get there.</Typography>
          <TextField
            value={inputEmail}
            onChange={handleInputEmail}
            onBlur={checkValidInputEmail}
            error={isError}
            helperText={helperText}
            placeholder="E.g. name@Example.com"
          />
        </Styled.Main>
        <Styled.Footer>
          <Button variant="contained" onClick={sendEmail}>
            Email me
          </Button>
        </Styled.Footer>
      </Styled.Container>
      <Box />
    </Styled.Wrapper>
  );
});

export default InactiveLocationModal;
