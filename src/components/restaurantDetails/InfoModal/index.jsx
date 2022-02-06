import React from 'react';
import {
  StyledGrid,
  StyledLayoutHeader,
  StyledLayout,
  StyledLayoutList,
  StyledIconContent,
  StyledDivider,
} from './infoModal.styled';
import { Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationMap from './LocationMap';

export default function InfoModal() {
  return (
    <StyledGrid container>
      <StyledLayout item xs={12}>
        <StyledLayoutHeader>Allergens</StyledLayoutHeader>
        <StyledLayoutList>
          <StyledDivider />
          <p>Questions? Ask Grease Monkey - Gungahlin about their ingredients and cooking methods </p>
          <StyledDivider />
          <StyledIconContent>
            <CallIcon className="content-icon" color="primary" />
            <Typography color="primary">Call Grease Monkey - Gungahlin</Typography>
          </StyledIconContent>
          <StyledDivider />
        </StyledLayoutList>
      </StyledLayout>

      <StyledLayout item xs={12}>
        <StyledLayoutHeader>Location</StyledLayoutHeader>
        <StyledLayoutList>
          <StyledDivider />
          <LocationMap />
          <StyledDivider />
          <StyledIconContent>
            <LocationOnIcon className="content-icon" color="primary" />
            <Typography color="primary">View map</Typography>
          </StyledIconContent>
          <StyledDivider />
        </StyledLayoutList>
      </StyledLayout>

      <StyledLayout item xs={12}>
        <StyledLayoutHeader>Notes</StyledLayoutHeader>
      </StyledLayout>
      <StyledLayoutList>
        <StyledDivider />
        <p>
          All dishes may contain traces of the following allergens: Gluten, Crustaceans, Eggs, Fish, Peanuts, Soybeans,
          Milk, Nuts (e.g. almonds, hazelnuts, walnuts, cashews, pecan nuts, Brazil nuts, pistachio nuts, macadamia
          nuts), Celery, Mustard, Sesame, Sulphur dioxide/sulphites, Lupin, Molluscs. For any questions regarding the
          allergen contents of specific dishes please contact the restaurant directly. <br /> 1. Alcohol is not for sale
          to people under the age of 18. By placing an order for alcohol products on this site you are declaring that
          you are 18 years of age and older. Identification will be requested for anyone looking under the age of 25. 2.
          Deliveroo reserves the right to cancel or change your order if alcohol is not ordered in line with the liquor
          license regulations. Alcohol must be purchased with food. No more than 1 bottle of wine or 6 bottles of beer
          per order. 3. Deliveroo Liquor License: 36140565. 4. Grease Monkey, 11000533.
        </p>
        <StyledDivider />
      </StyledLayoutList>
      <StyledDivider />
    </StyledGrid>
  );
}
