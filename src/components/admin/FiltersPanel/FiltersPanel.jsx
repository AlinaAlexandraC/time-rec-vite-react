import "./FiltersPanel.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const FiltersPanel = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  applyFilters,
  setApplyFilters,
}) => {
  return (
    <div className="export-data-wizard-filters-container">
      <div className="export-data-wizard-team-dropdown input-container">
        <label htmlFor="team">Select Team</label>
        <select name="team" id="team">
          <option value="default">Select Team</option>
          <option value="team-1">Team 1</option>
          <option value="team-2">Team 2</option>
          <option value="team-3">Team 3</option>
        </select>
      </div>
      <div className="export-data-wizard-active-toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Active</span>
      </div>
      <div className="export-data-wizard-start-date input-container">
        <label for="start-date">From Date</label>
        <Flatpickr
          options={{ maxDate: "today", dateFormat: "d/m/Y" }}
          value={startDate}
          id="start-date"
          onChange={setStartDate}
          placeholder="Select date range"
        />
      </div>
      <div className="export-data-wizard-end-date input-container">
        <label htmlFor="end-date">To Date</label>
        <Flatpickr
          options={{ maxDate: "today", dateFormat: "d/m/Y" }}
          value={endDate}
          id="end-date"
          onChange={setEndDate}
          placeholder="Select date range"
        />
      </div>
      <button onClick={() => setApplyFilters(!applyFilters)}>
        Apply Filters
      </button>
    </div>
  );
};

export default FiltersPanel;
