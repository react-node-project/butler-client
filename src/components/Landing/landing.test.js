// test codes come here
import React from 'react';
import { render } from '@testing-library/react';
import ThemeMenu from './ThemeMenu';
// import "@testing-library/jest-dom/extend-expect";

test("header renders with a correct text", () => {
    const component = render(<ThemeMenu />);
    const headerEl = component.getByTestId("header");
    expect(headerEl.textContent).toBe("What's on the menu?");
})
