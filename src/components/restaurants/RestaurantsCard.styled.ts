import { styled } from '@mui/styles';
import { Box, Theme } from '@mui/material';

export const StyledLayout = styled(Box)({ marginBottom: '16px' });

export const StyledThumb = styled(Box)((props: { url?: string }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%',
  backgroundImage: `url(${props.url})`,
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  '& > span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(46, 51, 51, 0.8)',
    fontSize: '14px',
    fontWeight: 600,
    color: '#fff',
  },
  '& > button': {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

export const StyledButton = styled(Box)((props: { theme: Theme }) => ({
  border: 'none',
  background: 'none',
  padding: 0,
  [props.theme.breakpoints.down(768)]: {
    width: '100%',
  },
}));

export const StyledText = styled(Box)((props: { theme: Theme }) => ({
  marginTop: '8px',
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
