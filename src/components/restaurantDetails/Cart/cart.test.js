import { render, screen } from '@testing-library/react';
import Cart from './index';

describe('initial status', () => {
  test('should have right description when empty', () => {
    render(<Cart />);
    const initialMessageElement = screen.getByText(/Your basket is empty/i);
    expect(initialMessageElement).toBeInTheDocument();
  });
  test('should have total element when it is not empty', () => {
    render(<Cart />);
    const initialMessageElement = screen.queryByRole('heading');
    expect(initialMessageElement.value).toBe('Subtotal');
  });
});

describe('functionality', () => {});

describe('async funcs', () => {});
