import { styled, css } from '@mui/styles';

export const CheckoutBasket = styled.input`
  width: 100%;
  height: 40px;

  ${(props) =>
    (props.empty &&
      `
        color: none;
        backgroundcolor: grey;
      `) ||
    (props.active &&
      `
        color: black;
        backgroundcolor: whitesmoke;
      `)}
`;
