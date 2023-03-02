import React, { useEffect, useState } from 'react';

const timerStyles = {
  color: 'red',
  textAlign: 'center',
  width: '100%',
  height: '40px',
  fontSize: '1.3em',
  fontWeight: 'bold',
  margin: '0',
};

const Timer = ({ date }) => {
  const [finishTime] = useState(date.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) return;
    setDiff([
      Math.floor(diff / 86400),
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerId = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerId);
  }, [tick]);

  return (
    <p style={timerStyles}>{`${diffDays} days ${diffH
      .toString()
      .padStart(2, '0')}:${diffM.toString().padStart(2, '0')}:${diffS
      .toString()
      .padStart(2, '0')}`}</p>
  );
};

export default Timer;
