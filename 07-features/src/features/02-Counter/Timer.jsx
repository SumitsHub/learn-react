import { Fragment, useState } from 'react';
import './Timer.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [clock, setClock] = useState({ min: 0, sec: 0 });

  const [intr, setIntr] = useState(null);

  const startTimer = () => {
    if (intr) {
      clearInterval(intr);
    }
    let interval = setInterval(() => {
      setClock(prevState => {
        if (prevState.sec > 0) {
          return { ...prevState, sec: prevState.sec - 1 };
        } else if (prevState.sec === 0 && prevState.min > 0) {
          return { ...prevState, min: prevState.min - 1, sec: 59 };
        } else {
          clearInterval(intr);
          return { min: 0, sec: 0 };
        }
      });
    }, 1000);
    setIntr(interval);
  };

  const handleStart = () => {
    let mint = Math.floor(seconds / 60);
    setClock(prevState => {
      return {
        ...prevState,
        min: mint + parseInt(minutes),
        sec: parseInt(seconds) % 60,
      };
    });

    startTimer();
  };

  const handlePause = () => {
    if (intr === null) {
      startTimer();
    } else {
      clearInterval(intr);
      setIntr(null);
    }
  };

  const handleReset = () => {
    clearInterval(intr);
    setMinutes(0);
    setSeconds(0);
    setClock({ min: 0, sec: 0 });
  };
  return (
    <Fragment>
      <h1>Timer - Uplers Screening Question</h1>
      <div className="input-container">
        <label>
          <input
            type="number"
            value={minutes}
            onChange={e => {
              setMinutes(parseInt(e.target.value));
            }}
          />
          Minutes
        </label>
        <label>
          <input
            type="number"
            value={seconds}
            onChange={e => {
              setSeconds(parseInt(e.target.value));
            }}
          />
          Seconds
        </label>
      </div>

      <div className="btn-container">
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>
          {intr !== null ? 'PAUSE' : 'RESUME'}
        </button>
        <button onClick={handleReset}>RESET</button>
      </div>

      <h1 data-testid="running-clock">
        {(clock.min + '').padStart(2, 0)}:{(clock.sec + '').padStart(2, 0)}
      </h1>
    </Fragment>
  );
};
export default Timer;
