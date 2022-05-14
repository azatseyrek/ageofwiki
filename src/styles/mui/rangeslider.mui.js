import {makeStyles, withStyles, Slider} from '@material-ui/core';

export const sliderStyle = makeStyles({
  root: {
    width: 500,
    color: 'secondary',
  },
});

export const PrettoSlider = withStyles({
  root: {
    color: 'rgba(204, 83, 83, 0.358)',
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
