import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress(prev => {
        if (prev === 100) {
          clearInterval(timer.current);
          return 100;
        }
        // console.log('called')
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);
  return (
    <div className="App">
      <h2>Progress Bar</h2>
      <br />
      <h4>Using border</h4>
      <div style={{ border: '3px solid #ddd', width: `${progress}%` }}></div>
      <br />
      <h4>Using progress tag</h4>
      <progress value={progress} max="100" style={{ width: '100%' }}></progress>
      <p>{progress}%</p>
    </div>
  );
}
