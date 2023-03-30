import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Form from '../components/Form';

describe('Forms', () => {
  it('name ', () => {
    render(<Form />);

    expect(screen.getByText('Name:*')).toBeInTheDocument();
    expect(screen.getByText('Phone Number:*')).toBeInTheDocument();
    expect(screen.getByText('Gender:*')).toBeInTheDocument();
    expect(screen.getByText('Birth Date:*')).toBeInTheDocument();
    expect(screen.getByText('Pick your favorite genre:*')).toBeInTheDocument();
    expect(screen.getByText('Avatar:*')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data*')).toBeInTheDocument();
  });
});
