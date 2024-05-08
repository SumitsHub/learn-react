import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function index() {
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [inpTime, setInpTime] = useState({ min: '', sec: '' });

  const counterRef = useRef(null);

  const handleInput = e => {
    let name = e.target.name;
    let value = e.target.value;
    setInpTime(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(inpTime);
    setTimer();
  }, [inpTime.min, inpTime.sec]);

  const setTimer = () => {
    let numSecs = inpTime.sec ? parseInt(inpTime.sec) : 0;
    let secs = inpTime.sec ? numSecs % 60 : 0;
    let mins =
      (inpTime.min ? parseInt(inpTime.min) : 0) + parseInt(numSecs / 60);
    console.log(secs, mins);
    setTime({ min: mins, sec: secs });
  };

  const handleStart = () => {
    if (counterRef.current) {
      clearInterval(counterRef.current);
      setTimer();
    }
    counterRef.current = null;
    counterRef.current = setInterval(() => {
      console.log(counterRef.current);
      setTime(prev => {
        if (prev.sec > 0) {
          return { min: prev.min, sec: prev.sec - 1 };
        } else if (prev.min > 0) {
          return { min: prev.min - 1, sec: 59 };
        } else {
          clearInterval(counterRef.current);
          counterRef.current = null;
          return prev;
        }
      });
    }, 1000);
  };

  const handlePause = () => {
    if (counterRef.current) {
      clearInterval(counterRef.current);
      counterRef.current = null;
    } else {
      handleStart();
    }
  };

  const handleReset = () => {
    setTime({ min: 0, sec: 0 });
    setInpTime({ min: '', sec: '' });
    if (counterRef.current) {
      clearInterval(counterRef.current);
      counterRef.current = null;
    }
  };
  return (
    <div
      style={{
        width: '100vw',
        border: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{}}>
        <h1>Counter</h1>

        <h4>{`${`${time.min}`.padStart(2, 0)} mins : ${`${time.sec}`.padStart(
          2,
          0
        )} secs`}</h4>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <label htmlFor="min">
              <input
                id="min"
                type="number"
                name="min"
                value={inpTime.min}
                onChange={handleInput}
              />
              min
            </label>
            <label htmlFor="sec">
              <input
                id="sec"
                type="number"
                name="sec"
                value={inpTime.sec}
                onChange={handleInput}
              />
              sec
            </label>
          </div>

          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause/Resume</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
