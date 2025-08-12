import "./ChartWrapper.css";
import { Doughnut } from "react-chartjs-2";

const ChartWrapper = () => {
  const data = {
    labels: ["Blue", "Lilac", "Green", "Pink"],
    datasets: [
      {
        label: "Activities Summary",
        data: [30, 90, 60, 60],
        backgroundColor: ["#76aafe", "#b6b4fa", "#40ca94", "#f69199"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart-wrapper-container">
      <div className="chart-area">
        <Doughnut
          data={data}
          options={{
            plugins: { legend: { display: false } },
            maintainAspectRatio: true,
            responsive: true,
          }}
        />
      </div>
      <div className="custom-legend">
        <ul>
          <li>
            <span style={{ backgroundColor: "#76aafe" }} />
            Blue + Total time
          </li>
          <li>
            <span style={{ backgroundColor: "#b6b4fa" }} />
            Lilac + Total time
          </li>
          <li>
            <span style={{ backgroundColor: "#40ca94" }} />
            Green + Total time
          </li>
          <li>
            <span style={{ backgroundColor: "#f69199" }} />
            Pink + Total time
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChartWrapper;
