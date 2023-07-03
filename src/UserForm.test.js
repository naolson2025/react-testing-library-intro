import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // render the component in isolation
  // it is rendered in a nodejs environment, no browser
  // jsdom creates a fake browser environment
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - check that the output is as expected
  // toHaveLength is a matcher from jest
  expect(inputs).toHaveLength(2);
  // toBeInTheDocument is a matcher from React testing library
  // matchers specific to the DOM
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  // mock will keep track of how many times it was called & with what arguments
  const mock = jest.fn();
  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  // this example is brittle because if the textbox order changes
  // this test will fail
  // const [nameInput, emailInput] = screen.getAllByRole('textbox'); // brittle don't use
  // good example, get textbox with id of 'name'
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard('jane');

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  await user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});
