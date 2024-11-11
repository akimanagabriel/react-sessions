import React from "react";

function Users() {
  const users = [
    {
      name: "Nkurunziza Eric",
      address: "Nyamasheke",
      ages: 20,
    },
    {
      name: "JOhn doe",
      address: "Rusizi",
      ages: 39,
    },
    {
      name: "Bermudius",
      address: "Santiago",
      ages: 39,
    },
  ];
  return (
    <div className="md:p-20 p-5">
      <h1 className="text-2xl font-bold text-indigo-600 uppercase">
        Users list
      </h1>

      {/* display all users */}
      <table>
        <tr>
          <th>Names</th>
          <th>Address</th>
          <th>Ages</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.ages}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Users;
