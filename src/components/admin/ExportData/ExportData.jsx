import "./ExportData.css";
import { useState } from "react";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import UserSelector from "../UserSelector/UserSelector";
import PreviewPanel from "../PreviewPanel/PreviewPanel";

const ExportData = () => {
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [applyFilters, setApplyFilters] = useState(false);

  return (
    <div className="export-data-container">
      <div className="export-data-wizard-wrapper">
        {applyFilters === false && (
          <FiltersPanel
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            applyFilters={applyFilters}
            setApplyFilters={setApplyFilters}
          />
        )}
        {applyFilters && (
          <UserSelector
            applyFilters={applyFilters}
            setApplyFilters={setApplyFilters}
          />
        )}
      </div>
      <PreviewPanel />
    </div>
  );
};

export default ExportData;
