import "./ActivitiesList.css";
import ActivityEntry from "../ActivityEntry/ActivityEntry";

const ActivitiesList = ({ activities }) => {
  return (
    <ul className="activities-list-container">
      {activities.length > 0 &&
        activities.map(activity => (
          <li key={activity.id} className={`element-${activity.id}`}>
                <ActivityEntry name={activity.name} />
          </li>
        ))}
    </ul>
  );
};

export default ActivitiesList;
