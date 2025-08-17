import "./ActivitySelector.css";
import { useState } from "react";
import TimerControls from "../TimerControls/TimerControls";
import ActivitiesList from "../ActivitiesList/ActivitiesList";

const ActivitySelector = () => {
  const [shiftStarted, setShiftStarted] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [activities, setActivities] = useState([]);
  const [activityIndex, setActivityIndex] = useState(1);

  const handleChange = (e) => {
    setSelectedActivity(e.target.value);
  };

  const logActivity = () => {
    let newId = activityIndex;

    if (selectedActivity !== "") {
      setActivities((prev) => [
        ...prev,
        {
          id: newId,
          name: selectedActivity,
        },
      ]);
    } else {
      console.log("Please select an activity.");
      return;
    }

    setActivityIndex((prev) => prev + 1);
  };

  return (
    <div className="activity-selector-container">
      <select
        name="activity"
        id="activity"
        className="activity-selector-dropdown"
        value={selectedActivity}
        onChange={handleChange}
        required
      >
        <option value="">Select an activity</option>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3">Option 3</option>
        <option value="option 4">Option 4</option>
      </select>
      <TimerControls
        shiftStarted={shiftStarted}
        setShiftStarted={setShiftStarted}
        logActivity={logActivity}
      />
      <ActivitiesList activities={activities} />
    </div>
  );
};

export default ActivitySelector;
