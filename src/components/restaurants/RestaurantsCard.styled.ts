import { styled } from '@mui/styles';
import { Box, Theme } from '@mui/material';

export const StyledThumb = styled(Box)((props: { url: string }) => ({
  width: '100%',
  paddingTop: '56.25%',
  backgroundImage: `url(${props.url})`,
  backgroundSize: 'cover',
  backgroundPosition: '50%',
}));

export const StyledText = styled(Box)((props: { theme: Theme }) => ({
  padding: '0 16px 16px',
  marginTop: '16px',
  color: '#828285',
  textAlign: 'left',
  fontSize: '14px',
  lineHeight: '19px',
  '& .title': {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '22px',
    color: '#2e3333',
  },
  '& .description span': {
    display: 'inline',
  },
  '& .review_score': {
    color: props.theme.palette.primary.main,
  },
  '& .distance': {
    padding: '2px 0',
  },
  '& .event': {
    color: props.theme.palette.secondary.light,
  },
}));
