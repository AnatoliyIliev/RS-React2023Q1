import { render, screen } from '@testing-library/react';
import NotFoundPage from '../pages/NotFoundPage';

describe('NotFoundPage component', () => {
  it('render NotFoundPage', () => {
    render(<NotFoundPage />);

    expect(screen.getByText(/404 Page not found/i)).toBeInTheDocument();
  });
});
