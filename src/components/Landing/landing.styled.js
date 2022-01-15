import { styled } from '@mui/styles';

export const StyledDiv = styled('div')({
  position: 'relative',
  '& .title': {
    position: 'absolute',
    display: 'flex',
    color: '#fff',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .MuiImageListItemBar': {
    textAlign: 'left',
  },
});
