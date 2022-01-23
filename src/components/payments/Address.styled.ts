import styled from '@emotion/styled';
import { Accordion, AccordionSummary, Box, TextareaAutosize, Theme } from '@mui/material';

export const StyledAccordion = styled(Accordion)({
  width: '100%',
  padding: 0,
  boxShadow: 'none',
});

export const StyledTextareaAutosize = styled(TextareaAutosize)({
  width: '100%',
  height: '100px !important',
  padding: '16.5px 14px',
  resize: 'none',
});

export const StyledAccordionSummary = styled(AccordionSummary)(
  (props: { theme?: Theme; expanded: 'panelAdress' | null }) => ({
    display: props.expanded === 'panelAdress' ? 'none' : 'block',
    minHeight: 'auto',
    padding: 0,
    margin: 0,
    color: props.theme?.palette.primary.main,
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
  }),
);

export const StyledInputItem = styled(Box)({
  marginBottom: '15px',
  '& > span': {
    display: 'block',
    marginBottom: '10px',
  },
});

export const StyledButtons = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  '& .MuiButton-outlined': {
    width: '48%',
  },
});
