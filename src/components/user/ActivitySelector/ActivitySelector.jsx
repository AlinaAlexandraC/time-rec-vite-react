import CurrentActivityDisplay from "../CurrentActivityDisplay/CurrentActivityDisplay";
import TimerControls from "../TimerControls/TimerControls";
import "./ActivitySelector.css";

const ActivitySelector = () => {
  return (
    <div className="activity-selector-container">
      <select name="activity" id="activity">
        <option value="option 1">Option 1</option>
        <option value="option 1">Option 2</option>
        <option value="option 1">Option 3</option>
        <option value="option 1">Option 4</option>
      </select>
      <TimerControls />
      <CurrentActivityDisplay />
    </div>
  );
};

export default ActivitySelector;
