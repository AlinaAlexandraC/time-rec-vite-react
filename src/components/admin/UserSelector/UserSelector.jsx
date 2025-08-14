import "./UserSelector.css";
import SearchBar from "../SearchBar/SearchBar";

const UserSelector = ({ applyFilters, setApplyFilters }) => {
  return (
    <div className="export-data-wizard-users-select-container">
      <SearchBar />
      <span>Select all</span>
      <button onClick={() => setApplyFilters(!applyFilters)}>Preview Data</button>
    </div>
  );
};

export default UserSelector;
