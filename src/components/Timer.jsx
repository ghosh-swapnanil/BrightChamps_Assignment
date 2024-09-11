import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ onTimeUp }) => {
  const [time, setTime] = useState(1 * 60);

  useEffect(() => {
    if (time === 0) {
      onTimeUp(); 
      return;
    }
    const timerId = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timerId);
  }, [time, onTimeUp]);
 
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='timer'>
      Time Remaining: <p>{minutes}:{seconds.toString().padStart(2, '0')}</p>
    </div>
  );
};

export default Timer;
