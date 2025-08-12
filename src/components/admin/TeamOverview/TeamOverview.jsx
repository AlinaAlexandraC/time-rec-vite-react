import "./TeamOverview.css";
import ChartWrapper from "../../ChartWrapper/ChartWrapper";

const TeamOverview = () => {
  return (
    <div className="team-overview-container">
      <span className="team-overview-title">Activities Summary</span>
      <ChartWrapper />
      <div className="team-overview-timeframe">
        <span>Today</span>
        <span>This Week</span>
        <span>This Month</span>
      </div>
    </div>
  );
};

export default TeamOverview;
