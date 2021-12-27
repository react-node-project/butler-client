import { styled } from '@mui/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, RadioGroup } from '@mui/material';

export const StyledLayout = styled(Box)({
  position: 'sticky',
  left: 0,
  top: 0,
  width: '262px',
  height: '100vh',
  paddingTop: '32px',
  marginRight: '24px',
  '& fieldset, & legend': {
    width: '100%',
  },
  '& label': {
    margin: 0,
    '& span': {
      fontSize: '14px',
      lineHeight: '19px',
    },
  },
});

export const StyledFilterTitle = styled(Box)({
  position: 'relative',
  display: 'flex',
  paddingBottom: '16px',
  borderBottom: '1px solid #e8ebeb',
  '& .thumb': {
    width: '36px',
    height: '36px',
    marginRight: '8px',
    borderRadius: '50%',
    background: '#000',
  },
  '& .text': {
    fontSize: '14px',
    lineHeight: '19px',
    color: '#828585',
    '& .city': {
      overflow: 'hidden',
      display: 'block',
      width: '95%',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '22px',
      color: '#000',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  '& button': {
    position: 'absolute',
    right: 0,
    bottom: '14px',
    fontSize: '14px',
    lineHeight: '19px',
    textTransform: 'none',
  },
});

export const StyledRadioGroup = styled(RadioGroup)({
  padding: '16px 0',
  borderBottom: '1px solid #e8ebeb',
});
export const StyledAccordion = styled(Accordion)({
  padding: '16px 0 24px',
  marginBottom: '16px',
  borderBottom: '1px solid #e8ebeb',
  boxShadow: 'none',
});
export const StyledAccordionSummary = styled(AccordionSummary)({
  padding: 0,
});

export const StyledAccordionDetails = styled(AccordionDetails)({
  padding: 0,
});
