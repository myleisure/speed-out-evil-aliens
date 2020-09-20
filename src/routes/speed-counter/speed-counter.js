import React, { useState } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './speed-counter.css';

export default () => {
  const [speed, setSpeed] = useState(0);
  useStyles(s);

  function increaseSpeed() {
    if (speed === 0) {
      setSpeed(0.1);
    } else if (speed + 0.1 < 2) {
      setSpeed(speed + 0.1);
    } else {
      setSpeed(2);
    }
  }

  function decreaseSpeed() {
    const newSpeed = speed - 0.1;
    if (newSpeed > 0) {
      setSpeed(newSpeed);
    } else {
      setSpeed(0);
    }
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Speed counter</h1>
        <h3>Current speed: {speed}</h3>
        <div className={s.formGroup}>
          <button
            className={s.button}
            onClick={() => increaseSpeed()}
            type="button"
          >
            Increase speed
          </button>
        </div>
        <div className={s.formGroup}>
          <button
            className={s.button}
            onClick={() => decreaseSpeed()}
            type="button"
          >
            Decrease speed
          </button>
        </div>
      </div>
    </div>
  );
};
