import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import NotFoundPage from '../pages/NotFoundPage';

test('render NotFoundPage', () => {
  render(<NotFoundPage />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/404 Page not found/i);
});
