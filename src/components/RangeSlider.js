import React, {useState} from 'react';
import {sliderStyle, PrettoSlider} from '../styles/mui/rangeslider.mui';

export const RangeSlider = () => {
  const classes = sliderStyle();
  const [value, setValue] = useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sliderContainer">
      <div className={classes.root}>
        <PrettoSlider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={200}
          min={0}
          disabled={false}
        />
      </div>
      <div>
        <span className="sliderValue">65</span>
      </div>
    </div>
  );
};
