import ChartWrapper from "../../ChartWrapper/ChartWrapper";
import "./TodayShiftList.css";

const TodayShiftList = () => {
  return (
    <div className="today-shift-list-container">
      <span className="today-shift-list-title">Activities Summary</span>
      <ChartWrapper />
    </div>
  );
};

export default TodayShiftList;
