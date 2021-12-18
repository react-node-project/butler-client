import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const Container = styled(Box)`
  width: 35rem;
  height: 70%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Header = styled(Box)`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  padding: 1rem;
  flex: 8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  .title {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 80%;
  justify-content: space-between;

  input:disabled {
    margin: 1rem 0 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-font-smoothing: subpixel-antialiased;
    -ms-flex: 1;
    flex: 1;
    height: 48px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
    caret-color: #00ccbc;
    padding: 12px 16px;
    border: 1px solid #e8ebeb;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 2px 4px rgb(0 0 0 / 5%), inset 0 0 0 100px #fff;
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 5%), inset 0 0 0 100px #fff;
    -webkit-transition-property: -webkit-box-shadow;
    transition-property: -webkit-box-shadow;
    transition-property: box-shadow, -webkit-box-shadow;
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
`;

const Footer = styled(Box)`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 90%;
    height: 70%;
  }
`;

export default { Wrapper, Container, Header, Main, Footer };
