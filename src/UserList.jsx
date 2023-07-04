/* eslint-disable react/prop-types */

function UserList({ users }) {
  const renderUsers = users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">
        {renderUsers}
      </tbody>
    </table>
  )
}

export default UserList