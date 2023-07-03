import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // render the component in isolation
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - check that the output is as expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
})