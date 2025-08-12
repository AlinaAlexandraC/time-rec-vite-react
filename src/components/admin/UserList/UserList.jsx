import "./UserList.css";
import UserEntry from "../UserEntry/UserEntry";

const UserList = () => {
  const users = [
    { name: "Alice Smith", email: "alice@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
    { name: "Charlie Brown", email: "charlie@example.com" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserEntry key={index} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
