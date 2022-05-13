import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 500,
    color: 'secondary',
  },
});

const PrettoSlider = withStyles({
  root: {
    color: 'rgba(232, 42, 42, 0.563)',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#3a2507a5',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

export const RangeSlider = () => {
  const classes = useStyles();
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
          getAriaValueText={valuetext}
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
