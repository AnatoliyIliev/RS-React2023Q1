import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Form from '../components/Form';

describe('Forms', () => {
  const onSubmitForm = vi.fn();

  beforeEach(() => {
    onSubmitForm.mockClear();
  });

  it('should render all form fields and a submit button', () => {
    render(<Form />);

    expect(screen.getByText('Name:*')).toBeInTheDocument();
    expect(screen.getByText('Phone Number:*')).toBeInTheDocument();
    expect(screen.getByText('Gender:*')).toBeInTheDocument();
    expect(screen.getByText('Birth Date:*')).toBeInTheDocument();
    expect(screen.getByText('Pick your favorite genre:*')).toBeInTheDocument();
    expect(screen.getByText('Avatar:*')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should submit the form successfully', async () => {
    render(<Form onSubmitForm={onSubmitForm} />);
    fireEvent.input(screen.getByPlaceholderText('Name'), {
      target: {
        value: 'Alex',
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Phome number'), {
      target: {
        value: '1234567890',
      },
    });
    fireEvent.input(screen.getByLabelText('Birth Date:*'), {
      target: {
        value: '1990-01-01',
      },
    });
    fireEvent.change(screen.getByLabelText('Pick your favorite genre:*'), {
      target: {
        value: 'action',
      },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
});
