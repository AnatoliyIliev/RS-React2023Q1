import React from 'react';
import { render } from '@testing-library/react';
import LoadingCards from '../components/LoadingCards';

describe('LoadingCards', () => {
  it('renders 20 loading cards', () => {
    const { getAllByAltText, getAllByText } = render(<LoadingCards />);
    const loadingImages = getAllByAltText('ImageLoading');
    const loadingNames = getAllByText('Loading name...');
    const loadingDates = getAllByText('Loading date...');
    const loadingAverages = getAllByText('10');
    expect(loadingImages.length).toBe(20);
    expect(loadingNames.length).toBe(20);
    expect(loadingDates.length).toBe(20);
    expect(loadingAverages.length).toBe(20);
  });
});
