// Main page where users track their time.

// Combines:

// <ActivitySelector /> – dropdown or buttons for selecting activity.
// <TimerControls /> – start/stop buttons.
// <CurrentSessionDisplay /> – shows currently tracked activity and duration.
// <TodayShiftList /> – list of today’s recorded shifts (non-editable for users, editable for admins if you want).

import ActivitySelector from "../ActivitySelector/ActivitySelector";
import TodayShiftList from "../TodayShiftList/TodayShiftList";
import "./TimeTracker.css";

const TimeTracker = () => {
  return (
    <div className="time-tracker-container">
      <TodayShiftList />
      <ActivitySelector />
    </div>
  );
};

export default TimeTracker;
