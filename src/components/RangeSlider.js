import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sliderStyle, PrettoSlider} from '../styles/mui/rangeslider.mui';

export const RangeSlider = ({label}) => {
  const classes = sliderStyle();
  const [value, setValue] = useState([0, 200]);

  const dispatch = useDispatch();
  const labelState = useSelector((state) => state[label]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: 'RESOURCE_COST',
      payload: {
        resourceName: label,
        value: newValue,
      },
    });
    console.log(labelState);
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
          disabled={!labelState.checked}
        />
      </div>
      <div>
        <span className="sliderValue">
          {value[0]} / {value[1]}
        </span>
      </div>
    </div>
  );
};
