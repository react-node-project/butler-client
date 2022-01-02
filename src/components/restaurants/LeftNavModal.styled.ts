import { Box, RadioGroup } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledLayout = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  width: '560px',
  maxHeight: 'calc(100% - 64px)',
  background: '#fff',
  borderRadius: '3px',
  transform: 'translate(-50%, -50%)',
  '& > p': {
    paddingBottom: '16px',
    margin: 0,
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
  },
});

export const StyledLayoutChild = styled(StyledLayout)({
  padding: 0,
});

export const StyledContent = styled(Box)({
  padding: '24px',
});

export const StyledChildModalContent = styled(Box)({
  padding: '32px',
});

export const StyledModalTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  borderBottom: '1px solid rgba(0,0,0,.08)',
});

export const StyledRadioGroup = styled(RadioGroup)({
  padding: '8px 0 32px',
  '& > label': {
    padding: '0 8px',
  },
});

export const StyledCityModal = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& > svg': {
    marginRight: '16px',
  },
  '& > span': {
    flex: '1 1 auto',
  },
});

export const StyledButton = styled(Box)({
  padding: '0 24px 24px',
  '& button': {
    width: '100%',
  },
});

export const StyledChildButton = styled(StyledButton)({
  paddingTop: '24px',
  boxShadow: '0 -1px 4px 0 rgb(0 0 0 / 8%)',
});
