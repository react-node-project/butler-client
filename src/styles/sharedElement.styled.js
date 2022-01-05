import styled from 'styled-components';
export const StyledDiv= styled.div` 
margin:1rem;
flex:${({ flex }) => flex || 1};
padding:1rem;
width:${({ width }) => width || "100%"};
height: ${({ height }) => height || "60vh"};
background-color:${({bg }) =>bg || "#fff"};
;

`

// export const StyledWrapper = styled.div`
// width:100%;
// height:${({ height }) => height || "100%"};
// display:flex;
// justify-content: center;
// align-items: center;
// flex-wrap:wrap;
// background-color: ${({ bg }) => bg || "#f7f5f6"};
// `