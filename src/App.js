import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState();
  const [isRunning, setIsRunning] = useState(false);

  const hours = Math.floor(timeLeft / 60 / 60)
    .toString()
    .padStart(2, '0');
  const minutes = (Math.floor(timeLeft / 60) - hours * 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  const changeTime = (event) => {
    setTimeLeft(event.target.value);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isRunning && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : ''));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Seconds" type="number" onChange={changeTime} value={timeLeft} />
        <button className="startBtn" onClick={handleStart}>
          Start
        </button>
        <br />
        <br />
        <div className="timeLeft">
          {timeLeft ? (
            <span>
              {hours}:{minutes}:{seconds}
            </span>
          ) : (
            <span>hh:mm:ss</span>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
