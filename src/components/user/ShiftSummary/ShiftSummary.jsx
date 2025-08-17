import ChartWrapper from "../../ChartWrapper/ChartWrapper";
import "./ShiftSummary.css";

const ShiftSummary = () => {
  return (
    <div className="shift-summary-container">
      <span className="shift-summary title">Activities Summary</span>
      <ChartWrapper />
    </div>
  );
};

export default ShiftSummary;
