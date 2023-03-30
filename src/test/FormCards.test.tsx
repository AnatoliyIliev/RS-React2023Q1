import React from 'react';
import { render } from '@testing-library/react';
import FormCards from '../components/FormCards';

describe('FormCard', () => {
  it('renders nothing', () => {
    const { container } = render(<FormCards />);
    expect(container.getElementsByClassName('.cards').length).toEqual(0);
  });
});
