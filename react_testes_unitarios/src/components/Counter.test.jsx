import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increment e reset do contador', async () => {
  const user = userEvent.setup();
  render(<Counter initial={2} />);

  expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /Increment/i }));
  expect(screen.getByText(/Count: 3/i)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /Reset/i }));
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
