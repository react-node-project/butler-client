import { Button} from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from 'react';
// import { ComponentToPrint } from './ComponentToPrint';

import { StyledDivWrapper } from '../../styles/sharedElement.styled';
import Receipt from './../../components/history/Receipt';

const ReceiptPage =()=> {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
    <StyledDivWrapper>
      <Receipt ref={componentRef} />
      <Button pt={2} onClick={handlePrint} variant="contained" size="large">
        download receipt
      </Button>
    </StyledDivWrapper>
    </>
  );
}

export default ReceiptPage;
