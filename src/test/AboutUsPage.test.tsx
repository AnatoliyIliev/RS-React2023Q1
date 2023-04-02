import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import AboutUsPage from '../pages/AboutUsPage';

test('render AboutUsPage', () => {
  render(<AboutUsPage />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/About Us/i);
});
