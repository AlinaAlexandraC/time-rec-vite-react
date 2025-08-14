import { useRef, useState } from "react";
import "./UserEntry.css";

const UserEntry = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <tr>
      <td>{user.email}</td>
      <td>{user.fullName}</td>
      <td>{user.teamLeader}</td>
      <td>{user.isActive ? "active" : "inactive"}</td>
      <td>{user.isTracking ? "active" : "inactive"}</td>
      <td>{user.role}</td>
      <td>{new Date(user.joinDate).toLocaleDateString()}</td>
      <td>{new Date(user.lastLogin).toLocaleDateString()}</td>
      <td>
        <div className={`user-entry-actions ${isDropdownOpen ? "open" : ""}`} ref={dropdownRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span>Actions</span>
          {isDropdownOpen && (
            <div className="user-entry-dropdown-content">
            <span>View</span>
            <span>Edit</span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default UserEntry;
