import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const submitProps = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchBar submitProps={submitProps} currentQuery={''} />
    );
    const input = getByPlaceholderText('Search');
    const button = getByText('Search');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call submitProps with search query when form is submitted', () => {
    const submitProps = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchBar submitProps={submitProps} currentQuery={''} />
    );
    const input = getByPlaceholderText('Search');
    const button = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    expect(submitProps).toHaveBeenCalledTimes(1);
    expect(submitProps).toHaveBeenCalledWith('test');
  });

  it('renders without placeholder', () => {
    const handleSubmit = vi.fn();

    render(<SearchBar submitProps={handleSubmit} currentQuery="" />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
