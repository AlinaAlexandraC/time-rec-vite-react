import "./UserEntry.css";

const UserEntry = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserEntry;
