import "./TimerControls.css";

const TimerControls = ({ shiftStarted, setShiftStarted, logActivity }) => {
  return (
    <div className="timer-controls-container">
      {shiftStarted ? (
        <button onClick={logActivity}>Change</button>
      ) : (
        <button
          onClick={() => {
            setShiftStarted(!shiftStarted);
            logActivity();
          }}
        >
          Start
        </button>
      )}
      <button>Stop</button>
    </div>
  );
};

export default TimerControls;
