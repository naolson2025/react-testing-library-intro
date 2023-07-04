import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', async () => {
  render(<App />);

  // screen.logTestingPlaygroundURL();

  // the i in the regex is for case insensitive matching
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  // type in a name & email
  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  // click submit for the form
  await user.click(button);

  // the debug statement will log the html in the terminal
  // screen.debug();

  // getByRole name & email
  const name = screen.getByRole('cell', { name: 'jane' });
  const email = screen.getByRole('cell', { name: 'jane@jane.com' });

  // expect that the user has been added to the display table
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
})