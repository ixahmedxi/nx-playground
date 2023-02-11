import { render, screen } from '@testing-library/react';
import Home from '../pages';

describe('home page', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByText(/home page/i)).toBeTruthy();
  });
});
