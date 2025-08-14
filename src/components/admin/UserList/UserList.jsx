import "./UserList.css";
import UserEntry from "../UserEntry/UserEntry";
import SearchBar from "../SearchBar/SearchBar";

const UserList = () => {
  const users = [
    {
      id: 1,
      email: "alice@example.com",
      fullName: "Alice Smith",
      teamLeader: "John Snow",
      isActive: true,
      isTracking: false,
      role: "user",
      joinDate: "2025-05-11T00:00:00.000Z",
      lastLogin: "2025-05-11T00:00:00.000Z",
    },
    {
      id: 2,
      email: "bob@example.com",
      fullName: "Bob Johnson",
      teamLeader: "John Snow",
      isActive: false,
      isTracking: true,
      role: "user",
      joinDate: "2025-05-11T00:00:00.000Z",
      lastLogin: "2025-05-11T00:00:00.000Z",
    },
    {
      id: 3,
      email: "charlie@example.com",
      fullName: "Charlie Brown",
      teamLeader: "John Snow",
      isActive: true,
      isTracking: true,
      role: "admin",
      joinDate: "2025-05-11T00:00:00.000Z",
      lastLogin: "2025-05-11T00:00:00.000Z",
    },
  ];

  return (
    <div className="user-list-container">
      <SearchBar />
      <div className="user-list-wrapper">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Full Name</th>
              <th>Team Leader</th>
              <th>Active</th>
              <th>Tracking</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserEntry key={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
