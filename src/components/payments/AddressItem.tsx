import { addressType } from '@store/features/paymentsSlice';
import React from 'react';

export type AddressItemProps = {
  address: addressType;
};

const AddressItem = (props: AddressItemProps) => {
  const { address } = props;
  return (
    <div>
      <div>
        <span>Apartment (optional)</span>
        <span>{address?.apartment}</span>
      </div>
      <div>
        <span>Street address</span>
        <span>{address.streetAdress}</span>
      </div>
      <div>
        <span>City/town</span>
        <span>{address.city}</span>
      </div>
      <div>
        <span>Postcode</span>
        <span>{address.postcode}</span>
      </div>
      <div>
        <span>Phone number</span>
        <span>{address.phoneNumber}</span>
      </div>
      <div>
        <span>Add directions to help your rider find you (optional)</span>
        <span>{address.message}</span>
      </div>
    </div>
  );
};

export default AddressItem;
