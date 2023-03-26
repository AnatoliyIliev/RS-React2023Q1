import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Form from '../components/Form';

describe('Forms', () => {
  it('name ', () => {
    render(<Form />);

    expect(screen.getByText('Name:*')).toBeInTheDocument();
  });
});
