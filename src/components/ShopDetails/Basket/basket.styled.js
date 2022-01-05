import { styled } from "@mui/styles";
import { Card, Button, Box, Stack, Paper } from "@mui/material";

export const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "1.5rem 3rem",

  // [theme.breakpoints.down('sm')]: {
  //   maxWidth: '100%',
  //   padding: '1rem',
  // },
  // [theme.breakpoints.between('md', 'lg')]: {
  //   maxWidth: '90%',
  //   padding: '1rem',
  // },
  // '@media (min-width: 1200px)': {
  //   maxWidth: '100%',
  //   padding: '0 10rem',
  // },
}));

export const StyledPaper = styled(Paper)({
  margin: "1rem",
  padding: "1rem",
  width: "14rem",
  borderRadius: 5,
  position: "relative",
});

export const StyledStack = styled(Stack)({
  position: "absolute",
  right: 10,
  top: 20,
});

export const StyledBox = styled(Box)({
  flex: 5,
  width: "70%",
  background: "#eee",
  textAlign: "center",
});

export const StyledCard = styled(Card)(({ theme }) => ({
  flex: 2,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minWidth: 240,
  padding: "1rem 1.5rem",
  margin: "0 1rem",
  color: "#aaa",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background: "#eee",
  padding: "0.5rem 1rem",
  color: "#aaa",
  fontWeight: 600,
}));
