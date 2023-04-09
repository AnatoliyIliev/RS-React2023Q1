import { render, screen } from '@testing-library/react';
import FormsPage from '../pages/FormsPage';

describe('FormsPage', () => {
  it('should render all form fields and a submit button', () => {
    render(<FormsPage />);

    expect(screen.getByText('Name:*')).toBeInTheDocument();
    expect(screen.getByText('Phone Number:*')).toBeInTheDocument();
    expect(screen.getByText('Gender:*')).toBeInTheDocument();
    expect(screen.getByText('Birth Date:*')).toBeInTheDocument();
    expect(screen.getByText('Pick your favorite genre:*')).toBeInTheDocument();
    expect(screen.getByText('Avatar:*')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
