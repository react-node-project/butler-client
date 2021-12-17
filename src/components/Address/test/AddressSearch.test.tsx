import React from 'react';
import AddressSearch from '../AddressSearch';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../util/testUtil';

describe('AddressSearch', () => {
  it('default rendering check ', () => {
    render(<AddressSearch />);
    const inputBox = screen.getByPlaceholderText('Enter your full address', { exact: true });
    const useCurrentLocationBtn = screen.getByRole('button', { name: 'useCurrentLocation' });
    const searchLocationBtn = screen.getByRole('button', { name: 'Search' });
    const loginLink = screen.getByText('Log in for your recent addresses', { exact: true });

    expect(screen.getByText('Enter your address to find local restaurants', { exact: true })).toBeInTheDocument();
    expect(inputBox).toBeEnabled();
    expect(loginLink).toBeInTheDocument();
    expect(useCurrentLocationBtn).toBeEnabled();
    expect(searchLocationBtn).toBeEnabled();
  });

  it('input liverpool in Input box. show optional box ', async () => {
    render(<AddressSearch />);

    const inputBox = screen.getByPlaceholderText('Enter your full address', { exact: true });
    userEvent.type(inputBox, 'liverpool');

    const expectLocations = ['Liverpool Street Station', 'Liverpool'];
    const searchedLocations = await (
      await screen.findAllByTitle('searched-location')
    ).map((value) => value.textContent);

    expect(searchedLocations).toContain(expectLocations[0]);
    expect(searchedLocations).toContain(expectLocations[1]);
  });
});
