import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

// we are intentionally avoiding beforeEach here
// because react testing library does not recommend rendering
// the component in beforeEach, but its fine
// so we make it a helper fn instead of beforeEach
function renderComponent() {
  // render the component
  const users = [
    { name: 'John', email: 'john@john.com' },
    { name: 'Jane', email: 'jane@jane.com' },
  ]
  // container is automatically added by the testing-library
  render(<UserList users={users} />);

  return {
    users,
  }
}

test('render one row per user', () => {
  // render the component
  const users = [
    { name: 'John', email: 'john@john.com' },
    { name: 'Jane', email: 'jane@jane.com' },
  ]
  // container is automatically added by the testing-library
  const { container } = render(<UserList users={users} />);

  // find all the rows in the table
  // ** option 1 **
  // screen.logTestingPlaygroundURL(); // will give us a link to testing playground
  // const rows = screen.getAllByRole('row');

  // ** option 2 **
  // sometimes getting by id is easier then by role
  // add data-testid to the element you want to test
  // inside the table body get all the rows
  // not always ideal because we need to add data-testid to the element just for our test
  // const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // ** option 3 **
  // red error is misleading, its a warning not an error
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody > tr');

  // assert one row in the table for each user
  expect(rows).toHaveLength(users.length);
})

test('render the email and name of each user', () => {
  // render the component
  const { users } = renderComponent();

  // log playground
  // screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toHaveTextContent(user.name);
    expect(email).toHaveTextContent(user.email);
  }
})