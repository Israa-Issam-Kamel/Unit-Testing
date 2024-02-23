import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from '../components/List/List';

describe('List component', () => {
  it('should render list items correctly', () => {
    render(<List />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Item 1');
    expect(items[1]).toHaveTextContent('Item 2');
    expect(items[2]).toHaveTextContent('Item 3');
  });

  it('should add new item to the list', async () => {
    render(<List />);
    const input = screen.getByPlaceholderText('Add Item');
    const addButton = screen.getByText('Add');

    await act(async () => {
      await userEvent.type(input, 'New Item');
      await userEvent.click(addButton);
    });

    await waitFor(() => {
      const newItem = screen.getByText('New Item');
      expect(newItem).toBeInTheDocument();
    });
  });

  it('should remove item from the list', async () => {
    render(<List />);
    const removeButtons = screen.getAllByText('Remove');

    await act(async () => {
      await userEvent.click(removeButtons[0]);
    });

    await waitFor(() => {
      const items = screen.queryAllByRole('listitem');
      expect(items).toHaveLength(2);
      expect(items[0]).not.toHaveTextContent('Item 1');
    });
  });
});
