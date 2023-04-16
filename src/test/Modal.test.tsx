import { render, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Modal from '../components/Modal';

describe('Modal', () => {
  const onClose = vi.fn();

  it('renders the children', () => {
    const { getByText } = render(
      <Modal onClose={() => {}}>
        <div>Test Content</div>
      </Modal>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should not call onClose when clicking on the content', () => {
    const { getByTestId } = render(
      <Modal onClose={onClose}>
        <div data-testid="modal-content" />
      </Modal>
    );

    const content = getByTestId('modal-content');
    fireEvent.click(content);

    expect(onClose).not.toHaveBeenCalled();
  });
});
